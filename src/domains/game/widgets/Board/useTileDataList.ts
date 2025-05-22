import { useMemo } from "react";
import { TileData } from "./Tile";

export function useTileDataList(pairs: number) {
  const data = useMemo(
    () =>
      Array.from({ length: pairs * 2 }, (_, index) => ({
        id: index,
        pairId: Math.floor(index / 2),
        url: undefined,
      })),
    [pairs]
  );

  const shuffled = useMemo(() => data.sort(() => Math.random() - 0.5), [data]);

  const byId = useMemo(() => {
    return shuffled.reduce<Map<number, TileData>>(
      (result, tile) => result.set(tile.id, tile),
      new Map()
    );
  }, [shuffled]);

  return { byId, shuffled };
}
