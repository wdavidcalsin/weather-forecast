import * as React from "react";

import { Spinner } from "../spinner";

import { conditionImage } from "@/model";
import { useWeatherStore } from "@/store";

const Weather = () => {
  const { weatherData, fetchWeatherData, isLoading } = useWeatherStore();

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
          <div className="flex gap-4 flex-wrap">
            {fetchWeatherData.days.map((day, index) => (
              <div
                key={index}
                className="w-16 h-16 rounded-3xl bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-white/20 via-white/10 to-white/5"
              >
                <div className="flex justify-center flex-col items-center gap-4">
                  <img
                    className=" w-7 h-7"
                    src={conditionImage[day.conditions].image}
                  />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
