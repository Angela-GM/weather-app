import { createBrowserRouter } from "react-router-dom";
import { WeatherLayout } from "../ui/layout/WeatherLayout";
import { ErrorPage } from "../ErrorPage";
import { HomePage, MapPage, WeatherByCity } from "..";



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
          element: <WeatherByCity />
        },
        {
          path: "map",
          element: <MapPage />
        },
        
      ]
    }
  ]);