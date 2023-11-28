import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Climate } from './entities/climate.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClimatesService {
  constructor(
    @InjectRepository(Climate)
    private climateRepository: Repository<Climate>,
  ) {}

  async findAll(): Promise<Climate[]> {
    try {
      const climates = await this.climateRepository.find();
      return climates;
    } catch (error) {
      console.log(`Error retrieving climates: ${error.message}`, error.stack);
      throw error;
    }
  }

  async findOneById(id: number): Promise<Climate> {
    const climate = await this.climateRepository.findOne({
      where: { id },
    });

    if (!climate) {
      throw new NotFoundException('Climate not found');
    }

    return climate;
  }

  async findByCity(city_id: number): Promise<Climate[]> {
    const query = `
    SELECT * FROM climates
    WHERE city_id = ?
  `;

    const climates = await this.climateRepository.query(query, [city_id]);
    return climates;
  }
}
