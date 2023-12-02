import { Test, TestingModule } from '@nestjs/testing';
import { ClimatesService } from './climates.service';
import { Climate } from './entities/climate.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { mockClimateRepository } from './test-utils/test-utils';

describe('ClimatesService', () => {
  let service: ClimatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClimatesService,
        {
          provide: getRepositoryToken(Climate),
          useValue: mockClimateRepository,
        },
      ],
    }).compile();

    service = module.get<ClimatesService>(ClimatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
