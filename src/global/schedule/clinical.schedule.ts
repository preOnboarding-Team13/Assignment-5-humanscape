import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import axios from 'axios';
import { TrialsRepository } from './clinical.repository';
import * as _ from 'lodash';

@Injectable()
export class ClinicalBatchService {
  constructor(
    private readonly httpService: HttpService,
    private readonly trialRepository: TrialsRepository,
  ) {}

  private readonly CLINICAL_URL = process.env.CLINICAL_URL;
  headerReq = { 'Content-Type': 'application/json' };

  params = {
    serviceKey: process.env.SERVICE_KEY,
    resultType: 'JSON',
    numOfRows: 2,
    pageNo: 1,
  };

  
  @Cron('5 * * * * *')
  async handleCron() {
	let totalResult = [];
    console.log('start');
    const result = await axios.get(this.CLINICAL_URL, {
      headers: this.headerReq,
      params: this.params,
    });
    totalResult = [...totalResult, ...result.data.items];
    const totalCount = result.data.totalCount;

    // 처음 1페이지로 보내고 totalCount/50 +1번 페이지까지 보내기
    const totalPageNum = Math.ceil(totalCount / this.params.numOfRows);
    // for (let i = 2; i <= totalPageNum; i++) {
    //   console.log(i);
    //   this.params.pageNo = i;
    //   result = await axios.get(this.CLINICAL_URL, {
    //     headers: this.headerReq,
    //     params: this.params,
    //   });
    //   console.log(result.data.items.length);
    //   this.totalResult = [...this.totalResult, ...result.data.items];
    // }
    // console.log(this.totalResult.length);
    const latestData = await this.trialRepository.findLatest();
    const dataStr = JSON.stringify(totalResult);
	
    if (latestData.length !== 0) {
	  if (!_.isEqual(JSON.parse(latestData[0].data), totalResult)) {
        // insert
        const rrr = await this.trialRepository.createOne(dataStr);
    
        // TODO : 다른 부분 찾기
      } else {
        console.log('insert 안됨');
      }
    } else {
      const rrr = await this.trialRepository.createOne(dataStr);
    }
  }
}
