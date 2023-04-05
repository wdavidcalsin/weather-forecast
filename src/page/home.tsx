import * as React from "react";
import _ from "lodash";
import { AiOutlineRetweet } from "react-icons/ai";

import { Map, Weather } from "@/components";
import { useWeatherStore } from "@/store";

const position = [33.93606842758016, -118.02722208201887];

const Home = () => {
  const [isShowing, setIsShowing] = React.useState(false);
  const spinnerRef = React.useRef<HTMLDivElement>(null);
  const { weatherData } = useWeatherStore();

  const handleClick = async () => {
    setIsShowing((isShowing) => !isShowing);

    spinnerRef.current?.classList.toggle("rotate-180");
  };

  return (
    <div className="bg-black h-screen w-screen grid place-items-center transition-transform ease-in-out delay-700">
      <div
        className={`bg-black rounded-xl border border-white/20 p-3 flex justify-between items-center h-[27rem]  ${
          isShowing && "flex-row-reverse"
        }`}
      >
        <div
          className="border border-white/10 p-3 rounded-xl h-full w-[27rem] flex flex-col gap-3"
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

        <div className="px-5">
          <div
            className={`p-3 border border-white/10 rounded-3xl cursor-pointer transition ease-in-out delay-75 hover:scale-110 hover:bg-white/5 duration-300`}
            onClick={handleClick}
            ref={spinnerRef}
          >
            <AiOutlineRetweet className="text-slate-50 text-2xl" />
          </div>
        </div>
        <Weather />
      </div>
    </div>
  );
};

export default Home;
