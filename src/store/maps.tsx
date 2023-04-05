import { create } from "zustand";
import { persist } from "zustand/middleware";

import { GET_WEATHER } from "../constant";

import { weatherModel } from "@/model";
import { weatherService } from "@/services";
import { ICoordinates, IWeather } from "@/types";

export interface IUseWeatherStore {
  weatherData: ICoordinates;
  fetchWeatherData: IWeather;
  isLoading: boolean;

  setLatAndLong: (data: ICoordinates) => void;
  setFetchWeatherData: () => void;
  setIsLoading: (isLoading: boolean) => void;
}

export const useWeatherStore = create<IUseWeatherStore>()(
  persist(
    (set, get) => ({
      weatherData: {
        latitude: "-11.845627444321911",
        longitude: "-76.78950497836112",
      },
      fetchWeatherData: weatherModel,
      isLoading: false,

      async setLatAndLong({ latitude, longitude }) {
        set((state) => ({
          ...state,
          weatherData: { latitude, longitude },
        }));
      },
      async setFetchWeatherData() {
        get().setIsLoading(true);

        const fetchWeather = await weatherService(get().weatherData);

        set((state) => ({
          ...state,
          fetchWeatherData: fetchWeather,
        }));

        get().setIsLoading(false);
      },
      setIsLoading(isLoading) {
        set((state) => ({
          ...state,
          isLoading,
        }));
      },
    }),
    {
      name: GET_WEATHER,
      version: 1,
    }
  )
);
