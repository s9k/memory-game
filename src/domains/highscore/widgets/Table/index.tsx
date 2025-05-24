import cn from "classnames";
import { useHighscoreStore } from "@/domains/highscore/hooks";
import { formatDuration } from "@/utils/duration";
import styles from "./index.module.css";
import { useGameStore } from "@/domains/game/hooks";
import { usePlayerStore } from "@/domains/player/hooks";

export function HighscoreTable() {
  const list = useHighscoreStore((state) => state.list);
  const gameId = useGameStore((state) => state.gameId);
  const currentPlayerName = usePlayerStore((state) => state.playerName);

  if (!list.length) {
    return <div className={styles.empty}>There are no records yet</div>;
  }

  return (
    <table className={styles.root}>
      <thead className={styles.header}>
        <tr>
          <th className={cn(styles.headCell, styles.place)}>#</th>
          <th className={cn(styles.headCell, styles.playerName)}>Name</th>
          <th className={cn(styles.headCell, styles.movesCount)}>Moves</th>
          <th className={cn(styles.headCell, styles.timePassed)}>Time</th>
        </tr>
      </thead>
      <tbody>
        {list.map(({ playerName, movesCount, timePassed, id }, index) => (
          <tr
            key={index}
            className={cn(styles.row, {
              [styles.highlighted]: gameId === id,
            })}
          >
            <td className={cn(styles.bodyCell, styles.place)}>{index + 1}</td>
            <td
              className={cn(styles.bodyCell, styles.playerName, {
                [styles.currentPlayer]: currentPlayerName === playerName,
              })}
            >
              {playerName}
            </td>
            <td className={cn(styles.bodyCell, styles.movesCount)}>
              {movesCount}
            </td>
            <td className={cn(styles.bodyCell, styles.timePassed)}>
              {formatDuration(timePassed)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
