import { Test, TestingModule } from '@nestjs/testing';
import { CitiesService } from './cities.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { City } from './entities/city.entity';
import { NotFoundException } from '@nestjs/common';
import { cities, city, mockCityRepository } from './test-utils/test-utils';

describe('CitiesService', () => {
  let service: CitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CitiesService,
        {
          provide: getRepositoryToken(City),
          useValue: mockCityRepository,
        },
      ],
    }).compile();
    service = module.get<CitiesService>(CitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return a list of cities', async () => {
      mockCityRepository.find.mockResolvedValue(cities);

      const result = await service.findAll();

      expect(result).toEqual(cities);
    });
  });

  describe('findOneById', () => {
    it('should return a single city', async () => {
      const id = 1;

      mockCityRepository.findOne.mockResolvedValue(city);

      const result = await service.findOneById(id);

      expect(result).toBe(city);
    });

    it('should throw a NotFoundException if city is not found', async () => {
      const id = 1;

      mockCityRepository.findOne.mockResolvedValue(null);
      try {
        await service.findOneById(id);
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error.message).toBe('City not found');
      }
    });
  });
});
