import { HashtagsService } from './hashtags.service';
import { CreateHashtagDto } from './dto/create-hashtag.dto';
import { UpdateHashtagDto } from './dto/update-hashtag.dto';
export declare class HashtagsController {
    private readonly hashtagsService;
    constructor(hashtagsService: HashtagsService);
    create(createHashtagDto: CreateHashtagDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateHashtagDto: UpdateHashtagDto): string;
    remove(id: string): string;
}
