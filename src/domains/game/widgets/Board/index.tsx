"use client";

import { ReactNode, Suspense, use } from "react";
import { useGameStore } from "@/domains/game/hooks";
import { Photo } from "@/domains/photo/model";
import { Tile } from "./Tile";
import { useFlipTile, useTileDataList } from "./hooks";
import styles from "./index.module.css";

type RawProps = {
  photos?: Photo[];
  children?: ReactNode;
};

function ContentRaw({ photos, children }: RawProps) {
  const list = useTileDataList();
  const checkedIds = useGameStore((state) => state.checkedTiles);
  const matchedIds = useGameStore((state) => state.matchedTiles);
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
          photo={photos?.[data.pairId]}
        />
      ))}
      {children}
    </div>
  );
}

type Props = {
  photosPromise: Promise<Photo[]>;
  children?: ReactNode;
};

function ContentLoading({ photosPromise, children }: Props) {
  const photos = use(photosPromise);

  return <ContentRaw photos={photos}>{children}</ContentRaw>;
}

export function GameBoard({ photosPromise, children }: Props) {
  return (
    <Suspense fallback={<ContentRaw />}>
      <ContentLoading photosPromise={photosPromise}>{children}</ContentLoading>
    </Suspense>
  );
}
