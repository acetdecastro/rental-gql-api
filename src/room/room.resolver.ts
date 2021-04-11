import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateRoomInput, RoomType } from './room.type';
import { RoomService } from './room.service';
import { Room } from './room.entity';

@Resolver(() => RoomType)
export class RoomResolver {
  constructor(private roomService: RoomService) {}

  /**
   * Query
   */
  @Query(() => [RoomType], { nullable: 'itemsAndList' })
  async rooms(): Promise<Room[]> {
    return this.roomService.find();
  }

  /**
   * Mutation
   */
  @Mutation(() => RoomType, { nullable: true })
  async createRoom(@Args('input') input: CreateRoomInput): Promise<Room> {
    return this.roomService.createRoom(input);
  }
}
