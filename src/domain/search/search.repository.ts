import { EntityRepository, Repository } from "typeorm";
import { UpdatedTrials } from "../entities/updatedTrials.entity";

@EntityRepository(UpdatedTrials)
export class SearchRepository extends Repository<UpdatedTrials> {
	async findTrials(trial_id: string) {
		const result = await this.query(`select value
from updateTrials, json_each(data)
where json_extract(json_each.value, '$.trial_id') LIKE '%${trial_id}%'`);

		return JSON.parse(result[0].value);
	}
}
