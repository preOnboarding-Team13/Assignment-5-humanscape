import { HttpService } from "@nestjs/axios";
import { AxiosRequestConfig } from "axios";
import _ from "lodash";
import { lastValueFrom } from "rxjs";

export async function arrayToObject(arrayItems, keyField: string) {
	return _.reduce(arrayItems, (object, item) => {
		object[item[keyField]] = item;
		return object;
	}, {});
}

export async function callGetTrialsAPI(url: string, dataKey: string, config: AxiosRequestConfig): Promise<[any]> {
	const httpService = new HttpService();
	let information = await lastValueFrom(
		httpService.get(url, config)
	);
	// 최초 요청
	let allData = information.data[dataKey];
	
	const totalCount = information.data[config.params.totalCount];
	const pageSize = information.data[config.params.numOfRows];
	const maxPage = Math.ceil(totalCount / pageSize);

	// 2 page ~ maxPage
	// for (let pageNo = 2; pageNo <= maxPage; pageNo++) {
	// 	config.params.pageNo = pageNo;
	// 	information = await lastValueFrom(
	// 		this.httpService.get(url, config)
	// 	);
	// 	const items = information.data[dataKey];
	// 	allData = [...allData, ...items];
	// }
	return allData;
}
