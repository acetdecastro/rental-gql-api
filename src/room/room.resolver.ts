import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateRoomInput, RoomType } from './room.type';
import { RoomService } from './room.service';
import { Room } from './room.entity';

@Resolver(() => RoomType)
export class RoomResolver {
  constructor(private roomService: RoomService) {}

  /**
   * Mutations
   */
  @Mutation(() => RoomType, { nullable: true })
  async createRoom(@Args('input') input: CreateRoomInput): Promise<Room> {
    return this.roomService.createRoom(input);
  }
}
