import { User } from 'src/users/entities/users.entity';
export declare class Space {
    id: number;
    type: string;
    address: string;
    name: string;
    notice: string;
    intro: string;
    user: User;
}
