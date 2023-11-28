import {
  Controller,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ClimatesService } from './climates.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Climate } from './entities/climate.entity';

@Controller('climates')
@ApiTags('climates')
export class ClimatesController {
  constructor(private readonly climatesService: ClimatesService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all climates',
    description: 'Retrieve a list of all climates with information',
  })
  async findAll(): Promise<Climate[]> {
    const climates = await this.climatesService.findAll();
    return climates;
  }

  @ApiOperation({
    summary: 'Get climate for id',
    description: 'Retrieve weather information by id',
  })
  @Get(':id')
  findOneClimate(@Param('id') id: number) {
    return this.climatesService.findOneById(id);
  }

  @ApiOperation({
    summary: 'Get climate for city',
    description: 'Retrieve weather information by city',
  })
  @Get('by-city/:city_id')
  async findClimateForCity(
    @Param('city_id', ParseIntPipe) city_id: number,
  ): Promise<Climate[]> {
    try {
      const climates = await this.climatesService.findByCity(city_id);

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
