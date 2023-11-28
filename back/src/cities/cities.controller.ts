import { Controller, Get, Param } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { City } from './entities/city.entity';

@Controller('cities')
@ApiTags('cities')
export class CitiesController {
  constructor(private readonly cityService: CitiesService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all cities',
    description: 'Retrieve a list of all cities with coordinates',
  })
  async findAll(): Promise<City[]> {
    return this.cityService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.cityService.findOneById(id);
  }
}
