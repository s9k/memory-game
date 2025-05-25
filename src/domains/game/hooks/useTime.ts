import { useEffect, useRef } from "react";
import { useGameStore } from "./useStore";
import { useGameOver } from "./useOver";

export function useGameTime() {
  const gameOver = useGameOver();
  const gameId = useGameStore((state) => state.gameId);
  const paused = useGameStore((state) => state.paused);
  const secondsPassed = useGameStore((state) => state.timePassed);
  const setSecondsPassed = useGameStore((state) => state.setTimePassed);
  const msPassedRef = useRef(secondsPassed);

  useEffect(() => {
    msPassedRef.current = secondsPassed * 1_000;
  }, [gameId]);

  useEffect(() => {
    if (gameOver || paused) {
      return;
    }

    let lastTime = performance.now();
    let id = requestAnimationFrame(tick);

    function tick() {
      const now = performance.now();
      const delta = now - lastTime;
      msPassedRef.current += delta;

      const secondsPast = Math.floor(msPassedRef.current / 1_000);
      setSecondsPassed(secondsPast);

      lastTime = now;
      id = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(id);
    };
  }, [gameOver, paused]);
}
