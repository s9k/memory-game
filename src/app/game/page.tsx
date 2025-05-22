"use client";

import { GameBoard, GameToolbar } from "@/domains/game/widgets";
import { withPlayerLoggedIn } from "@/domains/player/hocs";
import styles from "./page.module.css";

const PAIRS = 6;

function GamePage() {
  return (
    <div className={styles.root}>
      <GameToolbar />
      <GameBoard pairs={PAIRS} />
    </div>
  );
}

export default withPlayerLoggedIn(GamePage);
