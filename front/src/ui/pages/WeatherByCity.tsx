import { useParams } from "react-router-dom";
import { useClimates } from "../../hooks/useClimates";
import { useForecasts } from "../../hooks/useForecasts";
import { formattedDate } from "../../shared/formattedDate";
import { DisplayTemperature } from "../../components/molecules/DisplayTemperature";
import { weatherIcons } from "../..";
import LineChart from "../../components/molecules/LineChart";
import BarChart from "../../components/molecules/BarChart";

export const WeatherByCity = () => {
  const { id } = useParams();

  const cityId = parseInt(id ?? "0", 10);

  const climatesQuery = useClimates().data;
  const forecastsQuery = useForecasts().forecastsAllQuery.data;

  const climateForCity = climatesQuery?.filter(
    (climate) => climate.city.id === cityId
  );
  const forecastsForCity = forecastsQuery?.filter(
    (forecast) => forecast.city.id === cityId
  );

  return (
    <div className="flex-col gap-6">
      {forecastsForCity && forecastsForCity.length > 0 && (
        <div className="my-6">
          <h2 className="text-3xl font-semibold">
            {forecastsForCity[0].city.name}
          </h2>
        </div>
      )}

      {forecastsForCity && forecastsForCity.length > 0 && (
        <div className="flex-col gap-6">
          <div className="flex flex-nowrap gap-6 overflow-x-auto sm:overflow-x-auto md:overflow-hidden-scroll">
            {forecastsForCity.map((forecast) => (
              <div
                key={forecast.id}
                className="w-3/4 min-w-fit md:w-3/6 p-5 m-auto border-white/5 shadow-lg"
              >
                <p className="my-3"> {formattedDate(forecast.date)}</p>
                <p>{forecast.weather}</p>
                {weatherIcons[forecast.weather.toLowerCase()] && (
                  <img
                    className="w-20 m-auto"
                    src={weatherIcons[forecast.weather.toLowerCase()]}
                    alt={forecast.weather}
                  />
                )}
                <DisplayTemperature
                  temp_min={forecast.min_temp}
                  temp_max={forecast.max_temp}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {climateForCity && climateForCity.length > 0 && (
        <div className="flex-col gap-7 flex-wrap justify-center items-center">
          <div className="w-6/8 md:w-3/5 m-auto mt-24">
            <h3>Max/Min Temperature</h3>
            <LineChart climateForCity={climateForCity} />
          </div>
          <div className="w-6/8 md:w-3/5 m-auto mt-24">
            <h3>Rain statistics</h3>
            <BarChart climateForCity={climateForCity} />
          </div>
        </div>
      )}
    </div>
  );
};
