import * as React from "react";
import _ from "lodash";

import { CurrentConditions } from "@/types";
import { getDateTime } from "@/utils";

interface ITimeState {
  day: number;
  month: string;
  hours: number;
  minute: number;
  seconds: number;
}
interface PropsWeatherTime {
  propsTime: CurrentConditions;
}

const WeatherTime: React.FC<PropsWeatherTime> = ({ propsTime }) => {
  const { hours, minute, seconds } = getDateTime(propsTime);

  return (
    <div className="flex text-white/40 font-mono items-center">
      <span>{hours}</span> :{" "}
      <span>{_.padStart(minute.toString(), 2, "0")}</span>
    </div>
  );
};

export default WeatherTime;
