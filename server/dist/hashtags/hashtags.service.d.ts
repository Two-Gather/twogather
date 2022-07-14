import { CreateHashtagDto } from './dto/create-hashtag.dto';
import { UpdateHashtagDto } from './dto/update-hashtag.dto';
export declare class HashtagsService {
    create(createHashtagDto: CreateHashtagDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateHashtagDto: UpdateHashtagDto): string;
    remove(id: number): string;
}
