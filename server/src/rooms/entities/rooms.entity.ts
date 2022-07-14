import { Space } from 'src/spaces/entities/spaces.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 45 })
  name: string;

  @Column({ type: 'int' })
  capacity: number;

  @Column({ type: 'int' })
  price: number;

  @ManyToOne(() => Space)
  @JoinColumn({ name: 'spaceId', referencedColumnName: 'id' })
  space: Space;
}
