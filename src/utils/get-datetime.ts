import { monthModel } from "@/model";
import { CurrentConditions } from "@/types";

interface IReturnGetDate {
  day: number;
  month: string;
}

export const getDateTime = (
  dateCurrent: CurrentConditions | string
): IReturnGetDate => {
  if (typeof dateCurrent === "string") {
    const date = new Date(dateCurrent);
    const day = date.getDate();
    const month = (date.getMonth() + 1).toString();

    const monthInText = monthModel[month].monthSlug;

    return { day, month: monthInText };
  }

  const date = new Date(dateCurrent.datetimeEpoch * 1000);
  const day = date.getDate();
  const month = date.getMonth().toString();
  const hours = date.getHours();

  console.log("Hours", hours);

  const monthInText = monthModel[month].monthSlug;

  return { day, month: monthInText };
};
