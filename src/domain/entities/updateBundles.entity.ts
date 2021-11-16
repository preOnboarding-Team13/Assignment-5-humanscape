import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn
} from "typeorm";

@Entity("updateBundles")
export class UpdateBundles {
	@PrimaryGeneratedColumn("increment")
	bundle_Id!: number;

	@Column("clob")
	weekly!: string;

	@CreateDateColumn()
	createdAt!: Date;
}
