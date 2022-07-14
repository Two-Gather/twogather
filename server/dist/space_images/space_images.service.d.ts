import { CreateSpaceImageDto } from './dto/create-space_image.dto';
import { UpdateSpaceImageDto } from './dto/update-space_image.dto';
export declare class SpaceImagesService {
    create(createSpaceImageDto: CreateSpaceImageDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSpaceImageDto: UpdateSpaceImageDto): string;
    remove(id: number): string;
}
