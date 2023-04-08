import * as React from "react";

interface ITime {
  datetimeEpoch: number;
}

interface PropsWeatherTime {
  propsTime: ITime;
}

const WeatherTime: React.FC<PropsWeatherTime> = ({ propsTime }) => {
  const { datetimeEpoch } = propsTime;
  const [time, setTime] = React.useState(new Date(datetimeEpoch));

  React.useEffect(() => {
    setInterval(() => {
      setTime((prevTime) => {
        const newTime = new Date(prevTime);
        newTime.setSeconds(newTime.getSeconds() + 1);

        return newTime;
      });
    }, 1000);
  }, []);

  return (
    <div className="flex">
      <span>{time.getHours().toString().padStart(2, "0")}</span> :{" "}
      <span>{time.getMinutes()}</span>: <span>{time.getSeconds()}</span>
    </div>
  );
};

export default WeatherTime;
