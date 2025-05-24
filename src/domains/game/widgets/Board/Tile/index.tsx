import { Shapes } from "lucide-react";
import cn from "classnames";
import styles from "./index.module.css";

export type TileData = {
  id: number;
  pairId: number;
  url?: string;
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
}: Props) {
  const handleClick = () => {
    onFlip?.(id);
  };
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      onFlip?.(id);
    }
  };

  return (
    <button
      className={cn(styles.root, {
        [styles.flipped]: checked || matched,
        [styles.matched]: matched,
      })}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={matched || checked}
    >
      <div className={cn(styles.front, styles.side)}>{pairId}</div>
      <div className={cn(styles.back, styles.side)}>
        <Shapes className={styles.icon} />
        {cheatMode && <div className={styles.hint}>{pairId}</div>}
      </div>
    </button>
  );
}
