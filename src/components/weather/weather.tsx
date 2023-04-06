import * as React from "react";

import { Spinner } from "../spinner";

import { conditionImage } from "@/model";
import { useWeatherStore } from "@/store";
import { WeatherDays } from "@/sub-components";

const Weather = () => {
  const { fetchWeatherData, isLoading } = useWeatherStore();

  return (
    <div
      className="border border-white/10 py-3 px-5 rounded-xl h-full w-full md:w-[100%]"
      style={{ background: "#171717" }}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="flex justify-center flex-col items-center gap-4 h-[9.3rem]">
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

          <WeatherDays />
        </>
      )}
    </div>
  );
};

export default Weather;
