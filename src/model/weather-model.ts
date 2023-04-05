import {
  Conditions,
  ConditionsWithData,
  Icon,
  IWeather,
  Source,
} from "@/types";

export const weatherModel: IWeather = {
  address: "",
  alerts: [],
  currentConditions: {
    cloudcover: 0,
    conditions: Conditions.Clear,
    datetime: "",
    datetimeEpoch: 0,
    dew: 0,
    feelslike: 0,
    humidity: 0,
    icon: Icon.ClearDay,
    precip: 0,
    precipprob: 0,
    preciptype: null,
    pressure: 0,
    snow: 0,
    snowdepth: 0,
    solarradiation: 0,
    source: Source.Comb,
    uvindex: 0,
    visibility: 0,
    winddir: 0,
    windgust: 0,
    windspeed: 0,
    solarenergy: null,
    stations: null,
    temp: 0,
  },
  days: [],
  description: "",
  latitude: 0,
  longitude: 0,
  queryCost: 0,
  resolvedAddress: "",
  stations: {},
  timezone: "",
  tzoffset: 0,
};

export const conditionImage: ConditionsWithData = {
  [Conditions.Clear]: {
    image: "./weather-image/clear.png",
  },
  [Conditions.Overcast]: {
    image: "./weather-image/overcast.png",
  },
  [Conditions.PartiallyCloudy]: {
    image: "./weather-image/partially-cloudy.png",
  },
  [Conditions.Rain]: {
    image: "./weather-image/rain.png",
  },
  [Conditions.RainOvercast]: {
    image: "./weather-image/rain-overcast.png",
  },
  [Conditions.RainPartiallyCloudy]: {
    image: "./weather-image/rain-partially-cloudy.png",
  },
};
