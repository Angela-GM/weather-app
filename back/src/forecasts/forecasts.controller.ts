import {
  Controller,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ForecastsService } from './forecasts.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Forecast } from './entities/forecast.entity';

@Controller('forecasts')
@ApiTags('forecasts')
export class ForecastsController {
  constructor(private readonly forecastsService: ForecastsService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all forecasts information',
    description: 'Retrieve all forecasts information',
  })
  async findAll(): Promise<Forecast[]> {
    const forecasts = await this.forecastsService.findAll();
    return forecasts;
  }

  @ApiOperation({
    summary: 'Get forecast for id',
    description: 'Retrieve forecast information by id',
  })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.forecastsService.findOneById(id);
  }

  @ApiOperation({
    summary: 'Get weather forecast by city',
    description: 'Get weather information by city id',
  })
  @Get('by-city/:city_id')
  async findForecastForCity(
    @Param('city_id', ParseIntPipe) city_id: number,
  ): Promise<Forecast[]> {
    try {
      const climates = await this.forecastsService.findByCity(city_id);

      if (!climates || climates.length === 0) {
        throw new NotFoundException(
          `No climates found for the city with ID ${city_id}`,
        );
      }

      return climates;
    } catch (error) {
      throw new InternalServerErrorException(
        'Error when getting climates by city',
        error.message,
      );
    }
  }
}
