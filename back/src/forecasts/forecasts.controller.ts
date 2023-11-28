import { Controller, Get, Param } from '@nestjs/common';
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
}
