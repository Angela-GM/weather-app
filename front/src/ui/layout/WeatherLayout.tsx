import { Outlet } from "react-router-dom";
import { Header } from "../..";

export const WeatherLayout = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
