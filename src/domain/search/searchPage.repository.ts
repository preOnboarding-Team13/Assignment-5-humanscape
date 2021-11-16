import { today } from "src/global/util/date";
import { EntityRepository, Repository } from "typeorm";
import { UpdateBundles } from "../entities/updateBundles.entity";

@EntityRepository(UpdateBundles)
export class SearchPageRepository extends Repository<UpdateBundles> {
	async trialsList(cursor: string, pageSize: number) {
		// 		let query = `select value
		// from updateBundles, json_each(weekly)
		// where createdAt = '${today()}'`;
		let query = `select value
from trials, json_each(data)
where createdAt = '2021-11-16 03:35:12'`;

		// if (cursor != undefined) {
		// 	query =
		// 		query +
		// 		`and json_extract(json_each.value, '$.trial_id') > '${cursor}'`;
		// }

		// query = query + `limit ${pageSize}`;

		const result = await this.query(query);
		const response = result.map((element) => JSON.parse(element.value));
		console.log(response);
		return result;
	}
}
