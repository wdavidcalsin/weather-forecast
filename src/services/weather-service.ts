import { FETCH_WEATHER_URL } from "@/constant";
import { ICoordinates, IWeather } from "@/types";

export const weatherService = async ({ latitude, longitude }: ICoordinates) => {
  const fetchWeather = await fetch(
    `${FETCH_WEATHER_URL}/?lat=${latitude}&long=${longitude}`
  );
  const weatherData = (await fetchWeather.json()) as IWeather;

  return weatherData;
};
