import { UpdatedTrialBundles } from "src/domain/entities/updatedTrialBundles.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(UpdatedTrialBundles)
export class UpdatedTrialBundlesRepository extends Repository<UpdatedTrialBundles> {
	async createOne(data) {
		const updatedTrialBundles = new UpdatedTrialBundles();
		updatedTrialBundles.weekly = data;
		return await this.save(updatedTrialBundles);
	}
}
