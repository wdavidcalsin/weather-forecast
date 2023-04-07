import { monthModel } from "@/model";
import { CurrentConditions } from "@/types";

interface IReturnGetDate {
  day: number;
  month: string;
}

export const getDateTimeEpoch = (
  currentConditions: CurrentConditions
): IReturnGetDate => {
  const date = new Date(currentConditions.datetimeEpoch * 1000);
  const day = date.getDate();
  const month = (date.getMonth() + 1).toString();

  const monthInText = monthModel[month].monthSlug;

  return { day, month: monthInText };
};
