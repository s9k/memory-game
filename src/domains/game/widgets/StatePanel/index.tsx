import { usePlayerContext } from "@/domains/player/hooks";
import cn from "classnames";
import { User, Clock, CircleArrowRight } from "lucide-react";
import { TimeCounter } from "./TimeCounter";
import styles from "./index.module.css";

export function GameStatePanel() {
  const { player } = usePlayerContext();

  return (
    <div className={styles.root}>
      <div className={cn(styles.item, styles.user)}>
        <User className={styles.icon} />
        <span className={styles.caption}>{player?.name}</span>
      </div>
      <div className={styles.item}>
        <Clock className={styles.icon} />
        <span className={styles.caption}>
          <TimeCounter />
        </span>
      </div>
      <div className={styles.item}>
        <CircleArrowRight className={styles.icon} />
        <span className={styles.caption}>0</span>
      </div>
    </div>
  );
}
