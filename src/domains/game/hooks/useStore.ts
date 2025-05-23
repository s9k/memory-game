import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  createHydrateStoreSlice,
  HydrateStoreSlice,
  onRehydrateStorage,
} from "@/utils/store";
import { GameTile } from "@/domains/game/model";
import { generateGameTiles } from "@/domains/game/utils";

type GameTileId = number;

type GameState = HydrateStoreSlice & {
  gameId: number;
  startNewGame: () => void;

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
  matchTiles: (tile1Id: GameTileId, tile2Id: GameTileId) => void;
};

const PAIRS = 2;

export const useGameStore = create<GameState>()(
  persist(
    (set, get, api) => {
      return {
        timePassed: 0,
        setTimePassed: (timePassed) => set({ timePassed }),

        movesCount: 0,
        addMove: () => set((state) => ({ movesCount: state.movesCount + 1 })),

        tiles: generateGameTiles(PAIRS),
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
        matchTiles: (tile1Id, tile2Id) =>
          set((state) => ({ matched: [...state.matched, tile1Id, tile2Id] })),

        gameId: 0,
        startNewGame: () => {
          set((state) => ({
            gameId: state.gameId + 1,
            timePassed: 0,
            movesCount: 0,
            tiles: generateGameTiles(PAIRS),
            checked: [],
            matched: [],
          }));
        },
        ...createHydrateStoreSlice(set, get, api),
      };
    },
    {
      name: "game",
      onRehydrateStorage,
    }
  )
);
