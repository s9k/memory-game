import { GameActions } from "../Actions";
import { GameStatePanel } from "../StatePanel";
import styles from "./index.module.css";

export function GameToolbar() {
  return (
    <div className={styles.root}>
      <GameStatePanel />
      <GameActions />
    </div>
  );
}
