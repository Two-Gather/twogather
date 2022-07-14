import { SpacesService } from './spaces.service';
import { CreateSpaceDto } from './dto/create-space.dto';
export declare class SpacesController {
    private readonly spacesService;
    constructor(spacesService: SpacesService);
    create(createSpaceDto: CreateSpaceDto): Promise<import("./entities/spaces.entity").Space>;
    findAll(): Promise<import("./entities/spaces.entity").Space[]>;
    findOne(id: string): Promise<import("./entities/spaces.entity").Space>;
    remove(id: string): Promise<void>;
}
