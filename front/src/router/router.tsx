import { createBrowserRouter } from "react-router-dom";
import { WeatherLayout } from "../layout/WeatherLayout";
import { ErrorPage } from "../ErrorPage";
import { HomePage, MapPage } from "..";


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
          path: "map",
          element: <MapPage />
        },
        
      ]
    }
  ]);