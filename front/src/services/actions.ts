import { Forecast, weatherApi } from ".."

export const getForecastsAll = async () => {
    const { data } = await weatherApi.get<Forecast[]>(`/forecasts`);
    return data;
}