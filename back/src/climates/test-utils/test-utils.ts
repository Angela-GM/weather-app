export const climates = [
  {
    id: 1,
    month: '1',
    min_temp: '5.9',
    max_temp: '12.9',
    rain_days: '16.1',
    rain_fall: '102.8',
    city: {
      id: 1,
      name: 'Aviles',
      lat: '43.560000000',
      lon: '-5.930000000',
    },
  },
  {
    id: 2,
    month: '2',
    min_temp: '5.7',
    max_temp: '13.1',
    rain_days: '14.6',
    rain_fall: '88.2',
    city: {
      id: 1,
      name: 'Aviles',
      lat: '43.560000000',
      lon: '-5.930000000',
    },
  },
  {
    id: 3,
    month: '3',
    min_temp: '6.8',
    max_temp: '14.6',
    rain_days: '14.9',
    rain_fall: '82.3',
    city: {
      id: 1,
      name: 'Aviles',
      lat: '43.560000000',
      lon: '-5.930000000',
    },
  },
];

export const climate = {
  id: 1,
  month: '1',
  min_temp: '5.9',
  max_temp: '12.9',
  rain_days: '16.1',
  rain_fall: '102.8',
  city: {
    id: 1,
    name: 'Aviles',
    lat: '43.560000000',
    lon: '-5.930000000',
  },
};

export const mockClimateRepository = {
  find: jest.fn(),
  findOne: jest.fn(),
  findOneById: jest.fn().mockResolvedValue(climate),
};
