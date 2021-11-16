import { EntityRepository, Repository } from "typeorm";
import { UpdateTrials } from "../entities/updatedTrials.entity";

@EntityRepository(UpdateTrials)
export class SearchRepository extends Repository<UpdateTrials> {
	async findTrials(trial_id: string) {
		const result = await this.query(`select value
from updateTrials, json_each(data)
where json_extract(json_each.value, '$.trial_id') LIKE '%${trial_id}%'`);

		return JSON.parse(result[0].value);
	}
}
