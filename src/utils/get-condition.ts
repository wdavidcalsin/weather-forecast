import { Conditions, CurrentConditions } from "@/types";

export const getCondition = (currentConditions: CurrentConditions) => {
  if (currentConditions.conditions === Conditions.Overcast) return;
};
