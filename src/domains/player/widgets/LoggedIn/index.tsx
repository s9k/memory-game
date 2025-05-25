"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";
import { usePlayerStore } from "@/domains/player/hooks";

export function PlayerLoggedIn({ children }: { children: React.ReactNode }) {
  const playerName = usePlayerStore((state) => state.playerName);
  const hydrated = usePlayerStore((state) => state.hydrated);

  useEffect(() => {
    if (hydrated && !playerName) {
      redirect("/");
    }
  }, [playerName, hydrated]);

  if (!playerName && !hydrated) {
    return null;
  }

  return <>{children}</>;
}
