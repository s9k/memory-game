"use client";

import { Tile } from "./Tile";
import { useTileDataList } from "./useTileDataList";
import styles from "./index.module.css";
import { useState } from "react";
import dynamic from "next/dynamic";

type Props = {
  pairs: number;
};

function Content({ pairs }: Props) {
  const list = useTileDataList(pairs);
  const [checkedIds, setCheckedIds] = useState<Set<number>>(new Set());
  const [matchedIds, setMatchedIds] = useState<Set<number>>(new Set());

  const handleClickTile = (tileId: number) => {
    setCheckedIds((current) => {
      const updated = current.size >= 2 ? new Set<number>() : new Set(current);
      updated.add(tileId);
      return updated;
    });

    if (checkedIds.size !== 1) {
      return;
    }

    const currentCheckedTiles = [...checkedIds].map((id) => list.byId.get(id));
    const clickedPairId = list.byId.get(tileId)?.pairId;
    const matchedTile = currentCheckedTiles.find(
      (tile) => tile?.pairId === clickedPairId && tile?.id !== tileId
    );

    if (!matchedTile) {
      return;
    }

    setMatchedIds((current) => {
      const updated = new Set(current);
      updated.add(tileId);
      updated.add(matchedTile.id);
      return updated;
    });
  };

  return (
    <div className={styles.root}>
      {list.shuffled.map((data) => (
        <Tile
          key={data.id}
          {...data}
          checked={checkedIds.has(data.id)}
          matched={matchedIds.has(data.id)}
          onFlip={handleClickTile}
        />
      ))}
    </div>
  );
}

export const GameBoard = dynamic(async () => Content, { ssr: false });
