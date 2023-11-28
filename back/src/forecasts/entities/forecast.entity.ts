import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Weather } from './forecasts.enums';
import { City } from 'src/cities/entities/city.entity';

@Entity({ name: 'forecasts' })
export class Forecast {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  weather: Weather;

  @Column()
  min_temp: string;

  @Column()
  max_temp: string;

  @ManyToOne(() => City, (city) => city.forecasts, { eager: true })
  @JoinColumn({ name: 'city_id' })
  city: City;
}
