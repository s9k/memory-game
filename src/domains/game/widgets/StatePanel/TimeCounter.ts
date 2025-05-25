import { useGameStore, useGameTime } from "@/domains/game/hooks";
import { formatDuration } from "@/utils/duration";

export function TimeCounter() {
  useGameTime();
  const time = useGameStore((state) => state.timePassed);
  return formatDuration(time);
}
