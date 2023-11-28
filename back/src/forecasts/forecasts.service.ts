import { Injectable, NotFoundException } from '@nestjs/common';
import { Forecast } from './entities/forecast.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ForecastsService {
  constructor(
    @InjectRepository(Forecast)
    private forecastRepository: Repository<Forecast>,
  ) {}

  async findAll(): Promise<Forecast[]> {
    try {
      const forecasts = await this.forecastRepository.find();
      return forecasts;
    } catch (error) {
      console.log(`Error retrieving forecasts: ${error.message}`, error.stack);
      throw error;
    }
  }

  async findOneById(id: number): Promise<Forecast> {
    const forecast = await this.forecastRepository.findOne({
      where: { id },
    });

    if (!forecast) {
      throw new NotFoundException('Forecast not found');
    }

    return forecast;
  }

  async findByCity(city_id: number): Promise<Forecast[]> {
    const query = `
    SELECT * FROM forecasts
    WHERE city_id = ?
  `;

    const climates = await this.forecastRepository.query(query, [city_id]);
    return climates;
  }
}
