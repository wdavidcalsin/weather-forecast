import { Map } from "@/components";
import * as React from "react";

const position = [33.93606842758016, -118.02722208201887];

const Home = () => {
  return (
    <div className="bg-black h-screen w-screen grid place-items-center">
      <div className="bg-black rounded-xl border border-white/20 p-3 flex justify-between">
        <div
          className="border border-white/10 p-3 rounded-xl"
          style={{ background: "#171717" }}
        >
          <Map center={position} />
        </div>
        <div>
          <h5 className="text-slate-50">Google Maps</h5>
        </div>
      </div>
    </div>
  );
};

export default Home;
