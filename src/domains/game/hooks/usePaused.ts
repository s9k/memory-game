import { useGameStore } from "./useStore";

export function useGamePaused() {
  const pauseTriggers = useGameStore((state) => state.pauseTriggers);
  return pauseTriggers.size > 0;
}
