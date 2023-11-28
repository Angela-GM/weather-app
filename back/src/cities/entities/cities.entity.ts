import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cities {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lat: string;

  @Column()
  lon: string;
}
