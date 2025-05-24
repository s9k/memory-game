import { useGameStore } from "@/domains/game/hooks";
import { formatDuration } from "@/utils/duration";

export function TimeCounter() {
  const time = useGameStore((state) => state.timePassed);
  return formatDuration(time);
}
