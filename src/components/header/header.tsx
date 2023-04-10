import * as React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between items-center md:items-start ">
      <div className="text-base  flex flex-col ">
        <h5 className="text-slate-100 font-bold ">weatherForecast</h5>
        <p className="text-white/20 hidden lg:block">
          Forecasting weather and atmospheric conditions
        </p>
      </div>
      <div className="text-slate-200 flex gap-2 items-center justify-end">
        <div>
          <a
            href="https://github.com/wdavidcalsin/weather-forecast"
            target="_blank"
            className="text-base button flex px-4 py-3 items-center gap-2 rounded-3xl"
            style={{ background: "#171717" }}
            rel="noreferrer"
          >
            <FaGithub />
            <h6>Start on Github</h6>
          </a>
        </div>
        <div>
          <a
            href="https://twitter.com/wdavidcalsin"
            target="_blank"
            className="text-base button flex px-4 py-3 items-center gap-2 rounded-3xl"
            style={{ background: "#171717" }}
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
