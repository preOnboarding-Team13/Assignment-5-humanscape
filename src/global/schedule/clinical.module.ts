import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TrialsRepository } from "./trials.repository";
import { ClinicalBatchService } from "./clinical.schedule";
import { UpdatedTrialsRepository } from "./updatedTrials.repository";
import { UpdatedTrialBundlesRepository } from "./updatedTrialBundles.repository";

@Module({
	imports: [
		TypeOrmModule.forFeature([
			TrialsRepository,
			UpdatedTrialsRepository,
			UpdatedTrialBundlesRepository
		]),
		HttpModule
	],
	providers: [ClinicalBatchService]
})
export class ClinicalModule {}
