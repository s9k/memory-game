import { useGameStore } from "./useStore";

export function useGameOver() {
  return useGameStore((state) => state.matched.length === state.tiles.length);
}
