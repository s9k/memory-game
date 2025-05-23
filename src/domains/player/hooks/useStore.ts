import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  HydrateStoreSlice,
  createHydrateStoreSlice,
  onRehydrateStorage,
} from "@/utils/store";

type PlayerState = HydrateStoreSlice & {
  playerName: string | null;
  logIn: (playerName: string) => void;
  logOut: () => void;
};

export const usePlayerStore = create<PlayerState>()(
  persist(
    (set, get, api) => ({
      playerName: null,
      logIn: (playerName) => set({ playerName }),
      logOut: () => set({ playerName: null }),
      ...createHydrateStoreSlice(set, get, api),
    }),
    {
      name: "player",
      onRehydrateStorage,
    }
  )
);
