import { weatherIcons } from "./Cards.utils";
import { DisplayTemperature } from "../../molecules/DisplayTemperature";
import { Forecast } from "../../..";
interface CardProps {
  forecasts: Forecast[] | undefined; // Reemplaza YourForecastType con el tipo real de tus datos
  isLoading: boolean;
}

export const Card = ({ forecasts, isLoading }: CardProps)  => {
  if (isLoading) {
    return <h1>Loading... </h1>;
  }

 

  
  return (
    <>
      {forecasts?.map((forecast) => (
        <div
          key={forecast.id}
          className="w-3/4 md:w-3/6 m-auto rounded-lg p-5 border border-white/5 shadow-lg hover:border-white/50 cursor-pointer"
        >
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
          
          <DisplayTemperature temp_min={forecast.min_temp} temp_max={forecast.max_temp} />
          
        </div>
      ))}
    </>
  );
};
