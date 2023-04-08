import * as React from "react";

import WeatherTime from "./weather-time";

import { Clock } from "@/components";
import { conditionImage } from "@/model";
import { CurrentConditions } from "@/types";
import { getDateTime } from "@/utils";

interface PropsWeatherHead {
  weatherCondition: CurrentConditions;
}

const WeatherHead: React.FC<PropsWeatherHead> = ({ weatherCondition }) => {
  const { day, month } = getDateTime(weatherCondition);

  return (
    <div className="bg-[#303030] rounded-2xl px-4 py-3">
      <div className="flex justify-center flex-col items-center gap-4 ">
        <div className="flex flex-col gap-1 text-center">
          <h4 className="text-white/25 text-lg font-medium">Today</h4>
          <h5 className="text-slate-50 text-lg uppercase font-medium">
            {weatherCondition.conditions}
          </h5>
        </div>
        <div className="flex justify-around gap-1 w-full ">
          <div className="pr-3">
            <img
              className="w-20 h-20"
              src={conditionImage[weatherCondition.conditions].image}
            />
          </div>
          <div className="flex flex-col gap-2 text-white/25 text-lg font-medium ">
            <div className="flex items-end gap-1">
              Last Update:
              <div className="w-10">
                {/* <Clock /> */}
                <WeatherTime propsTime={weatherCondition} />
              </div>
            </div>
            <div>
              Date Time:{" "}
              <span className="text-white/40 font-mono">
                {day} of {month}
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherHead;
