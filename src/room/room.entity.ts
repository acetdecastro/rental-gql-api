import { BaseEntity, Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Room extends BaseEntity {
  @ObjectIdColumn()
  _id: string;

  @Column({ nullable: true })
  agreementIds: string[];

  @Column()
  status: string;

  @Column()
  name: string;

  @Column()
  ratePer30Days: number;

  @Column({ default: true })
  isWaterMetered: boolean;

  @Column({ default: true })
  isElectricityMetered: boolean;

  @Column({ default: true })
  isSharedCR: boolean;

  @Column('date', { default: new Date() })
  createdAt: Date;

  @Column('date', { default: new Date() })
  updatedAt: Date;
}
