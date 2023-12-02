import { Forecast, weatherApi } from "..";
import { useQuery } from "react-query";

const getForescastsAll = async () => {
    const { data } = await weatherApi.get<Forecast[]>(`/forecasts`);    
    return data;
}

const getForecastsToday = async () => {
    const { data } = await weatherApi.get<Forecast[]>("/forecasts");   

    // Today's fake date
    // const fakeToday = "2022-09-12T00:00:00.000Z";
    const fakeToday = data[0].date;


    const forecastsToday = data.filter((forecast) =>
    forecast.date.includes(fakeToday)
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
