"use client";

import { RefreshCcw, Medal, LogOut } from "lucide-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
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
import { Photo } from "@/domains/photo/model";
import styles from "./index.module.css";

type Props = {
  photosPromise: Promise<Photo[]>;
};

export function GameRootClient({ photosPromise }: Props) {
  const logOut = usePlayerStore((state) => state.logOut);
  const resetGame = useGameStore((state) => state.resetGame);
  const router = useRouter();

  useGameKeyboard();

  useEffect(() => {
    router.prefetch("/game/scores");
  }, [router]);

  const handleLogOut = () => {
    resetGame();
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

      <GameBoard photosPromise={photosPromise}>
        <GameVictoryDialog />
      </GameBoard>
    </div>
  );
}
