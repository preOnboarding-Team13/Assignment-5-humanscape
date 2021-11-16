import { Test, TestingModule } from '@nestjs/testing';
import _ from 'lodash';
import { TrialsRepository } from './trials.repository';
import { TrialsService } from './trials.service';
import { UpdatedTrialBundlesRepository } from './updatedTrialBundles.repository';
import { UpdatedTrialsRepository } from './updatedTrials.repository';

const mockTrialsRepository = {};
const mockUpdatedTrialsRepository = {
  createOne: jest.fn(async (test) => {
    console.log(test);
    return Object.keys(JSON.parse(test))
  })
};
const mockUpdatedTrialBundlesRepository = {
  
};
const callGetTrialsAPI = jest.fn(() => {
	return Promise.resolve({})
});

const resultFromAPI = [

];
describe('Trials Service', () => {
	let service: TrialsService;
  
	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [TrialsService,
				{
					provide: TrialsRepository,
					useValue: mockTrialsRepository
				},
				{
					provide: UpdatedTrialsRepository,
					useValue: mockUpdatedTrialsRepository
				},
				{
					provide: UpdatedTrialBundlesRepository,
					useValue: mockUpdatedTrialBundlesRepository
				}
			],
		  }).compile(); 
		  service = module.get<TrialsService>(TrialsService);
	  });
  
    describe("makeUpdatedTrials() 테스트", () => {
      it('저번 배치와 달라진값이 없을 때', async () => {
        const data = {
          data:
          JSON.stringify({
            "T01": {
              "trial_id": "T01",
              "desc": "this is first"
            },
            "T02": {
              "trial_id": "T02",
              "desc": "this is second"
            },
          })
        }
    
        const latestData = [ data ];
    
        const now = {
          "T01": {
            "trial_id": "T01",
            "desc": "this is first"
          },
          "T02": {
            "trial_id": "T02",
            "desc": "this is second"
          },
        }
    
        const result = await service.makeUpdatedTrials(latestData, now);
    
        expect(mockUpdatedTrialsRepository.createOne).toBeCalledTimes(0);
      });
    
  
    it('DB에 기존 데이터가 아예 없을 때', async () => {
      const latestData = [ ];
  
      const now = {
        "T01": {
          "trial_id": "T01",
          "desc": "this is first"
        },
        "T02": {
          "trial_id": "T02",
          "desc": "this is second"
        },
      }
  
      const result = await service.makeUpdatedTrials(latestData, now);
  
      expect(mockUpdatedTrialsRepository.createOne).toBeCalledTimes(1);
      expect(mockUpdatedTrialsRepository.createOne)
      .toHaveBeenCalledWith('{"T01":{"trial_id":"T01","desc":"this is first"},"T02":{"trial_id":"T02","desc":"this is second"}}')
    });
    
  
    it('저번 배치와 달라진 점이 있을 때', async () => {
      const data = {
        data: JSON.stringify({
          "T01": {
            "trial_id": "T01",
            "desc": "this is first"
          },
          "T02": {
            "trial_id": "T02",
            "desc": "this is second"
          },
        })
      }
  
      const latestData = [ data ];
  
      const now = {
        "T01": {
          "trial_id": "T01",
          "desc": "변경된 데이터야~@!~"
        },
        "T02": {
          "trial_id": "T02",
          "desc": "this is second"
        },
      }
  
      const result = await service.makeUpdatedTrials(latestData, now);
  
      expect(mockUpdatedTrialsRepository.createOne)
        .toHaveBeenCalledWith('{"T01":{"trial_id":"T01","desc":"변경된 데이터야~@!~"}}');
    });
    })
});
