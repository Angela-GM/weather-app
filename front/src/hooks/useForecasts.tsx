import { Forecast, weatherApi } from "..";
import { useQuery } from "react-query";

const getForescastsAll = async () => {
    const { data } = await weatherApi.get<Forecast[]>(`/forecasts`);
    return data;
}

const getForecastsToday = async () => {
    const { data } = await weatherApi.get<Forecast[]>("/forecasts");

    // Today's fake date
    const today = "2022-09-11T22:00:00.000Z";

    const forecastsToday = data.filter((forecast) =>
    forecast.date.includes(today)
  );

  return forecastsToday;

}

export const useForecasts = () => {

    const forecastsAllQuery = useQuery(
        ['forecasts'],
        getForescastsAll,
        {
            refetchOnWindowFocus: false,
        }
    )

    const forecastsTodayQuery = useQuery(
        ['forecasts_today'],
        getForecastsToday,
        {
            refetchOnWindowFocus: false,
        }
    )

    
  return {forecastsAllQuery, forecastsTodayQuery}
}
