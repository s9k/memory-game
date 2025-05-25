import { StateCreator } from "zustand";
import { PersistOptions } from "zustand/middleware";

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

export const removeHydrateFromPersistedState = <
  State extends HydrateStoreSlice
>({
  hydrated, // eslint-disable-line @typescript-eslint/no-unused-vars
  ...state
}: State): Omit<State, "hydrated"> => state;

export const getHydratePersistOptions = <
  State extends HydrateStoreSlice
>(): Pick<
  PersistOptions<State, Omit<State, "hydrated">>,
  "onRehydrateStorage" | "partialize"
> => ({
  onRehydrateStorage,
  partialize: removeHydrateFromPersistedState,
});
