import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trials } from './domain/entities/trials.entity';
import { UpdateTrials } from './domain/entities/updatedTrials.entity';
import { SearchModule } from './domain/search/search.module';
import { ClinicalModule } from './global/schedule/clinical.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'test.db', //':memory:',
      entities: [Trials, UpdateTrials],
      synchronize: true,
      keepConnectionAlive: true,
    }),
    ClinicalModule,
    SearchModule
  ],
})
export class AppModule {}
// 1. cron & batch Test (ex, 5초마다 작업이 되는지)
// 2. 공공데이터 api 전체 조회해오기, (ex, count:145 일 경우, 다수의 호출로 전체를 호출 후 합치기) obj = {...obj1, ...obj2}
// 3. DB에 Object.stringfy 하여, 스트링으로 저장하기
// 4. 전체 조회 후, 가장 최근의 DB 데이터와 _.isEqual(a,b) 로 같은지 다른지 비교하기
// 4-1 다를 경우, {id:key, property1:value1, property2, value2} 형식으로 저장
// 4-2 같을 경우, pass
