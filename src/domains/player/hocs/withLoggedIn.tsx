"use client";

import { createElement, useEffect, ComponentType } from "react";
import { usePlayerStore } from "../hooks";
import { redirect } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function withPlayerLoggedIn<C extends ComponentType<any>>(
  Component: C
): C {
  function ProtectedComponent(props: React.ComponentProps<C>) {
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
