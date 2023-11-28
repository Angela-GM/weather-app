import { Controller, Get, Param } from '@nestjs/common';
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
  findOne(@Param('id') id: number) {
    return this.climatesService.findOneById(id);
  }
}
