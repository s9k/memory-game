import { shuffleArray } from "@/utils/array";

export function generateGameTiles(pairs: number) {
  const list = Array.from({ length: pairs * 2 }, (_, index) => ({
    id: index,
    pairId: Math.floor(index / 2),
  }));

  return shuffleArray(list);
}
