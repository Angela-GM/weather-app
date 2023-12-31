// weatherIcons.ts
import MostlyCloudySVG from "../../public/images/overcast.svg";
import LightRainSVG from "../../public/images/lRain.svg";
import RainSVG from "../../public/images/rain.svg";
import SunnySVG from "../../public/images/sunny.svg";
import PartlyCloudySVG from "../../public/images/partly-cloudy-day.svg";
import ScatteredShowersSVG from "../../public/images/partly-cloudy-day-rain.svg";
import { WeatherIcons } from "../components/organism/Card/Card.types";

export const weatherIcons: WeatherIcons = {
    "mostly cloudy": MostlyCloudySVG,
    "light rain": LightRainSVG,
    rain: RainSVG,
    sunny: SunnySVG,
    "partly cloudy": PartlyCloudySVG,
    "scattered showers": ScatteredShowersSVG,
  };
  
