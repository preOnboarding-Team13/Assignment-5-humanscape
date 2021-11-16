import { NotFoundException } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { ErrorCode } from "../../global/common/ErrorCode";
import { SearchController } from "./search.controller";
import { SearchService } from "./search.service";

const mockSearchService = {
	getTrials: jest.fn(),
	getTrialsList: jest.fn()
};

describe("SearchController", () => {
	let controller: SearchController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [SearchController],
			providers: [
				{
					provide: SearchService,
					useValue: mockSearchService
				}
			]
		}).compile();

		controller = module.get<SearchController>(SearchController);
	});

	const trial_id = "KCT0006762";

	const res = {
		date_enrolment: "2021-07-05",
		date_registration: "2021-11-16",
		date_updated: "2021-09-26",
		i_freetext_kr: "기타",
		phase_kr: "해당사항없음",
		primary_outcome_1_kr: "신체기능검사",
		primary_sponsor_kr: "삼육대학교",
		results_date_completed: "2021-12-31",
		results_type_date_completed_kr: "예정",
		scientific_title_en:
			"Effects of Combined Balance Exercise Program on  Physical Function, Balance Ability and Gait in Patients with Total Knee  Replacement Arthroplasty",
		scientific_title_kr:
			"복합 균형 운동 프로그램이 무릎 인공관절 전치환술 환자의 신체기능, 균형능력 및  보행에 미치는 효과",
		source_name_kr: "삼육대학교",
		study_type_kr: "중재연구",
		trial_id: "KCT0006762",
		type_enrolment_kr: "실제등록"
	};

	const resList = {
		count: 4,
		data: [
			{
				primary_sponsor_kr: "경남대학교",
				source_name_kr: "국립재활원재활연구소",
				phase_kr: "해당사항없음",
				date_registration: "2021-11-16",
				study_type_kr: "중재연구",
				type_enrolment_kr: "예정",
				results_type_date_completed_kr: "예정",
				i_freetext_kr: "의료기구",
				results_date_completed: "2022-11-01",
				trial_id: "KCT0006764",
				scientific_title_kr:
					"뇌졸중으로 인한 편마비 장애인의 보행 재활을 위한 한 손 형 실내 이동형 보행훈련장치의 안전성과 유효성 연구",
				primary_outcome_1_kr: "운동기능",
				date_updated: "2021-11-04",
				date_enrolment: "2022-01-01",
				scientific_title_en:
					" A study on the safety and effectiveness of one-arm motorized gait training device for gait rehabilitation on the hemiplegic disabled due to stroke"
			},
			{
				primary_sponsor_kr: "동국대학교일산불교한방병원",
				source_name_kr: "한국보건산업진흥원",
				results_date_completed: "2022-12-31",
				scientific_title_kr:
					"여성 난임환자의 한의 치료 현황 및 경과 관찰을 위한 전향적 다기관 관찰연구",
				trial_id: "KCT0006763",
				primary_outcome_1_kr: "주기당 임신율",
				date_updated: "2021-11-08",
				date_registration: "2021-11-16",
				study_type_kr: "관찰연구",
				date_enrolment: "2021-11-04",
				scientific_title_en:
					"A study on the current state of Korean medicine treatment in infertile women: an observational multi-center study",
				type_enrolment_kr: "실제등록",
				results_type_date_completed_kr: "예정"
			}
		],
		cursor: {
			afterCursor: "afterS0NUMDAwNjc2Mw==",
			beforeCursor: null
		}
	};

	const cursor = "beforeS0NUMDAwNjc2Mg==";
	const pageSize = 10;

	describe("SearchController search 테스트", () => {
		it("SearchController search 특정 임상정보", async () => {
			// given
			mockSearchService.getTrials.mockResolvedValue(res);

			// when
			const result = await controller.getTrials(trial_id);

			// then
			expect(mockSearchService.getTrials).toHaveBeenCalledTimes(1);
			expect(mockSearchService.getTrials).toHaveBeenCalledWith(trial_id);
			expect(result).toEqual(res);
		});

		it("SearchController search 특정 임상정보 불러오기 실패", () => {
			try {
				mockSearchService.getTrials.mockResolvedValue(null);
				controller.getTrials(trial_id);
			} catch (error) {
				// expect(error).toBeInstanceOf(ErrorCode.NotFound);
				expect(error).toBeInstanceOf(NotFoundException);
			}
		});

		it("SearchController search 최근 일주일 내 변동사항 리스트", async () => {
			mockSearchService.getTrialsList.mockResolvedValue(resList);

			const result = await controller.getTrialsList(cursor, pageSize);

			expect(mockSearchService.getTrialsList).toHaveBeenCalledTimes(1);
			expect(mockSearchService.getTrialsList).toHaveBeenCalledWith(
				cursor,
				pageSize
			);
			expect(result).toEqual(resList);
		});

		it("SearchController search 최근 일주일 내 변동사항 리스트 불러오기 실패", () => {
			try {
				mockSearchService.getTrialsList.mockResolvedValue(null);
				controller.getTrialsList(cursor, pageSize);
			} catch (error) {
				// expect(error).toBeInstanceOf(ErrorCode.NotFound);
				expect(error).toBeInstanceOf(NotFoundException);
			}
		});
	});
});
