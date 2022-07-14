import { Space } from 'src/spaces/entities/spaces.entity';
import { User } from 'src/users/entities/users.entity';
export declare class Qna {
    id: number;
    content: string;
    reply: string;
    space: Space;
    user: User;
}
