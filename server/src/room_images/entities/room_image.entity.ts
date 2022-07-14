import { Room } from 'src/rooms/entities/rooms.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class RoomImage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 200 })
  imageUrl: string;

  @ManyToOne(() => Room)
  @JoinColumn({ name: 'roomId', referencedColumnName: 'id' })
  space: Room;
}
