"use client";

import { RefreshCcw, Medal, LogOut } from "lucide-react";
import { redirect } from "next/navigation";
import {
  GameActionButton,
  GameActions,
  GameBoard,
  GameStatePanel,
  GameToolbar,
} from "@/domains/game/widgets";
import { usePlayerStore } from "@/domains/player/hooks";
import { useGameStore } from "@/domains/game/hooks";
import { GameVictoryDialog } from "@/domains/game/widgets/VictoryDialog";
import { useGameKeyboard } from "@/domains/game/hooks/useKeyboard";
import styles from "./index.module.css";

type Props = {
  paused?: boolean;
};

export function GameRoot({ paused }: Props) {
  const logOut = usePlayerStore((state) => state.logOut);
  const resetGame = useGameStore((state) => state.resetGame);

  useGameKeyboard();

  const handleLogOut = () => {
    resetGame();
    logOut();
  };

  return (
    <div className={styles.root}>
      <GameToolbar>
        <GameStatePanel paused={paused} />

        <GameActions>
          <GameActionButton
            icon={<RefreshCcw />}
            label="New game"
            onClick={resetGame}
          />
          <GameActionButton
            icon={<Medal />}
            label="Scoreboard"
            onClick={() => redirect("/game/scores")}
          />
          <GameActionButton
            icon={<LogOut />}
            label="Logout"
            onClick={handleLogOut}
          />
        </GameActions>
      </GameToolbar>

      <div className={styles.board}>
        <GameBoard />

        <GameVictoryDialog />
      </div>
    </div>
  );
}
