import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Trials } from "../entities/trials.entity";
import { UpdateTrials } from "../entities/updatedTrials.entity";
import { SearchController } from "./search.controller";
import { SearchRepository } from "./search.repository";
import { SearchService } from "./search.service";

@Module({
	imports: [
		TypeOrmModule.forFeature([Trials, SearchRepository, UpdateTrials])
	],
	controllers: [SearchController],
	providers: [SearchService]
})
export class SearchModule {}
