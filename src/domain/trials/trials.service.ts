import { Injectable, Logger } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import * as _ from "lodash";
import { TrialsRepository } from "./trials.repository";
import { UpdatedTrialsRepository } from "./updatedTrials.repository";
import { UpdatedTrialBundlesRepository } from "./updatedTrialBundles.repository";
import {
	arrayToObject,
	callGetTrialsAPI,
	makeUniqueObject
} from "src/utils/batchFunctions";

@Injectable()
export class TrialsService {
	constructor(
		private readonly trialsRepository: TrialsRepository,
		private readonly updatedTrialsRepository: UpdatedTrialsRepository,
		private readonly updatedTrialBundlesRepository: UpdatedTrialBundlesRepository
	) {}
	private readonly logger = new Logger(TrialsService.name);

	private readonly CLINICAL_URL = process.env.CLINICAL_URL;
	private trialsConfig = {
		config: {
			headers: { "Content-Type": "application/json" },
			params: {
				serviceKey: process.env.SERVICE_KEY,
				resultType: "JSON",
				numOfRows: 50,
				pageNo: 1
			}
		},
		key: "items"
	};

	@Cron(CronExpression.EVERY_DAY_AT_5AM)
	async handleCron() {
		this.logger.log("started...");

		const trials = await callGetTrialsAPI(
			this.CLINICAL_URL,
			this.trialsConfig.key,
			this.trialsConfig.config
		);
		this.logger.log(JSON.stringify(trials));

		const keyField = "trials_id";
		const trialsObject = arrayToObject(trials, keyField);

		const latestData = await this.trialsRepository.findLatest();
		if (
			latestData.length > 0 &&
			_.isEqual(JSON.parse(latestData[0].data), trialsObject)
		) {
			return;
		}

		const created = await this.trialsRepository.createOne(
			JSON.stringify(trialsObject)
		);
		this.logger.log(JSON.stringify(created));

		const updated = await this.makeUpdatedTrials(latestData, trialsObject);
		this.logger.log(JSON.stringify(updated));

		updated && (await this.makeUpdatedTrialBundle(7));
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

		return !_.isEmpty(updated)
			? await this.updatedTrialsRepository.createOne(
					JSON.stringify(updated)
			  )
			: null;
	}

	async makeUpdatedTrialBundle(days: number) {
		// updatedBundles에 insert
		const results = await this.updatedTrialsRepository.findDataFor(days);
		const updatedBundle = makeUniqueObject(results);
		await this.updatedTrialBundlesRepository.createOne(
			JSON.stringify(updatedBundle)
		);

		this.logger.log(results);
	}
}
