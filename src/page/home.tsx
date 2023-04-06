import * as React from "react";
import { AiOutlineRetweet } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";

import { Header, Weather } from "@/components";
import { MapContent } from "@/components/map-content";

const Home = () => {
  const [isShowing, setIsShowing] = React.useState(false);
  const spinnerRef = React.useRef<HTMLDivElement>(null);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const addFlexRowOrCol = () =>
    isDesktopOrLaptop ? "lg:flex-row-reverse" : "flex-col-reverse";

  const handleClick = async () => {
    setIsShowing((isShowing) => !isShowing);
    spinnerRef.current?.classList.toggle("rotate-180");
  };

  return (
    <div className="bg-black min-h-screen grid place-items-center transition-transform ease-in-out delay-700">
      <div className="w-[27rem] sm:w-[30rem] md:w-[50rem] ">
        <Header />
        <div
          className={`z-10 bg-black rounded-xl border border-white/20 p-3 flex justify-between items-center gap-4 flex-col lg:flex-row ${
            isShowing && addFlexRowOrCol()
          }`}
        >
          <MapContent />
          <div
            className={`p-3 border border-white/10 rounded-3xl cursor-pointer transition ease-in-out delay-75 hover:scale-110 hover:bg-white/5 duration-300`}
            onClick={handleClick}
            ref={spinnerRef}
          >
            <AiOutlineRetweet className="text-slate-50 text-2xl" />
          </div>
          <Weather />
        </div>
      </div>
    </div>
  );
};

export default Home;
