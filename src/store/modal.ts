import { create } from "zustand";
import { persist } from "zustand/middleware";

import { GET_MODAL } from "../constant";

import { currentConditionModel } from "@/model";
import { CurrentConditions } from "@/types";

export interface IUseModal {
  isOpen: boolean;
  selectedWeather: CurrentConditions;

  setIsOpen: () => void;
  setSelectedWeather: (selectedWeather: CurrentConditions) => void;
}

export const useModal = create<IUseModal>()(
  persist(
    (set, get) => ({
      isOpen: false,
      selectedWeather: currentConditionModel,

      setIsOpen() {
        set((state) => ({ ...state, isOpen: !get().isOpen }));
      },
      setSelectedWeather(selectedWeather) {
        set((state) => ({ ...state, selectedWeather: selectedWeather }));
      },
    }),
    {
      name: GET_MODAL,
      version: 1,
    }
  )
);
