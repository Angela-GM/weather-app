import { useParams } from "react-router-dom";
import { useClimates } from "../../hooks/useClimates";
import { useForecasts } from "../../hooks/useForecasts";
import { formattedDate } from "../../shared/formattedDate";
import { DisplayTemperature } from "../../components/molecules/DisplayTemperature";
import { weatherIcons } from "../..";

export const WeatherForCity = () => {
  const { id } = useParams();

  const cityId = parseInt(id ?? "0", 10);

  const climatesQuery = useClimates().data;
  const forecastsQuery = useForecasts().forecastsAllQuery.data;

  //   Filter for city
  const climateForCity = climatesQuery?.filter(
    (climate) => climate.city.id === cityId
  );
  const forecastsForCity = forecastsQuery?.filter(
    (forecast) => forecast.city.id === cityId
  );

  console.log(climateForCity);
  console.log(forecastsForCity);

  return (
    <div className="flex-col gap-6">
      {forecastsForCity && forecastsForCity.length > 0 && (
        <div className="my-6">
          <h2 className="text-2xl font-semibold">
            {forecastsForCity[0].city.name}
          </h2>
        </div>
      )}

      {/* weather of the week  */}
      {forecastsForCity && forecastsForCity.length > 0 && (
        <div className="flex-col gap-6">
          <div className="flex gap-6">
            <h3 className="text-xl text-left mb-6">Forecats:</h3>
          </div>
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
    </div>
  );
};
