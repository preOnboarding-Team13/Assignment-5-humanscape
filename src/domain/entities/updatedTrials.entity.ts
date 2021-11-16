import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn
} from "typeorm";

@Entity("updateTrials")
export class UpdateTrials {
	@PrimaryGeneratedColumn("increment")
	updatedData_Id!: number;

	@Column("clob")
	data!: string;

	@CreateDateColumn()
	createdAt!: Date;
}
