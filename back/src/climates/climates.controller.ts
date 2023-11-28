import { Controller, Get, Param } from '@nestjs/common';
import { ClimatesService } from './climates.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Climate } from './entities/climate.entity';

@Controller('climates')
@ApiTags('climates')
export class ClimatesController {
  constructor(private readonly climateService: ClimatesService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all climates',
    description: 'Retrieve a list of all climates with information',
  })
  async findAll(): Promise<Climate[]> {
    return this.climateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.climateService.findOne(+id);
  }
}
