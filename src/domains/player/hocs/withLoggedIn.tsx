"use client";

import { useEffect } from "react";
import { usePlayerStore } from "../hooks";
import { redirect } from "next/navigation";

export function withPlayerLoggedIn<Props extends Record<string, unknown>>(
  Component: React.ComponentType<Props>
) {
  return function ProtectedComponent(props: Props) {
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

    return <Component {...props} />;
  };
}
