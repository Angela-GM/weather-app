import { Test, TestingModule } from '@nestjs/testing';
import { ForecastsController } from './forecasts.controller';
import { ForecastsService } from './forecasts.service';
import { Forecast } from './entities/forecast.entity';
import { forecasts, mockForecastsRepository } from './test-utils/test-utils';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('ForecastsController', () => {
  let controller: ForecastsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ForecastsService,
        {
          provide: getRepositoryToken(Forecast),
          useValue: mockForecastsRepository,
        },
      ],
      controllers: [ForecastsController],
    }).compile();

    controller = module.get<ForecastsController>(ForecastsController);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return a list of forecasts', async () => {
      mockForecastsRepository.find.mockResolvedValue(forecasts);

      const result = await controller.findAll();

      expect(result).toEqual(forecasts);
      expect(mockForecastsRepository.find).toHaveBeenCalled();
    });
  });
});
