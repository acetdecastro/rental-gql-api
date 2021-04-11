import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommonService } from 'src/common.service';
import { Repository } from 'typeorm';
import { Room } from './room.entity';
import { CreateRoomInput, RoomStatus } from './room.type';

@Injectable()
export class RoomService extends CommonService {
  constructor(@InjectRepository(Room) private RoomRepo: Repository<Room>) {
    super({ context: 'Room' });
  }

  async find(): Promise<Room[]> {
    return this.RoomRepo.find();
  }

  async createRoom(input: CreateRoomInput): Promise<Room> {
    const newRoom = this.RoomRepo.create({
      ...input,
      status: RoomStatus.AVAILABLE,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return newRoom.save();
  }
}
