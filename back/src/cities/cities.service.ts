import { Injectable } from '@nestjs/common';
import { Cities } from './entities/cities.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(Cities)
    private cityRepository: Repository<Cities>,
  ) {}

  async findAll(): Promise<Cities[]> {
    try {
      const cities = await this.cityRepository.find();
      return cities;
    } catch (error) {
      console.log(`Error retrieving cities: ${error.message}`, error.stack);
      throw error;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} city`;
  }
}
