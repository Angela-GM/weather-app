import { WiThermometer } from "react-icons/wi";
import { useForecasts } from "../../hooks/useForecasts";
import weatherIcons from "./Card.types";

export const Card = () => {
  const forecastTodayQuery = useForecasts().forecastsTodayQuery;

  console.log(forecastTodayQuery.data);

  if (forecastTodayQuery.isLoading) {
    return <h1>Loading... </h1>;
  }

  return (
    <>
      {forecastTodayQuery.data?.map((forecast) => (
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
          <div className="flex gap-4 items-center justify-center bg-card/50  rounded-lg py-5 ">
            <WiThermometer className="text-red-700 text-2xl" />
            <p>{forecast.min_temp}° min</p>
            <p>{forecast.max_temp}° max</p>
          </div>
        </div>
      ))}
    </>
  );
};
