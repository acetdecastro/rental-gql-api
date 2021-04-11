import { BaseEntity, Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Room extends BaseEntity {
  @ObjectIdColumn()
  _id: string;

  @Column()
  agreementIds: string[];

  @Column()
  status: string;

  @Column()
  name: string;

  @Column()
  isWaterMetered: boolean;

  @Column()
  isElectricityMetered: boolean;

  @Column()
  ratePerMonth: number;

  @Column('date', { default: new Date() })
  createdAt: Date;

  @Column('date', { default: new Date() })
  updatedAt: Date;
}
