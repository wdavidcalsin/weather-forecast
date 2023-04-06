import * as React from "react";

import { ModalCustom } from "@/components";
import { conditionImage } from "@/model";
import { useModal, useWeatherStore } from "@/store";
import { CurrentConditions } from "@/types";

const WeatherDays = () => {
  const { fetchWeatherData } = useWeatherStore();
  const { setIsOpen, setSelectedWeather } = useModal();

  const handleClick = (selectedWeather: CurrentConditions) => {
    setIsOpen();
    setSelectedWeather(selectedWeather);
  };

  return (
    <div className="flex gap-4 flex-wrap">
      {fetchWeatherData.days.map((day, index) => (
        <div
          key={index}
          className="w-16 h-16 rounded-3xl bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-white/20 via-white/10 transition delay-75 to-white/5 hover:scale-105 cursor-pointer"
          onClick={() => handleClick(day)}
        >
          <div className="flex flex-col gap-1 h-full justify-center items-center">
            <img
              className=" w-7 h-7"
              src={conditionImage[day.conditions].image}
            />
            <h5 className="text-[10px] text-gray-400">{day.datetime}</h5>
          </div>
        </div>
      ))}
      <ModalCustom/>
    </div>
  );
};

export default WeatherDays;
