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
};

export function Tile({ id, pairId, checked, matched, onFlip }: Props) {
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
      <div className={`${styles.front} ${styles.side}`}>{pairId}</div>
      <div className={`${styles.back} ${styles.side}`}>
        <Shapes size="3rem" fill="currentColor" />
      </div>
    </button>
  );
}
