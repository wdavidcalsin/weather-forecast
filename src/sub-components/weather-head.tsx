import * as React from "react";

import { Clock } from "@/components";
import { conditionImage } from "@/model";
import { useWeatherStore } from "@/store";

const WeatherHead = () => {
  const { fetchWeatherData } = useWeatherStore();

  return (
    <div className="bg-[#303030] rounded-2xl px-4 py-3">
      <div className="flex justify-center flex-col items-center gap-4 ">
        <div className="flex flex-col gap-1">
          <h4 className="text-white/25 text-lg font-medium">Today</h4>
          <h5 className="text-slate-50 text-lg uppercase font-medium">
            {fetchWeatherData.currentConditions.conditions}
          </h5>
        </div>
        <div className="flex justify-around gap-1 w-full ">
          <div className="pr-3">
            <img
              className="w-20 h-20"
              src={
                conditionImage[fetchWeatherData.currentConditions.conditions]
                  .image
              }
            />
          </div>
          <div className="flex flex-col gap-2 text-white/25 text-lg font-medium ">
            <div className="flex items-center gap-3">
              Hours:
              <div className="w-10">
                <Clock />
              </div>
            </div>
            <div>
              Date Time: <span className="text-white/40 ">1 Of March</span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherHead;
