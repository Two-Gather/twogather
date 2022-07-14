import { Reservation } from 'src/reservations/entities/reservation.entity';
export declare class Review {
    id: number;
    createdTime: Date;
    content: string;
    reservation: Reservation;
}
