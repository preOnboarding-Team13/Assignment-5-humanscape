import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import { TrialsRepository } from "./trials.repository";
import * as _ from "lodash";
import { lastValueFrom } from "rxjs";
import { UpdatedTrialsRepository } from "./updatedTrials.repository";
import { UpdatedTrialBundlesRepository } from "./updatedTrialBundles.repository";
import { AxiosRequestConfig } from "axios";

@Injectable()
export class ClinicalBatchService {
	constructor(
		private readonly httpService: HttpService,
		private readonly trialsRepository: TrialsRepository,
		private readonly updatedTrialsRepository: UpdatedTrialsRepository,
		private readonly updatedTrialBundlesRepository: UpdatedTrialBundlesRepository
	) {}

	private readonly CLINICAL_URL = process.env.CLINICAL_URL;
	private trialsConfig =
	{
		config: {
			headers: { "Content-Type": "application/json" },
			params: {
				serviceKey: process.env.SERVICE_KEY,
				resultType: "JSON",
				numOfRows: 4,
				pageNo: 1
			},
		},
		key: "asd"
	}

	// @Cron(CronExpression.EVERY_30_MINUTES)
	@Cron("*/20 * * * * *")
	async handleCron() {
		console.log("start");

		const trials = await this.callGetTrialsAPI(this.CLINICAL_URL, this.trialsConfig.key, this.trialsConfig.config);
	
		const keyField = "trials_id";
		const trialsObject = this.arrayToObject(trials, keyField);
		
		const latestData = await this.trialsRepository.findLatest();
		if (latestData.length > 0 && _.isEqual(JSON.parse(latestData[0].data), trialsObject)) {
			return;
		}

		await this.trialsRepository.createOne(JSON.stringify(trialsObject));
		await this.makeUpdatedTrials(latestData, trialsObject);
		await this.makeUpdatedTrialBundle(7);
	}

	async callGetTrialsAPI(url: string, dataKey, config: AxiosRequestConfig): Promise<[any]> {
		let information = await lastValueFrom(
			this.httpService.get(url, config)
		);

		// 최초 요청
		let allData = information.data[dataKey];
		
		const totalCount = information.data[config.params.totalCount];
		const pageSize = information.data[config.params.numOfRows];
		const maxPage = Math.ceil(totalCount / pageSize);

		// 처음 1페이지로 보내고 totalCount/50 +1번 페이지까지 보내
		for (let pageNo = 2; pageNo <= maxPage; pageNo++) {
			config.params.pageNo = pageNo;
			information = await lastValueFrom(
				this.httpService.get(url, config)
			);
			const items = information.data[dataKey];
			allData = [...allData, ...items];
		}
		return allData;
	}

	async makeUpdatedTrials(latestData, trialsObject) {
		let updated = {};
		if (latestData.length === 0) {
			updated = trialsObject;
		} else {
			const before = JSON.parse(latestData[0].data);
			const now = trialsObject;

			for (const key in now) {
				// 새로 추가
				if (before[key] === undefined) {
					updated[key] = now[key];
					continue;
				}
				// updated확인
				if (!_.isEqual(before[key], now[key])) {
					updated[key] = now[key];
					continue;
				}
			}
		}
		const result = await this.updatedTrialsRepository.createOne(
			JSON.stringify(updated)
		);
		return result;
	}
	async makeUpdatedTrialBundle(days: number) {
		// updatedBundles에 insert
		const results = await this.updatedTrialsRepository.findDataFor(days);
		const updatedBundle = _.reduce(
			results,
			(prev, cur) => {
				const aaa = JSON.parse(cur.data);
				prev = { ...prev, ...aaa };
				return prev;
			},
			{}
		);
		await this.updatedTrialBundlesRepository.createOne(
			JSON.stringify(updatedBundle)
		);
		console.log(results);
	}

	async arrayToObject(arrayItems, keyField: string) {
		return _.reduce(arrayItems, (object, item) => {
			object[item[keyField]] = item;
			return object;
		}, {});
	}
}
