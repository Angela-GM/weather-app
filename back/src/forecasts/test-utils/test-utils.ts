export const forecasts = [
  {
    id: 3,
    date: '2022-09-12T00:00:00.000Z',
    weather: 'Mostly Cloudy',
    min_temp: '18',
    max_temp: '25',
    city: {
      id: 1,
      name: 'Aviles',
      lat: '43.560000000',
      lon: '-5.930000000',
    },
  },
  {
    id: 4,
    date: '2022-09-13T00:00:00.000Z',
    weather: 'Light Rain',
    min_temp: '20',
    max_temp: '30',
    city: {
      id: 1,
      name: 'Aviles',
      lat: '43.560000000',
      lon: '-5.930000000',
    },
  },
  {
    id: 5,
    date: '2022-09-14T00:00:00.000Z',
    weather: 'Rain',
    min_temp: '18',
    max_temp: '27',
    city: {
      id: 1,
      name: 'Aviles',
      lat: '43.560000000',
      lon: '-5.930000000',
    },
  },
];

export const forecast = {
  id: 5,
  date: '2022-09-14T00:00:00.000Z',
  weather: 'Rain',
  min_temp: '18',
  max_temp: '27',
  city: {
    id: 1,
    name: 'Aviles',
    lat: '43.560000000',
    lon: '-5.930000000',
  },
};

export const mockForecastsRepository = {
  find: jest.fn(),
  findOne: jest.fn(),
  findOneById: jest.fn().mockResolvedValue(forecast),
  query: jest.fn(),
  findAll: jest.fn(),
};
