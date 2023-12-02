import { Test, TestingModule } from '@nestjs/testing';
import { ForecastsService } from './forecasts.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Forecast } from './entities/forecast.entity';
import { forecast, mockForecastsRepository } from './test-utils/test-utils';
import { NotFoundException } from '@nestjs/common';

describe('ForecastsService', () => {
  let service: ForecastsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ForecastsService,
        {
          provide: getRepositoryToken(Forecast),
          useValue: mockForecastsRepository,
        },
      ],
    }).compile();

    service = module.get<ForecastsService>(ForecastsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return a list of forecasts', async () => {
      mockForecastsRepository.find.mockResolvedValue(forecast);

      const result = await service.findAll();

      expect(result).toEqual(forecast);
    });
  });

  describe('findOneById', () => {
    it('should return a single forecast by id', async () => {
      const id = 1;

      mockForecastsRepository.findOne.mockResolvedValue(forecast);

      const result = await service.findOneById(id);

      expect(result).toBe(forecast);
    });

    it('should throw a NotFoundException if forecast is not found', async () => {
      const id = 1;

      mockForecastsRepository.findOne.mockResolvedValue(null);
      try {
        await service.findOneById(id);
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error.message).toBe('Forecast not found');
      }
    });
  });

  describe('findByCity', () => {
    it('should return forecasts for a given city_id', async () => {
      const city_id = 1;

      mockForecastsRepository.query.mockResolvedValue(forecast);
      const result = await service.findByCity(city_id);

      expect(result).toEqual(forecast);
    });
  });
});
