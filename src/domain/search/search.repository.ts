import { EntityRepository, Repository } from "typeorm";
import { Trials } from "../entities/trials.entity";

@EntityRepository(Trials)
export class SearchRepository extends Repository<Trials> {
	async findTrials(trial_id: string) {
		const result = await this.createQueryBuilder("t");
		return null;
	}
}
