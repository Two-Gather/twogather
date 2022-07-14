import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Space } from '../../spaces/entities/spaces.entity';

@Entity()
export class Hashtag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 45, nullable: false })
  tag: string;

  @OneToOne(() => Space)
  @JoinColumn({ name: 'spaceId', referencedColumnName: 'id' })
  space: Space;
}
