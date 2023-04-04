import * as React from "react";

const Spinner = () => {
  return (
    <div className="h-full w-full grid place-items-center">
      <div className="animate-spin w-14 h-14 rounded-full bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400 p-1">
        <div
          className="w-full h-full rounded-full"
          style={{ background: "#171717" }}
        ></div>
      </div>
    </div>
  );
};

export default Spinner;
