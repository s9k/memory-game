import { useEffect, useMemo } from "react";
import { GameTile } from "@/domains/game/model";
import { shuffleArray } from "@/utils/array";
import { useGameStore } from "./useStore";

export function useGameTiles(pairs: number) {
  const setTiles = useGameStore((state) => state.setTiles);

  const data = useMemo(
    () =>
      Array.from({ length: pairs * 2 }, (_, index) => ({
        id: index,
        pairId: Math.floor(index / 2),
      })),
    [pairs]
  );

  const shuffled = useMemo(() => shuffleArray(data), [data]);

  const byId = useMemo(() => {
    return shuffled.reduce<Map<number, GameTile>>(
      (result, tile) => result.set(tile.id, tile),
      new Map()
    );
  }, [shuffled]);

  useEffect(() => {
    setTiles(shuffled);
  }, [shuffled]);

  return { byId, shuffled };
}
