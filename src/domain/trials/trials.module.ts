import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrialsRepository } from './trials.repository';
import { TrialsService } from './trials.service';
import { UpdatedTrialBundlesRepository } from './updatedTrialBundles.repository';
import { UpdatedTrialsRepository } from './updatedTrials.repository';

@Module({
	imports: [
		TypeOrmModule.forFeature([
			TrialsRepository,
			UpdatedTrialsRepository,
			UpdatedTrialBundlesRepository
		]),
		HttpModule
	],
	providers: [TrialsService]
})
export class TrialsModule {}
