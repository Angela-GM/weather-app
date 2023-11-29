import { Test, TestingModule } from '@nestjs/testing';
import { CitiesService } from './cities.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { City } from './entities/city.entity';
import { NotFoundException } from '@nestjs/common';

describe('CitiesService', () => {
  let service: CitiesService;

  const mockCityRepository = {
    find: jest.fn(),
    findOne: jest.fn(),
  };

  const cities = [
    {
      id: 1,
      name: 'Aviles',
      lat: '43.560000000',
      lon: '-5.930000000',
    },
    {
      id: 2,
      name: 'Barcelona',
      lat: '41.280000000',
      lon: '2.070000000',
    },
    {
      id: 3,
      name: 'Burgos',
      lat: '42.340000000',
      lon: '-3.700000000',
    },
    {
      id: 4,
      name: 'Albacete',
      lat: '39.010000000',
      lon: '-1.860000000',
    },
    {
      id: 5,
      name: 'Ourense',
      lat: '42.340000000',
      lon: '-7.860000000',
    },
  ];

  const city = {
    id: 1,
    name: 'Aviles',
    lat: '43.560000000',
    lon: '-5.930000000',
  };

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
