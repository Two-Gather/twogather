import { CreateQnaDto } from './dto/create-qna.dto';
import { UpdateQnaDto } from './dto/update-qna.dto';
export declare class QnasService {
    create(createQnaDto: CreateQnaDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateQnaDto: UpdateQnaDto): string;
    remove(id: number): string;
}
