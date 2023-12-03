import axios from "axios";

const weatherApi = axios.create({
  baseURL: "http://localhost:3000/weather/v1",
});

export { weatherApi };
