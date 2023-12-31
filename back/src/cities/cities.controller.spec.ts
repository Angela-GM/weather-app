import { Test, TestingModule } from '@nestjs/testing';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';
import { cities, mockCityRepository } from './test-utils/test-utils';
import { getRepositoryToken } from '@nestjs/typeorm';
import { City } from './entities/city.entity';

describe('CitiesController', () => {
  let controller: CitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CitiesService,
        {
          provide: getRepositoryToken(City),
          useValue: mockCityRepository,
        },
      ],
      controllers: [CitiesController],
    }).compile();
    controller = module.get<CitiesController>(CitiesController);
  });
  describe('findAll', () => {
    it('should return a list of cities', async () => {
      mockCityRepository.find.mockResolvedValue(cities);

      const result = await controller.findAll();

      expect(result).toEqual(cities);
      expect(mockCityRepository.find).toHaveBeenCalled();
    });
  });
});
