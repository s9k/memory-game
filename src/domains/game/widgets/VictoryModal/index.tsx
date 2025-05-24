import { Medal, RefreshCcw, Trophy } from "lucide-react";
import cn from "classnames";
import { useGameOver, useGameStore } from "@/domains/game/hooks";
import { formatDuration } from "@/utils/duration";
import { Button } from "./Button";
import styles from "./index.module.css";

export function GameVictoryModal() {
  const isGameOver = useGameOver();
  const secondsPassed = useGameStore((state) => state.timePassed);
  const movesCount = useGameStore((state) => state.movesCount);
  const startNewGame = useGameStore((state) => state.startNewGame);

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
        <Button
          icon={<RefreshCcw />}
          label="Play again"
          onClick={startNewGame}
        />
        <Button icon={<Medal />} label="Scoreboard" />
      </div>
    </dialog>
  );
}
