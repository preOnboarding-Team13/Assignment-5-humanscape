import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('trials')
export class Trials {
  @PrimaryGeneratedColumn('increment')
  dataId!: number;

  @Column('clob')
  data!: string;

  @CreateDateColumn()
  createdAt!: Date;
}
