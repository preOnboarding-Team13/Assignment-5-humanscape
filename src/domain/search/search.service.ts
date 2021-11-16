import { Injectable } from "@nestjs/common";
import { SearchRepository } from "./search.repository";
import { SearchPageRepository } from "./searchPage.repository";

@Injectable()
export class SearchService {
	constructor(
		private readonly searchRepository: SearchRepository,
		private readonly searchPageRepository: SearchPageRepository
	) {}

	async getTrials(trial_id: string) {
		return await this.searchRepository.findTrials(trial_id);
	}

	async getTrialsList(cursor: string, pageSize: number) {
		return await this.searchPageRepository.trialsList(cursor, pageSize);
	}
}
