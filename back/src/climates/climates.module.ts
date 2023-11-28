import { Module } from '@nestjs/common';
import { ClimatesService } from './climates.service';
import { ClimatesController } from './climates.controller';

@Module({
  controllers: [ClimatesController],
  providers: [ClimatesService],
})
export class ClimatesModule {}
