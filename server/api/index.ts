import express, { type Request, type Response } from "express";
import * as dotenv from "dotenv";
import fetch from "node-fetch";
import { IWeather } from "./types/weather-type";

dotenv.config();

const app = express();

const BASE_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/38.9697,-77.385?key=";
const { WEATHER_API_KEY } = process.env;

app.get("/api/weather", async (req: Request, res: Response) => {
  if (!WEATHER_API_KEY) throw console.log("Not found WEATHER_API_KEY");

  const response = await fetch(`${BASE_URL}${WEATHER_API_KEY}`);
  const jsonData = (await response.json()) as IWeather;

  res.status(200).send(jsonData);
});

export default app;
