"use client";

import { useEffect } from "react";
import { useGameStore } from "./useStore";

export function useGameKeyboard() {
  const toggleCheatMode = useGameStore((state) => state.toggleCheatMode);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "c") {
        toggleCheatMode();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
}
