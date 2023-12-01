export interface Forecast {
  id: number;
  date: string;
  weather: string;
  min_temp: string;
  max_temp: string;
  city: City;
}

export interface Climate {
  id: number;
  month: string;
  min_temp: string;
  max_temp: string;
  rain_days: string;
  rain_fall: string;
  city: City;
}

export interface City {
  id: number;
  name: string;
  lat: string;
  lon: string;
}
