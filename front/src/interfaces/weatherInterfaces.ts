export interface Forecast {
    id:       number;
    date:     string;
    weather:  string;
    min_temp: string;
    max_temp: string;
    city:     City;
}

export interface City {
    id:   number;
    name: string;
    lat:  string;
    lon:  string;
}
