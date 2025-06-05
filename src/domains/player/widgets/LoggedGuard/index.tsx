"use client";

import { redirect } from "next/navigation";
import { usePlayerStore } from "@/domains/player/hooks";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  mode: "logged-in" | "logged-out";
};

/**
 * Guards access based on player's login status.
 *
 * Redirects if the current state doesn't match the expected {@link mode}:
 * - `"logged-in"`  - requires player to be logged in
 * - `"logged-out"` - requires player to be logged out
 */
export function PlayerLoggedGuard({ children, mode }: Props) {
  const playerName = usePlayerStore((state) => state.playerName);
  const hydrated = usePlayerStore((state) => state.hydrated);

  if (!hydrated) {
    return null;
  }

  if (!playerName && mode === "logged-in") {
    redirect("/");
  }

  if (playerName && mode === "logged-out") {
    redirect("/game");
  }

  return <>{children}</>;
}
