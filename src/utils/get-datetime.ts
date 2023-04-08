import { monthModel } from "@/model";
import { CurrentConditions } from "@/types";

interface IReturnGetDate {
  day: number;
  month: string;
  hours: number;
  minute: number;
  seconds: number;
}

export const getDateTime = (dateCurrent: CurrentConditions): IReturnGetDate => {
  const date = new Date(dateCurrent.datetimeEpoch * 1000);
  const day = date.getDate();
  const month = date.getMonth().toString();
  const hours = date.getHours();
  const minute = date.getMinutes();
  const seconds = date.getSeconds();

  console.log("Hours", hours);

  const monthInText = monthModel[month].monthSlug;

  return { day, month: monthInText, hours, minute, seconds };
};
