import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TrialsRepository } from "src/global/schedule/clinical.repository";
import { Trials } from "../entities/trials.entity";
import { UpdateTrials } from "../entities/updatedTrials.entity";
import { SearchController } from "./search.controller";
import { SearchService } from "./search.service";

@Module({
	imports: [
		TypeOrmModule.forFeature([Trials, TrialsRepository, UpdateTrials])
	],
	controllers: [SearchController],
	providers: [SearchService]
})
export class SearchModule {}
