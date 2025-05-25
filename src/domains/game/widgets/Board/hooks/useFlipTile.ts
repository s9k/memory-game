import { useGameStore, useGameRecordHighscore } from "@/domains/game/hooks";
import { TileData } from "../Tile";

type Props = {
  tileMap: Map<number, TileData>;
};

export function useFlipTile({ tileMap }: Props) {
  const checkedIds = useGameStore((state) => state.checked);
  const checkTile = useGameStore((state) => state.checkTile);
  const matchTiles = useGameStore((state) => state.matchTiles);
  const addMove = useGameStore((state) => state.addMove);
  const recordHighscore = useGameRecordHighscore();

  const flipTile = (tileId: number) => {
    addMove();

    checkTile(tileId);
    if (checkedIds.length !== 1) return;

    const currentCheckedTiles = checkedIds.map((id) => tileMap.get(id));
    const clickedPairId = tileMap.get(tileId)?.pairId;
    const matchedTile = currentCheckedTiles.find(
      (tile) => tile?.pairId === clickedPairId
    );
    if (!matchedTile) return;

    const isGameOver = matchTiles(tileId, matchedTile.id);
    if (!isGameOver) return;

    recordHighscore();
  };

  return flipTile;
}
