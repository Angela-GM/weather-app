import { Injectable } from '@nestjs/common';

@Injectable()
export class ForecastsService {
  findAll() {
    return `This action returns all forecasts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} forecast`;
  }
}
