import { Injectable } from "@nestjs/common";
import { SearchRepository } from "./search.repository";

@Injectable()
export class SearchService {
	constructor(private readonly searchRepository: SearchRepository) {}

	async getTrials(trial_id: string) {
		return this.searchRepository.findTrials(trial_id);
	}
}
