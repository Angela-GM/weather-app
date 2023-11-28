import { Module } from '@nestjs/common';
import { ClimatesService } from './climates.service';
import { ClimatesController } from './climates.controller';
import { Climate } from './entities/climate.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Climate])],
  controllers: [ClimatesController],
  providers: [ClimatesService],
})
export class ClimatesModule {}
