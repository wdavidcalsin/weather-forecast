import * as React from "react";

import { Spinner } from "../spinner";

import { useWeatherStore } from "@/store";
import { WeatherDays, WeatherHead } from "@/sub-components";

const Weather = () => {
  const { isLoading } = useWeatherStore();

  return (
    <div
      className="border border-white/10 p-3 rounded-2xl w-full lg:w-[45%] h-[45%] lg:h-full overflow-y-auto scrollbar-hide"
      style={{ background: "#171717" }}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="h-full w-full flex flex-col gap-4  ">
          <WeatherHead />
          <WeatherDays />
        </div>
      )}
    </div>
  );
};

export default Weather;
