import { Medal, RefreshCcw, Trophy } from "lucide-react";
import { redirect } from "next/navigation";
import cn from "classnames";
import { useGameOver, useGameStore } from "@/domains/game/hooks";
import { formatDuration } from "@/utils/duration";
import { Button } from "./Button";
import styles from "./index.module.css";

export function GameVictoryDialog() {
  const isGameOver = useGameOver();
  const secondsPassed = useGameStore((state) => state.timePassed);
  const movesCount = useGameStore((state) => state.movesCount);
  const resetGame = useGameStore((state) => state.resetGame);

  return (
    <dialog
      className={cn(styles.root, {
        [styles.visible]: isGameOver,
      })}
    >
      <Trophy className={styles.icon} />
      <p>
        You won in{" "}
        <mark className={styles.highlight}>
          {formatDuration(secondsPassed)}
        </mark>
        <br />
        with <mark className={styles.highlight}>{movesCount}</mark> moves.
      </p>
      <div className={styles.actions}>
        <Button icon={<RefreshCcw />} label="Play again" onClick={resetGame} />
        <Button
          icon={<Medal />}
          label="Scoreboard"
          onClick={() => redirect("/game/scores")}
        />
      </div>
    </dialog>
  );
}
