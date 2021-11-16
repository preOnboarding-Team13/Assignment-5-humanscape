import { Controller, Get, Param, Query } from "@nestjs/common";
import { SearchService } from "./search.service";

@Controller("search")
export class SearchController {
	constructor(private readonly searchService: SearchService) {}

	// 특정 임상정보 읽기
	@Get(":trial_id")
	async getTrials(@Param("trial_id") trial_id: string) {
		return await this.searchService.getTrials(trial_id);
	}

	// 최근 일주일내에 변동사항이 있던 임상정보 읽기
	@Get()
	async getTrialsList(
		@Query("cursor") cursor: string,
		@Query("pageSize") pageSize: number
	) {
		return await this.searchService.getTrialsList(cursor, pageSize);
	}
}
