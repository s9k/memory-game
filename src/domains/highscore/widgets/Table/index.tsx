"use client";

import cn from "classnames";
import { useHighscoreStore } from "@/domains/highscore/hooks";
import { formatDuration } from "@/utils/duration";
import styles from "./index.module.css";
import { useGameStore } from "@/domains/game/hooks";
import { usePlayerStore } from "@/domains/player/hooks";
import { useEffect, useRef } from "react";

export function HighscoreTable() {
  const bodyRef = useRef<HTMLTableSectionElement>(null);
  const list = useHighscoreStore((state) => state.list);
  const gameId = useGameStore((state) => state.gameId);
  const currentPlayerName = usePlayerStore((state) => state.playerName);

  // Scroll to the highlighted row
  useEffect(() => {
    if (!bodyRef.current) return;

    const highlightedRow = bodyRef.current.querySelector(
      `[data-id="${gameId}"]`
    );
    if (!highlightedRow) return;

    highlightedRow.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, []);

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
      <tbody ref={bodyRef}>
        {list.map(({ playerName, movesCount, timePassed, id }, index) => (
          <tr
            key={index}
            data-id={id}
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
