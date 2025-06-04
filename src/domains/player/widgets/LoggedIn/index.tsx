"use client";

import { redirect } from "next/navigation";
import { usePlayerStore } from "@/domains/player/hooks";

export function PlayerLoggedIn({ children }: { children: React.ReactNode }) {
  const playerName = usePlayerStore((state) => state.playerName);
  const hydrated = usePlayerStore((state) => state.hydrated);

  if (!playerName && !hydrated) {
    return null;
  }

  if (!playerName && hydrated) {
    redirect("/");
  }

  return <>{children}</>;
}
