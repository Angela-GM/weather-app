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

export interface ClimateData {
  month: string;
  min_temp: string;
  max_temp: string;
 }

 export interface RainData {
  month: string;
  rain_days: string;
  rain_fall: string;
 }


