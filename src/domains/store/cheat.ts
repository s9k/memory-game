import { StateCreator } from "zustand";

export type GameStoreCheatSlice = {
  cheatMode: boolean;
  toggleCheatMode: () => void;
};

export const createGameStoreCheatSlice: StateCreator<GameStoreCheatSlice> = (
  set
) => ({
  cheatMode: false,
  toggleCheatMode: () => set((state) => ({ cheatMode: !state.cheatMode })),
});
