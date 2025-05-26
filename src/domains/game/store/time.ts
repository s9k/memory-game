import { StateCreator } from "zustand";

export type GameStoreTimeSlice = {
  /** Time passed in seconds since the game started. */
  timePassed: number;
  setTimePassed: (newTimePassed: number) => void;
};

export const createGameStoreTimeSlice: StateCreator<GameStoreTimeSlice> = (
  set
) => ({
  timePassed: 0,
  setTimePassed: (timePassed) => set({ timePassed }),
});
