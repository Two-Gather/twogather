import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
export declare class ReservationsService {
    create(createReservationDto: CreateReservationDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateReservationDto: UpdateReservationDto): string;
    remove(id: number): string;
}
