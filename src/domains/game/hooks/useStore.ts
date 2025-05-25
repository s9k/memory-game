import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  createHydrateStoreSlice,
  onRehydrateStorage,
  HydrateStoreSlice,
  removeHydrateFromPersistedState,
} from "@/utils/store";
import { GameTile } from "@/domains/game/model";
import { generateGameTiles } from "@/domains/game/utils";
import { PAIRS_COUNT } from "@/constants";

type GameTileId = number;

type GameState = HydrateStoreSlice & {
  gameId: string;
  paused: boolean;
  resetGame: () => void;
  pauseGame: () => void;
  continueGame: () => void;

  /** Time passed in seconds since the game started. */
  timePassed: number;
  setTimePassed: (newTimePassed: number) => void;

  movesCount: number;
  addMove: () => void;

  tiles: GameTile[];
  setTiles: (tiles: GameTile[]) => void;

  checked: GameTileId[];
  checkTile: (tileId: GameTileId) => void;

  matched: GameTileId[];
  matchTiles: (tile1Id: GameTileId, tile2Id: GameTileId) => boolean;

  cheatMode: boolean;
  toggleCheatMode: () => void;
};

export const useGameStore = create<GameState>()(
  persist(
    (set, get, api) => {
      return {
        timePassed: 0,
        setTimePassed: (timePassed) => set({ timePassed }),

        movesCount: 0,
        addMove: () => set((state) => ({ movesCount: state.movesCount + 1 })),

        tiles: generateGameTiles(PAIRS_COUNT),
        setTiles: (tiles) => set({ tiles }),

        checked: [],
        checkTile: (tileId) =>
          set((state) => {
            const current = state.checked;

            if (current.length >= 2) {
              return { checked: [tileId] };
            }

            return { checked: [...current, tileId] };
          }),

        matched: [],
        matchTiles: (tile1Id, tile2Id) => {
          let isGameOver = false;
          set((state) => {
            const newMatched = [...state.matched, tile1Id, tile2Id];
            isGameOver = newMatched.length === state.tiles.length;
            return { matched: newMatched };
          });
          return isGameOver;
        },

        gameId: crypto.randomUUID(),
        paused: false,
        resetGame: () => {
          set({
            gameId: crypto.randomUUID(),
            timePassed: 0,
            movesCount: 0,
            tiles: generateGameTiles(PAIRS_COUNT),
            checked: [],
            matched: [],
          });
        },
        pauseGame: () => set({ paused: true }),
        continueGame: () => set({ paused: false }),

        cheatMode: false,
        toggleCheatMode: () =>
          set((state) => ({ cheatMode: !state.cheatMode })),

        ...createHydrateStoreSlice(set, get, api),
      };
    },
    {
      name: "game",
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      partialize: ({ paused, ...state }) =>
        removeHydrateFromPersistedState(state),
      onRehydrateStorage,
    }
  )
);
