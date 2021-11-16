import { EntityRepository, Repository } from "typeorm";
import { Trials } from "../entities/trials.entity";

@EntityRepository(Trials)
export class SearchRepository extends Repository<Trials> {
	async findTrials(trial_id: string) {
		const result = await this.query(`select value
from trials, json_each(data)
where json_extract(json_each.value, '$.trial_id') LIKE '%${trial_id}%'`);

		return JSON.parse(result[0].value);
	}
}
