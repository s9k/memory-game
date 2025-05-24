"use client";

import { createElement, useEffect } from "react";
import { usePlayerStore } from "../hooks";
import { redirect } from "next/navigation";

export function withPlayerLoggedIn<
  P extends Record<string, unknown>,
  C extends React.ComponentType<P>
>(Component: C): C {
  function ProtectedComponent(props: P) {
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

    return createElement(Component, props);
  }

  return ProtectedComponent as C;
}
