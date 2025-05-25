import { Shapes } from "lucide-react";
import cn from "classnames";
import { Photo } from "@/domains/photo/model";
import { FrontSide } from "./FrontSide";
import styles from "./index.module.css";

export type TileData = {
  id: number;
  pairId: number;
  photo?: Photo;
};

type Props = TileData & {
  checked?: boolean;
  matched?: boolean;
  onFlip?: (id: number) => void;
  cheatMode?: boolean;
};

export function Tile({
  id,
  pairId,
  checked,
  matched,
  onFlip,
  cheatMode,
  photo,
}: Props) {
  return (
    <button
      className={cn(styles.root, {
        [styles.flipped]: checked || matched,
        [styles.matched]: matched,
      })}
      onClick={() => onFlip?.(id)}
      disabled={matched || checked}
    >
      <div className={cn(styles.front, styles.side)}>
        <FrontSide photo={photo} pairId={pairId} />
      </div>
      <div className={cn(styles.back, styles.side)}>
        <Shapes className={styles.icon} />
        {cheatMode && <div className={styles.hint}>{pairId}</div>}
      </div>
    </button>
  );
}
