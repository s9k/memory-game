import { StateCreator } from "zustand";
import { GameStoreTimeSlice } from "./time";
import { GameStoreMovesSlice } from "./moves";
import { GameStoreTilesSlice } from "./tiles";
import { generateGameTiles } from "../game/utils";
import { PAIRS_COUNT } from "@/constants";

export type GameStoreMainSlice = {
  gameId: string;
  resetGame: () => void;
};

export const createGameStoreMainSlice: StateCreator<
  GameStoreMainSlice &
    GameStoreTimeSlice &
    GameStoreMovesSlice &
    GameStoreTilesSlice,
  [],
  [],
  GameStoreMainSlice
> = (set) => ({
  gameId: crypto.randomUUID(),
  resetGame: () => {
    set({
      gameId: crypto.randomUUID(),
      timePassed: 0,
      movesCount: 0,
      tiles: generateGameTiles(PAIRS_COUNT),
      checkedTiles: [],
      matchedTiles: [],
    });
  },
});
