export interface IWeather {
  address: string;
  alerts: Alert[];
  currentConditions: CurrentConditions;
  days: CurrentConditions[];
  description: string;
  latitude: number;
  longitude: number;
  queryCost: number;
  resolvedAddress: string;
  stations: { [key: string]: Station };
  timezone: string;
  tzoffset: number;
}

export interface Alert {
  description: string;
  ends: Date;
  endsEpoch: number;
  event: string;
  headline: string;
  id: string;
  language: string;
  link: string;
  onset: Date;
  onsetEpoch: number;
}

export interface CurrentConditions {
  cloudcover: number;
  conditions: Conditions;
  datetime: string;
  datetimeEpoch: number;
  description?: string;
  dew: number;
  feelslike: number;
  feelslikemax?: number;
  feelslikemin?: number;
  hours?: CurrentConditions[];
  humidity: number;
  icon: Icon;
  moonphase?: number;
  precip: number;
  precipcover?: number;
  precipprob: number;
  preciptype: Icon[] | null;
  pressure: number;
  severerisk?: number;
  snow: number;
  snowdepth: number;
  solarenergy: number | null;
  solarradiation: number;
  source: Source;
  stations: string[] | null;
  sunrise?: string;
  sunriseEpoch?: number;
  sunset?: string;
  sunsetEpoch?: number;
  temp: number;
  tempmax?: number;
  tempmin?: number;
  uvindex: number;
  visibility: number;
  winddir: number;
  windgust: number | null;
  windspeed: number;
}

export enum Conditions {
  Clear = "Clear",
  Overcast = "Overcast",
  PartiallyCloudy = "Partially cloudy",
  RainOvercast = "Rain, Overcast",
  RainPartiallyCloudy = "Rain, Partially cloudy",
  SnowOvercast = "Snow, Overcast",
  SnowRainOvercast = "Snow, Rain, Overcast",
}

export enum Icon {
  ClearDay = "clear-day",
  ClearNight = "clear-night",
  Cloudy = "cloudy",
  Fog = "fog",
  PartlyCloudyDay = "partly-cloudy-day",
  PartlyCloudyNight = "partly-cloudy-night",
  Rain = "rain",
  Snow = "snow",
}

export enum Source {
  Comb = "comb",
  Fcst = "fcst",
  Obs = "obs",
}

export interface Station {
  contribution: number;
  distance: number;
  id: string;
  latitude: number;
  longitude: number;
  name: string;
  quality: number;
  useCount: number;
}
