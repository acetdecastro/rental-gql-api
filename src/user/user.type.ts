import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';

/**
 * GraphQL Types
 */
export enum UserTypes {
  ADMIN = 'admin',
  TENANT = 'tenant',
}

registerEnumType(UserTypes, { name: 'UserTypes' });

@ObjectType('User')
export class UserType {
  @Field()
  _id: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  type: UserTypes;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
