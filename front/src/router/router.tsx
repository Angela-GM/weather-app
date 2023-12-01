import { createBrowserRouter } from "react-router-dom";
import { WeatherLayout } from "../ui/layout/WeatherLayout";
import { ErrorPage } from "../ErrorPage";
import { HomePage, MapPage } from "..";
import { WeatherForCity } from "../ui/pages/WeatherForCity";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <WeatherLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <HomePage />
        },
        {
          path: "/:id",
          element: <WeatherForCity />
        },
        {
          path: "map",
          element: <MapPage />
        },
        
      ]
    }
  ]);