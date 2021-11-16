import { EntityRepository, Repository } from "typeorm";
import { UpdatedTrials } from "../entities/updatedTrials.entity";
import { NotFoundDataException } from "./exception/NotFoundDataException";

@EntityRepository(UpdatedTrials)
export class SearchRepository extends Repository<UpdatedTrials> {
	async findTrials(trial_id: string) {
		const queryResult = await this.query(`
			SELECT value
			FROM updateTrials, json_each(data)
			WHERE json_extract(json_each.value, '$.trial_id') LIKE '%${trial_id}%'`);

		if (queryResult.length === 0) {
			throw new NotFoundDataException();
		}

		return JSON.parse(queryResult[0].value);
	}
}
