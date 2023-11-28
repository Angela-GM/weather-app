import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cities' })
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lat: string;

  @Column()
  lon: string;
}
