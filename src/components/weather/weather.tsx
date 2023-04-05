import * as React from "react";

import { Spinner } from "../spinner";

import { conditionImage } from "@/model";
import { useWeatherStore } from "@/store";
import { WeatherDays } from "@/sub-components";

const Weather = () => {
  const { fetchWeatherData, isLoading } = useWeatherStore();

  return (
    <div
      className="border border-white/10 py-3 px-5 rounded-xl h-full w-[27rem]"
      style={{ background: "#171717" }}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="flex justify-center flex-col items-center gap-4">
            <h5 className="text-slate-50 uppercase font-medium text-sm">
              {fetchWeatherData.currentConditions.conditions}
            </h5>
            <img
              className="animate-bounce w-20 h-20"
              src={
                conditionImage[fetchWeatherData.currentConditions.conditions]
                  .image
              }
            />
          </div>
          {/* <div className="text-slate-50">
            <p>Latitude: {weatherData.latitude} </p>
            <p>Longitude: {weatherData.longitude} </p>
          </div> */}
          <WeatherDays/>
        </>
      )}
    </div>
  );
};

export default Weather;
