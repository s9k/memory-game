import { useMemo } from "react";
import { TileData } from "./Tile";
import { useGameStore } from "../../hooks";

export function useTileDataList() {
  const shuffled = useGameStore((state) => state.tiles);

  const byId = useMemo(() => {
    return shuffled.reduce<Map<number, TileData>>(
      (result, tile) => result.set(tile.id, tile),
      new Map()
    );
  }, [shuffled]);

  return { byId, shuffled };
}
