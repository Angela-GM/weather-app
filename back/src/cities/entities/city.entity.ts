import { Climate } from 'src/climates/entities/climate.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  @OneToMany(() => Climate, (climate) => climate.city)
  climates: Climate[];
}
