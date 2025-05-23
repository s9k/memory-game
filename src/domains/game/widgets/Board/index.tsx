"use client";

import { useGameStore } from "@/domains/game/hooks";
import { Tile } from "./Tile";
import { useTileDataList } from "./useTileDataList";
import styles from "./index.module.css";

export function GameBoard() {
  const list = useTileDataList();
  const checkedIds = useGameStore((state) => state.checked);
  const checkTile = useGameStore((state) => state.checkTile);
  const matchedIds = useGameStore((state) => state.matched);
  const matchTiles = useGameStore((state) => state.matchTiles);
  const addMove = useGameStore((state) => state.addMove);

  const handleClickTile = (tileId: number) => {
    console.log("clicked tileId", tileId);
    addMove();
    checkTile(tileId);

    if (checkedIds.length !== 1) {
      return;
    }

    const currentCheckedTiles = checkedIds.map((id) => list.byId.get(id));
    const clickedPairId = list.byId.get(tileId)?.pairId;
    const matchedTile = currentCheckedTiles.find(
      (tile) => tile?.pairId === clickedPairId && tile?.id !== tileId
    );

    if (!matchedTile) {
      return;
    }

    matchTiles(tileId, matchedTile.id);
  };

  return (
    <div className={styles.root}>
      {list.shuffled.map((data) => (
        <Tile
          key={data.id}
          {...data}
          checked={checkedIds.includes(data.id)}
          matched={matchedIds.includes(data.id)}
          onFlip={handleClickTile}
        />
      ))}
    </div>
  );
}
