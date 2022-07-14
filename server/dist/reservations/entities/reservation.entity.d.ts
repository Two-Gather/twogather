import { Room } from 'src/rooms/entities/rooms.entity';
import { User } from 'src/users/entities/users.entity';
export declare class Reservation {
    id: number;
    startTime: string;
    endTime: string;
    date: Date;
    createdTime: Date;
    user: User;
    room: Room;
}
