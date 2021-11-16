import { NotFoundException } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
// import { ErrorCode } from "../../global/common/ErrorCode";
import { SearchRepository } from "./search.repository";
import { SearchService } from "./search.service";
import { SearchPageRepository } from "./searchPage.repository";

const mockSearchRepository = {
	findTrials: jest.fn()
};

const mockPageRepository = {
	trialsList: jest.fn()
};

const query = {
	primary_sponsor_kr: "삼육대학교",
	source_name_kr: "삼육대학교",
	phase_kr: "해당사항없음",
	date_registration: "2021-11-16",
	study_type_kr: "중재연구",
	type_enrolment_kr: "실제등록",
	results_type_date_completed_kr: "예정",
	i_freetext_kr: "기타",
	results_date_completed: "2021-12-31",
	trial_id: "KCT0006762",
	scientific_title_kr:
		"복합 균형 운동 프로그램이 무릎 인공관절 전치환술 환자의 신체기능, 균형능력 및  보행에 미치는 효과",
	primary_outcome_1_kr: "신체기능검사",
	date_updated: "2021-09-26",
	date_enrolment: "2021-07-05",
	scientific_title_en:
		"Effects of Combined Balance Exercise Program on  Physical Function, Balance Ability and Gait in Patients with Total Knee  Replacement Arthroplasty"
};

const res = {
	count: 4,
	data: [
		{
			primary_sponsor_kr: "삼육대학교",
			source_name_kr: "삼육대학교",
			phase_kr: "해당사항없음",
			date_registration: "2021-11-16",
			study_type_kr: "중재연구",
			type_enrolment_kr: "실제등록",
			results_type_date_completed_kr: "예정",
			i_freetext_kr: "기타",
			results_date_completed: "2021-12-31",
			trial_id: "KCT0006762",
			scientific_title_kr:
				"복합 균형 운동 프로그램이 무릎 인공관절 전치환술 환자의 신체기능, 균형능력 및  보행에 미치는 효과",
			primary_outcome_1_kr: "신체기능검사",
			date_updated: "2021-09-26",
			date_enrolment: "2021-07-05",
			scientific_title_en:
				"Effects of Combined Balance Exercise Program on  Physical Function, Balance Ability and Gait in Patients with Total Knee  Replacement Arthroplasty"
		},
		{
			primary_sponsor_kr: "전북대학교병원",
			source_name_kr: "전북대학교병원",
			phase_kr: "해당사항없음",
			date_registration: "2021-11-16",
			study_type_kr: "중재연구",
			type_enrolment_kr: "실제등록",
			results_type_date_completed_kr: "예정",
			i_freetext_kr: "기타",
			results_date_completed: "2022-12-31",
			trial_id: "KCT0006761",
			scientific_title_kr:
				"만성폐쇄성폐질환 환자에서 입술오므림 호흡이 최대운동능력에 미치는 영향",
			primary_outcome_1_kr: "심폐운동부하검사 (최대산소섭취량)",
			date_updated: "2021-11-08",
			date_enrolment: "2018-12-19",
			scientific_title_en:
				"The effect of maximal exercise capacity according to closed-lip breathing in patients with chronic obstructive pulmonary disease"
		}
	],
	cursor: {
		afterCursor: null,
		beforeCursor: "beforeS0NUMDAwNjc2Mg=="
	}
};

const traial_id = "KCT0006762";
const failTrial_id = "KC0000000";

const beforCursor = "beforeS0NUMDAwNjc2Mg==";
const cursor = "afterS0NUMDAwNjc2Mw";
const strangeCursor = "strange";

const pageSize = 2;
describe("SearchService", () => {
	let service: SearchService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				SearchService,
				{
					provide: SearchRepository,
					useValue: mockSearchRepository
				},
				{
					provide: SearchPageRepository,
					useValue: mockPageRepository
				}
			]
		}).compile();

		service = module.get<SearchService>(SearchService);
	});

	describe("SearchService getHistory 테스트", () => {
		it("SearchService get Trial ID 테스트 (성공)", async () => {
			// given
			mockSearchRepository.findTrials.mockResolvedValue(query);
			// when
			const result = await service.getTrials(traial_id);
			// then :test 결과
			expect(mockSearchRepository.findTrials).toHaveBeenCalledTimes(1);
			expect(mockSearchRepository.findTrials).toHaveBeenCalledWith(
				traial_id
			);
			expect(result).toEqual(query);
		});

		it("SearchService get Trial ID 테스트 (실패) - updateTrials undefined", async () => {
			try {
				// given
				mockSearchRepository.findTrials.mockResolvedValue(null);
				// when
				const result = await service.getTrials(failTrial_id);
			} catch (err) {
				// then
				// expect(err).toBeInstanceOf(ErrorCode.NotFound);
				expect(err).toBeInstanceOf(NotFoundException);
			}
		});

		it("SearchService get Trial List 테스트 Cursor (성공)", async () => {
			// given
			mockPageRepository.trialsList.mockResolvedValue(res);
			// when
			const result = await service.getTrialsList(cursor, pageSize);

			// then
			expect(mockPageRepository.trialsList).toHaveBeenCalledTimes(1);
			expect(mockPageRepository.trialsList).toHaveBeenCalledWith(
				cursor,
				pageSize
			);
			expect(result).toEqual(res);
		});

		it("SearchService get Trial List 테스트 (실패) - Cursor 오류", async () => {
			try {
				// given
				mockPageRepository.trialsList.mockResolvedValue(null);
				// when
				const result = await service.getTrialsList(
					strangeCursor,
					pageSize
				);
			} catch (err) {
				// then
				expect(err).toBeInstanceOf(NotFoundException);
			}
		});
	});
});
