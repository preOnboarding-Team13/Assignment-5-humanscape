import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import * as _ from "lodash";
import { lastValueFrom } from "rxjs";
import { AxiosRequestConfig } from "axios";
import { TrialsRepository } from "./trials.repository";
import { UpdatedTrialsRepository } from "./updatedTrials.repository";
import { UpdatedTrialBundlesRepository } from "./updatedTrialBundles.repository";
import { arrayToObject, callGetTrialsAPI } from "src/utils/batchFunctions";

@Injectable()
export class TrialsService {
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
		key: "items"
	}

	// @Cron(CronExpression.EVERY_30_MINUTES)
	@Cron("*/20 * * * * *")
	async handleCron() {
		console.log("start");

		const trials = await callGetTrialsAPI(this.CLINICAL_URL, this.trialsConfig.key, this.trialsConfig.config);
	
		const keyField = "trials_id";
		const trialsObject = arrayToObject(trials, keyField);
		
		const latestData = await this.trialsRepository.findLatest();
		if (latestData.length > 0 && _.isEqual(JSON.parse(latestData[0].data), trialsObject)) {
			return;
		}

		await this.trialsRepository.createOne(JSON.stringify(trialsObject));
		await this.makeUpdatedTrials(latestData, trialsObject);
		await this.makeUpdatedTrialBundle(7);
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

	
}
