import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import { TrialsRepository } from "./trials.repository";
import * as _ from "lodash";
import { lastValueFrom } from "rxjs";
import { UpdatedTrialsRepository } from "./updatedTrials.repository";
import { UpdatedTrialBundlesRepository } from "./updatedTrialBundles.repository";

@Injectable()
export class ClinicalBatchService {
	constructor(
		private readonly httpService: HttpService,
		private readonly trialsRepository: TrialsRepository,
		private readonly updatedTrialsRepository: UpdatedTrialsRepository,
		private readonly updatedTrialBundlesRepository: UpdatedTrialBundlesRepository
	) {}

	private readonly CLINICAL_URL = process.env.CLINICAL_URL;
	config = {
		headers: { "Content-Type": "application/json" },
		params: {
			serviceKey: process.env.SERVICE_KEY,
			resultType: "JSON",
			numOfRows: 4,
			pageNo: 1
		}
	};

	// @Cron(CronExpression.EVERY_30_MINUTES)
	@Cron("*/20 * * * * *")
	async handleCron() {
		console.log("start");
		let information = await lastValueFrom(
			this.httpService.get(this.CLINICAL_URL, this.config)
		);

		let trials = information.data.items;
		const totalCount = information.data.totalCount;
		const pageSize = information.data.numOfRows;
		const maxPage = Math.ceil(totalCount / pageSize);

		// 처음 1페이지로 보내고 totalCount/50 +1번 페이지까지 보내
		for (let pageNo = 2; pageNo <= maxPage; pageNo++) {
			console.log(pageNo);
			this.config.params.pageNo = pageNo;
			information = await lastValueFrom(
				this.httpService.get(this.CLINICAL_URL, this.config)
			);
			const items = information.data.items;
			console.log(items.length);
			trials = [...trials, ...items];
		}

		const created = _.reduce(
			trials,
			(created, trial) => {
				created[trial.trial_id] = trial;
				return created;
			},
			{}
		);

		const latestData = await this.trialsRepository.findLatest();
		if (
			latestData.length > 0 &&
			_.isEqual(JSON.parse(latestData[0].data), created)
		) {
			return;
		}

		// insert
		const rrr = await this.trialsRepository.createOne(
			JSON.stringify(created)
		);

		let updated;
		if (latestData.length === 0) {
			updated = created;
		} else {
			const before = JSON.parse(latestData[0].data);
			const now = created;

			updated = {};
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

		await this.updatedTrialsRepository.createOne(JSON.stringify(updated));

		// updatedBundles에 insert
		const results = await this.updatedTrialsRepository.findDataFor(7);
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
