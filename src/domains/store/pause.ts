import { StateCreator } from "zustand";

export type GameStorePauseSlice = {
  pauseTriggers: Set<string>;
  pauseGame: (pauseTrigger: string) => void;
  unpauseGame: (pauseTrigger: string) => void;
};

export const createGameStorePauseSlice: StateCreator<GameStorePauseSlice> = (
  set
) => ({
  pauseTriggers: new Set(),
  pauseGame: (pauseTrigger) =>
    set((state) => {
      const pauseTriggers = new Set(state.pauseTriggers);
      pauseTriggers.add(pauseTrigger);

      return { pauseTriggers };
    }),
  unpauseGame: (pauseTrigger) =>
    set((state) => {
      const pauseTriggers = new Set(state.pauseTriggers);
      pauseTriggers.delete(pauseTrigger);

      return { pauseTriggers };
    }),
});
