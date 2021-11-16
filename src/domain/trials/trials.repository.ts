import { Trials } from "src/domain/entities/trials.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Trials)
export class TrialsRepository extends Repository<Trials> {
	async findLatest() {
		return await this.find({
			order: {
				dataId: "DESC"
			},
			take: 1
		});
	}
	async createOne(data) {
		const trials = new Trials();
		trials.data = data;
		return await this.save(trials);
	}
}
