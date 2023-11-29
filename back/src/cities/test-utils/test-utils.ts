export const cities = [
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

export const city = {
  id: 1,
  name: 'Aviles',
  lat: '43.560000000',
  lon: '-5.930000000',
};

export const mockCityRepository = {
  find: jest.fn(),
  findOne: jest.fn(),
  findOneById: jest.fn().mockResolvedValue(city),
};
