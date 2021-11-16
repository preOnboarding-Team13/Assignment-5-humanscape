import { UpdatedTrials } from "src/domain/entities/updatedTrials.entity";
import { EntityRepository, MoreThanOrEqual, Repository } from "typeorm";

@EntityRepository(UpdatedTrials)
export class UpdatedTrialsRepository extends Repository<UpdatedTrials> {
	async createOne(data) {
		const updatedTrials = new UpdatedTrials();
		updatedTrials.data = data;
		return await this.save(updatedTrials);
	}

	async findDataFor(days) {
		const date = new Date();
		date.setDate(date.getDate() - days);

		return await this.find({
			where: { createdAt: MoreThanOrEqual(date) }
		});
	}
}
