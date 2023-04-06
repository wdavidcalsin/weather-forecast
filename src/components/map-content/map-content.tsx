import * as React from "react";
import _ from "lodash";

import { Map } from "../map";

import { useWeatherStore } from "@/store";

const position = [33.93606842758016, -118.02722208201887];

const MapContent = () => {
  const { weatherData } = useWeatherStore();

  return (
    <div
      className="border border-white/10 p-3 rounded-xl h-full w-full md:w-[40&] flex flex-col gap-3"
      style={{ background: "#171717" }}
    >
      <Map center={position} />
      <div
        className=" flex font-medium text-xs justify-between gap-3 tracking-wider"
        style={{ background: "#171717" }}
      >
        <p className="border border-white/10 p-3 rounded-md text-slate-300 flex-1 ">
          Latitude:{" "}
          <span className=" font-light italic">
            {_.floor(Number(weatherData.latitude), 4)}
          </span>{" "}
        </p>
        <p className="border border-white/10 p-3 rounded-md text-slate-300 flex-1">
          Longitude:{" "}
          <span className="font-light italic">
            {_.floor(Number(weatherData.longitude), 5)}
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default MapContent;
