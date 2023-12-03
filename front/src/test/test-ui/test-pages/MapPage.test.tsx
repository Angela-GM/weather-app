import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from "vitest";
import { useForecasts } from '../../../hooks/useForecasts';
import { MapPage } from '../../..';



vi.mock('@react-google-maps/api', () => ({
 GoogleMap: vi.fn(),
 Marker: vi.fn(),
 useJsApiLoader: vi.fn().mockReturnValue({ isLoaded: true }),
}));

describe('MapPage', () => {
 test('should render map', async () => {
 const forecastTodayQuery = useForecasts().forecastsTodayQuery;
 forecastTodayQuery.data = [
    
        {
            "id": 3,
            "date": "2022-09-12T00:00:00.000Z",
            "weather": "Mostly Cloudy",
            "min_temp": "18",
            "max_temp": "25",
            "city": {
                "id": 1,
                "name": "Aviles",
                "lat": "43.560000000",
                "lon": "-5.930000000"
            }
        },
        {
            "id": 4,
            "date": "2022-09-13T00:00:00.000Z",
            "weather": "Light Rain",
            "min_temp": "20",
            "max_temp": "30",
            "city": {
                "id": 1,
                "name": "Aviles",
                "lat": "43.560000000",
                "lon": "-5.930000000"
            }
        },
        {
            "id": 5,
            "date": "2022-09-14T00:00:00.000Z",
            "weather": "Rain",
            "min_temp": "18",
            "max_temp": "27",
            "city": {
                "id": 1,
                "name": "Aviles",
                "lat": "43.560000000",
                "lon": "-5.930000000"
            }
        },
        {
            "id": 6,
            "date": "2022-09-15T00:00:00.000Z",
            "weather": "Rain",
            "min_temp": "17",
            "max_temp": "24",
            "city": {
                "id": 1,
                "name": "Aviles",
                "lat": "43.560000000",
                "lon": "-5.930000000"
            }
        },
        {
            "id": 7,
            "date": "2022-09-16T00:00:00.000Z",
            "weather": "Rain",
            "min_temp": "17",
            "max_temp": "23",
            "city": {
                "id": 1,
                "name": "Aviles",
                "lat": "43.560000000",
                "lon": "-5.930000000"
            }
        },];

 render(<MapPage />);

 expect(screen.getByTestId('google-map')).toContain(forecastTodayQuery);
 });
});
