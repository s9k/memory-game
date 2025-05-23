import { StateCreator } from "zustand";

export type HydrateStoreSlice = {
  hydrated: boolean;
  setHydrated: (hydrated: boolean) => void;
};

export const createHydrateStoreSlice: StateCreator<HydrateStoreSlice> = (
  set
) => ({
  hydrated: false,
  setHydrated: () => set({ hydrated: true }),
});

export const onRehydrateStorage =
  <State extends HydrateStoreSlice>(state: State) =>
  () =>
    state.setHydrated(true);
