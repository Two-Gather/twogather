import { Room } from 'src/rooms/entities/rooms.entity';
import { User } from 'src/users/entities/users.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 10, nullable: false })
  startTime: string;

  @Column({ type: 'varchar', length: 10, nullable: false })
  endTime: string;

  @Column({ type: 'date', nullable: false })
  date: Date;

  @Column({ type: 'datetime', nullable: false })
  createdTime: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: User;

  @ManyToOne(() => Room)
  @JoinColumn({ name: 'roomId', referencedColumnName: 'id' })
  room: Room;
}
