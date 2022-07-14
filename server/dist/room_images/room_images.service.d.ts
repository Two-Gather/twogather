import { CreateRoomImageDto } from './dto/create-room_image.dto';
import { UpdateRoomImageDto } from './dto/update-room_image.dto';
export declare class RoomImagesService {
    create(createRoomImageDto: CreateRoomImageDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateRoomImageDto: UpdateRoomImageDto): string;
    remove(id: number): string;
}
