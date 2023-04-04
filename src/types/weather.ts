export interface IWeather {
  address: string;
  alerts: any[];
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
  stations: ID[] | null;
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
  windgust: number;
  windspeed: number;
}

export enum Conditions {
  Clear = "Clear",
  Overcast = "Overcast",
  PartiallyCloudy = "Partially cloudy",
  Rain = "Rain",
  RainOvercast = "Rain, Overcast",
  RainPartiallyCloudy = "Rain, Partially cloudy",
}

export enum Icon {
  ClearDay = "clear-day",
  ClearNight = "clear-night",
  Cloudy = "cloudy",
  PartlyCloudyDay = "partly-cloudy-day",
  PartlyCloudyNight = "partly-cloudy-night",
  Rain = "rain",
}

export enum Source {
  Comb = "comb",
  Fcst = "fcst",
  Obs = "obs",
}

export enum ID {
  D4699 = "D4699",
  D8868 = "D8868",
  Kgai = "KGAI",
  Kiad = "KIAD",
  Kjyo = "KJYO",
}

export interface Station {
  contribution: number;
  distance: number;
  id: ID;
  latitude: number;
  longitude: number;
  name: string;
  quality: number;
  useCount: number;
}

export interface ICoordinates {
  latitude: string;
  longitude: string;
}
