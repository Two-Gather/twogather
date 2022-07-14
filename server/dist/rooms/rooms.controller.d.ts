import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
export declare class RoomsController {
    private readonly roomsService;
    constructor(roomsService: RoomsService);
    create(createRoomDto: CreateRoomDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateRoomDto: UpdateRoomDto): string;
    remove(id: string): string;
}
