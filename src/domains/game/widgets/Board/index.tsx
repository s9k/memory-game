"use client";

import { useGameStore } from "@/domains/game/hooks";
import { Tile } from "./Tile";
import { useTileDataList } from "./useTileDataList";
import { useFlipTile } from "./useFlipTile";
import styles from "./index.module.css";

export function GameBoard() {
  const list = useTileDataList();
  const checkedIds = useGameStore((state) => state.checked);
  const matchedIds = useGameStore((state) => state.matched);
  const cheatMode = useGameStore((state) => state.cheatMode);
  const flipTile = useFlipTile({ tileMap: list.byId });

  return (
    <div className={styles.root}>
      {list.shuffled.map((data) => (
        <Tile
          key={data.id}
          {...data}
          checked={checkedIds.includes(data.id)}
          matched={matchedIds.includes(data.id)}
          onFlip={flipTile}
          cheatMode={cheatMode}
        />
      ))}
    </div>
  );
}
