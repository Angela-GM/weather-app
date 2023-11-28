import { Injectable } from '@nestjs/common';
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

  findOne(id: number) {
    return `This action returns a #${id} climate`;
  }
}
