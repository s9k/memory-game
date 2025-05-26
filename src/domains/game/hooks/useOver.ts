import { useGameStore } from "./useStore";

export function useGameOver() {
  return useGameStore(
    (state) => state.matchedTiles.length === state.tiles.length
  );
}
