import { usePlayerContext } from "@/domains/player/hooks";
import { User, Clock, CircleArrowRight } from "lucide-react";
import { TimeCounter } from "./TimeCounter";
import styles from "./index.module.css";

export function GameStatePanel() {
  const { player } = usePlayerContext();

  return (
    <div className={styles.root}>
      <div className={styles.row}>
        <User className={styles.icon} />
        <span className={styles.caption}>{player?.name}</span>
      </div>
      <div className={styles.row}>
        <Clock className={styles.icon} />
        <span className={styles.caption}>
          <TimeCounter />
        </span>
      </div>
      <div className={styles.row}>
        <CircleArrowRight className={styles.icon} />
        <span className={styles.caption}>0</span>
      </div>
    </div>
  );
}
