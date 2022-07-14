import { RoomImagesService } from './room_images.service';
import { CreateRoomImageDto } from './dto/create-room_image.dto';
import { UpdateRoomImageDto } from './dto/update-room_image.dto';
export declare class RoomImagesController {
    private readonly roomImagesService;
    constructor(roomImagesService: RoomImagesService);
    create(createRoomImageDto: CreateRoomImageDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateRoomImageDto: UpdateRoomImageDto): string;
    remove(id: string): string;
}
