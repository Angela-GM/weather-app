import { useParams } from "react-router-dom";
import { useClimates } from "../../hooks/useClimates";
import { useForecasts } from "../../hooks/useForecasts";


export const WeatherForCity = () => {
  const {id} = useParams();
  
  const cityId = parseInt(id ?? '0', 10);

  const climatesQuery = useClimates().data;
  const forecastsQuery = useForecasts().forecastsAllQuery.data;


//   Filter for city
const climateForCity = climatesQuery?.filter((climate) => climate.city.id === cityId);
const forecastsForCity = forecastsQuery?.filter((forecast) => forecast.city.id === cityId);

console.log(climateForCity);
console.log(forecastsForCity);


  return (
    <div>
    {forecastsForCity && forecastsForCity.length > 0 && (
      <div>
        <h2 className="text-2xl font-semibold">{forecastsForCity[0].city.name}</h2>
        <div>
          <p>Date: {forecastsForCity[0].date}</p>
          <p>Weather: {forecastsForCity[0].weather}</p>
        </div>
      </div>
    )}

    {forecastsForCity && forecastsForCity.length > 0 && (
      <div>
        <h3>Forecasts:</h3>
        {forecastsForCity.map((forecast) => (
          <div key={forecast.id}>
            <p>Date: {forecast.date}</p>
            <p>Weather: {forecast.weather}</p>
          </div>
        ))}
      </div>
    )}
  </div>
  )
};
