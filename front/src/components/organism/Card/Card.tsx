import { DisplayTemperature } from "../../molecules/DisplayTemperature";
import { Forecast, weatherIcons } from "../../..";
import { Link } from "react-router-dom";
interface CardProps {
  forecasts: Forecast[] | undefined;
  isLoading: boolean;
}

export const Card = ({ forecasts, isLoading }: CardProps) => {
  if (isLoading) {
    return <h1>Loading... </h1>;
  }

  return (
    <>
      {forecasts?.map((forecast) => (
        <Link
          className="w-3/4 md:w-3/6 m-auto rounded-lg p-5 border border-white/5 shadow-lg hover:border-white/50 cursor-pointer"
          key={forecast.id}
          to={`/${forecast.city.id}`}
        >
          <div>
            <h2 className="text-lg">{forecast.city.name}</h2>
            <div className="flex-col">
              <h3>{forecast.weather}</h3>
              {weatherIcons[forecast.weather.toLowerCase()] && (
                <img
                  className="w-20 m-auto"
                  src={weatherIcons[forecast.weather.toLowerCase()]}
                  alt={forecast.weather}
                />
              )}
            </div>

            <DisplayTemperature
              temp_min={forecast.min_temp}
              temp_max={forecast.max_temp}
            />
          </div>
        </Link>
      ))}
    </>
  );
};
