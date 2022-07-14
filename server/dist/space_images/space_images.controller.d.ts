import { SpaceImagesService } from './space_images.service';
import { CreateSpaceImageDto } from './dto/create-space_image.dto';
import { UpdateSpaceImageDto } from './dto/update-space_image.dto';
export declare class SpaceImagesController {
    private readonly spaceImagesService;
    constructor(spaceImagesService: SpaceImagesService);
    create(createSpaceImageDto: CreateSpaceImageDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSpaceImageDto: UpdateSpaceImageDto): string;
    remove(id: string): string;
}
