"use client";

import { RefreshCcw, Medal, LogOut } from "lucide-react";
import {
  GameActionButton,
  GameActions,
  GameBoard,
  GameStatePanel,
  GameToolbar,
} from "@/domains/game/widgets";
import { withPlayerLoggedIn } from "@/domains/player/hocs";
import { usePlayerStore } from "@/domains/player/hooks";
import { useGameStore } from "@/domains/game/hooks";
import { GameVictoryModal } from "@/domains/game/widgets/VictoryModal";
import styles from "./page.module.css";
import { useGameKeyboard } from "@/domains/game/hooks/useKeyboard";

function GamePage() {
  const logOut = usePlayerStore((state) => state.logOut);
  const startNewGame = useGameStore((state) => state.startNewGame);

  useGameKeyboard();

  const handleLogOut = () => {
    startNewGame();
    logOut();
  };

  return (
    <div className={styles.root}>
      <GameToolbar>
        <GameStatePanel />

        <GameActions>
          <GameActionButton
            icon={<RefreshCcw />}
            label="New game"
            onClick={startNewGame}
          />
          <GameActionButton icon={<Medal />} label="Scoreboard" />
          <GameActionButton
            icon={<LogOut />}
            label="Logout"
            onClick={handleLogOut}
          />
        </GameActions>
      </GameToolbar>

      <div className={styles.board}>
        <GameBoard />

        <GameVictoryModal />
      </div>
    </div>
  );
}

export default withPlayerLoggedIn(GamePage);
