import { City } from 'src/cities/entities/city.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'climates' })
export class Climate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  month: string;

  @Column()
  min_temp: string;

  @Column()
  max_temp: string;

  @Column()
  rain_days: string;

  @Column()
  rain_fall: string;

  @ManyToOne(() => City, (city) => city.climates)
  city: City;
}
