import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from './entities/city.entity';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(City)
    private cityRepository: Repository<City>,
  ) {}

  async findAll(): Promise<City[]> {
    console.log('Calling findAll in service');
    try {
      const cities = await this.cityRepository.find();
      return cities;
    } catch (error) {
      console.log(`Error retrieving cities: ${error.message}`);
      throw error;
    }
  }

  async findOneById(id: number): Promise<City> {
    const city = await this.cityRepository.findOne({
      where: { id },
    });

    if (!city) {
      throw new NotFoundException('City not found');
    }

    return city;
  }
}
