import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

import { useForecasts } from "../../hooks/useForecasts";
import { useState } from "react";
import { weatherIcons } from "../..";

export const MapPage = () => {
  const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);
  const forecastTodayQuery = useForecasts().forecastsTodayQuery;

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBO0z3FjxHy7XDjmslNOrzfRvFKrYPckY4",
  });

  const mapStyles = {
    height: "100vh",
    width: "100%",
    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
    ],
  };

  const defaultCenter = {
    lat: 40.416775,
    lng: -3.70379,
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapStyles}
      zoom={6}
      center={defaultCenter}
      onLoad={(map) => setMapInstance(map)}
    >
      {mapInstance &&
        forecastTodayQuery.data?.map((location) => (
          <Marker
            key={location.city.name}
            position={{
              lat: parseFloat(location.city.lat),
              lng: parseFloat(location.city.lon),
            }}
            icon={{
              url: weatherIcons[location.weather.toLowerCase()],
              scaledSize: new window.google.maps.Size(80, 80),
            }}
          />
        ))}
    </GoogleMap>
  ) : null;
};
