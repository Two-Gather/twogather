import { Repository } from 'typeorm';
import { CreateSpaceDto } from './dto/create-space.dto';
import { Space } from './entities/spaces.entity';
export declare class SpacesService {
    private spacesRepository;
    constructor(spacesRepository: Repository<Space>);
    create(spaceData: CreateSpaceDto): Promise<Space>;
    a: any;
    findAll(): Promise<Space[]>;
    findOne(id: number): Promise<Space>;
    remove(id: number): Promise<void>;
}
