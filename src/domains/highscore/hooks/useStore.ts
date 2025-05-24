import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  createHydrateStoreSlice,
  HydrateStoreSlice,
  onRehydrateStorage,
} from "@/utils/store";

type HighscoreItem = {
  id: string;
  playerName: string;
  timePassed: number;
  movesCount: number;
};

type HighscoreState = HydrateStoreSlice & {
  list: HighscoreItem[];
  addResult: (item: HighscoreItem) => void;
};

const sortItems = (item1: HighscoreItem, item2: HighscoreItem) => {
  if (item1.timePassed !== item2.timePassed) {
    return item1.timePassed - item2.timePassed;
  }

  if (item1.movesCount !== item2.movesCount) {
    return item1.movesCount - item2.movesCount;
  }

  return 0;
};

export const useHighscoreStore = create<HighscoreState>()(
  persist(
    (set, get, api) => {
      return {
        list: [],
        addResult: (item) =>
          set((state) => {
            // O(n logn), could be improved to O(n)
            const newList = [...state.list, item].sort(sortItems);

            return { list: newList };
          }),

        ...createHydrateStoreSlice(set, get, api),
      };
    },
    {
      name: "highscore",
      onRehydrateStorage,
    }
  )
);
