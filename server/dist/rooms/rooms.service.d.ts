import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
export declare class RoomsService {
    create(createRoomDto: CreateRoomDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateRoomDto: UpdateRoomDto): string;
    remove(id: number): string;
}
