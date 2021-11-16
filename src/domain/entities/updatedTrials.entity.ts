import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn
} from "typeorm";

@Entity("updatedTrials")
export class UpdatedTrials {
	@PrimaryGeneratedColumn("increment")
	updatedData_Id!: number;

	@Column("clob")
	data!: string;

	@CreateDateColumn()
	createdAt!: Date;
}
