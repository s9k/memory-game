import { usePlayerStore } from "@/domains/player/hooks";
import { useHighscoreStore } from "@/domains/highscore/hooks";
import { useGameStore } from "./useStore";

export function useGameRecordHighscore() {
  const playerName = usePlayerStore((state) => state.playerName) ?? "Anonymous";
  const addResult = useHighscoreStore((state) => state.addResult);

  const recordHighscore = () => {
    const { movesCount, timePassed, gameId } = useGameStore.getState();
    addResult({ id: gameId, playerName, movesCount, timePassed });
  };

  return recordHighscore;
}
