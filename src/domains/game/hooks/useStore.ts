import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  createHydrateStoreSlice,
  onRehydrateStorage,
  HydrateStoreSlice,
  removeHydrateFromPersistedState,
} from "@/utils/store";
import {
  GameStoreMainSlice,
  GameStoreCheatSlice,
  GameStoreMovesSlice,
  GameStoreTilesSlice,
  GameStoreTimeSlice,
  createGameStoreMainSlice,
  createGameStoreCheatSlice,
  createGameStoreMovesSlice,
  createGameStoreTilesSlice,
  createGameStoreTimeSlice,
  createGameStorePauseSlice,
  GameStorePauseSlice,
} from "@/domains/game/store";

type GameState = GameStoreMainSlice &
  GameStoreCheatSlice &
  GameStoreMovesSlice &
  GameStorePauseSlice &
  GameStoreTilesSlice &
  GameStoreTimeSlice &
  HydrateStoreSlice;

export const useGameStore = create<GameState>()(
  persist(
    (...args) => ({
      ...createHydrateStoreSlice(...args),
      ...createGameStoreMainSlice(...args),
      ...createGameStoreCheatSlice(...args),
      ...createGameStoreMovesSlice(...args),
      ...createGameStorePauseSlice(...args),
      ...createGameStoreTilesSlice(...args),
      ...createGameStoreTimeSlice(...args),
    }),
    {
      name: "game",
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      partialize: ({ pauseTriggers, ...state }) =>
        removeHydrateFromPersistedState(state),
      onRehydrateStorage,
    }
  )
);
