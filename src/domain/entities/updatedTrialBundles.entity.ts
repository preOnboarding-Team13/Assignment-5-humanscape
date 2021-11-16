import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn
} from "typeorm";

@Entity("updatedTrialBundles")
export class UpdatedTrialBundles {
	@PrimaryGeneratedColumn("increment")
	bundle_Id!: number;

	@Column("clob")
	weekly!: string;

	@CreateDateColumn()
	createdAt!: Date;
}
