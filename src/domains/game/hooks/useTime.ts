"use client";

import { useEffect, useRef } from "react";
import { usePageVisibilityChange } from "@/hooks";
import { useGameStore } from "./useStore";
import { useGameOver } from "./useOver";
import { useGamePaused } from "./usePaused";

const VISIBILITY_PAUSE_TRIGGER = "page-hidden";

export function useGameTime() {
  const gameOver = useGameOver();
  const gameId = useGameStore((state) => state.gameId);
  const paused = useGamePaused();
  const secondsPassed = useGameStore((state) => state.timePassed);
  const setSecondsPassed = useGameStore((state) => state.setTimePassed);
  const pauseGame = useGameStore((state) => state.pauseGame);
  const unpauseGame = useGameStore((state) => state.unpauseGame);
  const msPassedRef = useRef(secondsPassed);

  useEffect(() => {
    msPassedRef.current = secondsPassed * 1_000;
  }, [gameId]);

  usePageVisibilityChange((visible) => {
    if (visible) {
      unpauseGame(VISIBILITY_PAUSE_TRIGGER);
    } else {
      pauseGame(VISIBILITY_PAUSE_TRIGGER);
    }
  });

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
