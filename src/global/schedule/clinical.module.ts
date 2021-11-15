import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrialsRepository } from './clinical.repository';
import { ClinicalBatchService } from './clinical.schedule';

@Module({
  imports: [TypeOrmModule.forFeature([TrialsRepository]), HttpModule],
  providers: [ClinicalBatchService],
})
export class ClinicalModule {}
