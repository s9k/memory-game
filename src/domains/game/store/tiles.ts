import { StateCreator } from "zustand";
import { PAIRS_COUNT } from "@/constants";
import { generateGameTiles } from "@/domains/game/utils";

type GameTile = {
  id: number;
  pairId: number;
};

type GameTileId = number;

export type GameStoreTilesSlice = {
  tiles: GameTile[];
  setTiles: (tiles: GameTile[]) => void;

  checkedTiles: GameTileId[];
  checkTile: (tileId: GameTileId) => void;

  matchedTiles: GameTileId[];
  matchTiles: (tile1Id: GameTileId, tile2Id: GameTileId) => boolean;
};

export const createGameStoreTilesSlice: StateCreator<GameStoreTilesSlice> = (
  set
) => ({
  tiles: generateGameTiles(PAIRS_COUNT),
  setTiles: (tiles) => set({ tiles }),

  checkedTiles: [],
  checkTile: (tileId) =>
    set((state) => {
      const current = state.checkedTiles;

      if (current.length >= 2) {
        return { checkedTiles: [tileId] };
      }

      return { checkedTiles: [...current, tileId] };
    }),

  matchedTiles: [],
  matchTiles: (tile1Id, tile2Id) => {
    let isGameOver = false;
    set((state) => {
      const newMatched = [...state.matchedTiles, tile1Id, tile2Id];
      isGameOver = newMatched.length === state.tiles.length;
      return { matchedTiles: newMatched };
    });
    return isGameOver;
  },
});
