import { useGameStore, useGameTime } from "@/domains/game/hooks";
import { formatDuration } from "@/utils/duration";

type Props = {
  paused?: boolean;
};

export function TimeCounter({ paused }: Props) {
  useGameTime({ paused });
  const time = useGameStore((state) => state.timePassed);
  return formatDuration(time);
}
