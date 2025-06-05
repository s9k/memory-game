"use client";

import { redirect } from "next/navigation";
import { usePlayerStore } from "@/domains/player/hooks";

export function PlayerLoggedInGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const playerName = usePlayerStore((state) => state.playerName);
  const hydrated = usePlayerStore((state) => state.hydrated);

  if (!hydrated) {
    return null;
  }

  if (!playerName) {
    redirect("/");
  }

  return <>{children}</>;
}
