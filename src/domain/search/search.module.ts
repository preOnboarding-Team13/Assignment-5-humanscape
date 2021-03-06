import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Trials } from "../entities/trials.entity";
import { UpdatedTrialBundles } from "../entities/updatedTrialBundles.entity";
import { UpdatedTrials } from "../entities/updatedTrials.entity";
import { SearchController } from "./search.controller";
import { SearchRepository } from "./search.repository";
import { SearchService } from "./search.service";
import { SearchPageRepository } from "./searchPage.repository";

@Module({
	imports: [
		TypeOrmModule.forFeature([
			Trials,
			UpdatedTrials,
			UpdatedTrialBundles,
			SearchRepository,
			SearchPageRepository
		])
	],
	controllers: [SearchController],
	providers: [SearchService]
})
export class SearchModule {}
