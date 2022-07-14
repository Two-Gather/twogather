import { QnasService } from './qnas.service';
import { CreateQnaDto } from './dto/create-qna.dto';
import { UpdateQnaDto } from './dto/update-qna.dto';
export declare class QnasController {
    private readonly qnasService;
    constructor(qnasService: QnasService);
    create(createQnaDto: CreateQnaDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateQnaDto: UpdateQnaDto): string;
    remove(id: string): string;
}
