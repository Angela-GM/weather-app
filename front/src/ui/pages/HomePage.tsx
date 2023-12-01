import { ChangeEvent, useState } from "react";
import { Card, SearchComponent } from "../..";
import { useForecasts } from "../../hooks/useForecasts";

export const HomePage = () => {
  const forecastTodayQuery = useForecasts().forecastsTodayQuery;
  console.log(forecastTodayQuery.data);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    console.log(`Searching for: ${event.target.value}`);
  };

 const filteredForecasts = forecastTodayQuery.data?.filter(forecast =>
  forecast.city.name.toLowerCase().includes(searchTerm.toLowerCase())
 );

  return (
    <div>
      <SearchComponent placeholder="Search city..." onSearch={handleSearch} value={searchTerm}  />

      <div className="flex gap-6 flex-wrap">

        <Card forecasts={filteredForecasts} isLoading={forecastTodayQuery.isLoading}  />
      </div>
    </div>
  );
};
