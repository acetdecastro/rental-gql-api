import {
  Field,
  InputType,
  ObjectType,
  PartialType,
  registerEnumType,
} from '@nestjs/graphql';

/**
 * GrahpQL Types
 */
export enum RoomStatus {
  AVAILABLE = 'Available',
  ON_LEASE = 'On Lease',
}

registerEnumType(RoomStatus, { name: 'RoomStatus' });

@ObjectType('Room')
export class RoomType {
  @Field()
  _id: string;

  @Field(() => [String], { nullable: 'itemsAndList' })
  agreementIds: string[];

  @Field()
  status: RoomStatus;

  @Field()
  name: string;

  @Field()
  ratePer30Days: number;

  @Field()
  isWaterMetered: boolean;

  @Field()
  isElectricityMetered: boolean;

  @Field()
  isSharedCR: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

@InputType()
export class CreateRoomInput {
  @Field()
  name: string;

  @Field()
  ratePer30Days: number;

  @Field()
  isWaterMetered: boolean;

  @Field()
  isElectricityMetered: boolean;

  @Field()
  isSharedCR: boolean;
}

@InputType()
export class UpdateRoomInput extends PartialType(CreateRoomInput) {
  status?: RoomStatus;
}

/**
 * TypeScript Types
 */
export type CreateRoomType = {
  name: string;
  ratePer30Days: number;
  isWaterMetered: boolean;
  isElectricityMetered: boolean;
  isSharedCR: boolean;
};

export type UpdateRoomType = Partial<CreateRoomType> & {
  status?: RoomStatus;
};
