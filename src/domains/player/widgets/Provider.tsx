"use client";

import { useEffect, useState } from "react";
import { PlayerContext } from "../context";
import { Player } from "../model";

const STORAGE_KEY = "playerName";

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [player, setPlayer] = useState<Player>();
  const [pending, setPending] = useState(true);

  useEffect(() => {
    if (player) {
      return;
    }

    try {
      const playerName = window.localStorage.getItem(STORAGE_KEY);
      if (playerName) {
        setPlayer({ name: playerName });
      }
    } catch {}

    setPending(false);
  }, []);

  const logIn = (name: string) => {
    const player = { name };
    setPlayer(player);
    try {
      window.localStorage.setItem(STORAGE_KEY, name);
    } catch {}
  };

  const logOut = () => {
    setPlayer(undefined);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {}
  };

  return (
    <PlayerContext.Provider
      value={{
        pending,
        player,
        logIn,
        logOut,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}
