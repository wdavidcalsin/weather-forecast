import * as React from "react";

import { conditionImage } from "@/model";
import { useWeatherStore } from "@/store";

const WeatherDays = () => {
  const { fetchWeatherData } = useWeatherStore();

  return (
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
  );
};

export default WeatherDays;
