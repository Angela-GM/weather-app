import { Test, TestingModule } from '@nestjs/testing';
import { ClimatesController } from './climates.controller';
import { ClimatesService } from './climates.service';
import { Climate } from './entities/climate.entity';
import { mockClimateRepository } from './test-utils/test-utils';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('ClimatesController', () => {
  let controller: ClimatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClimatesService,
        {
          provide: getRepositoryToken(Climate),
          useValue: mockClimateRepository,
        },
      ],
      controllers: [ClimatesController],
    }).compile();

    controller = module.get<ClimatesController>(ClimatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
