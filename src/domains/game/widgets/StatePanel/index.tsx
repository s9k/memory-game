import cn from "classnames";
import { User, Clock, CircleArrowRight } from "lucide-react";
import { usePlayerStore } from "@/domains/player/hooks";
import { useGameStore } from "@/domains/game/hooks";
import { TimeCounter } from "./TimeCounter";
import styles from "./index.module.css";

type Props = {
  paused?: boolean;
};

export function GameStatePanel({ paused }: Props) {
  const playerName = usePlayerStore((state) => state.playerName);
  const movesCount = useGameStore((state) => state.movesCount);

  return (
    <div className={styles.root}>
      <div className={cn(styles.item, styles.user)}>
        <User className={styles.icon} />
        <span className={styles.caption}>{playerName}</span>
      </div>
      <div className={styles.item}>
        <Clock className={styles.icon} />
        <span className={styles.caption}>
          <TimeCounter paused={paused} />
        </span>
      </div>
      <div className={styles.item}>
        <CircleArrowRight className={styles.icon} />
        <span className={styles.caption}>{movesCount}</span>
      </div>
    </div>
  );
}
