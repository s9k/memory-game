import { StateCreator } from "zustand";

export type GameStoreMovesSlice = {
  movesCount: number;
  addMove: () => void;
};

export const createGameStoreMovesSlice: StateCreator<GameStoreMovesSlice> = (
  set
) => ({
  movesCount: 0,
  addMove: () => set((state) => ({ movesCount: state.movesCount + 1 })),
});
