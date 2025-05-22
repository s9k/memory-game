"use client";

import { useEffect } from "react";
import { usePlayerContext } from "../hooks/useContext";
import { redirect } from "next/navigation";

export function withPlayerLoggedIn<Props extends Record<string, unknown>>(
  Component: React.ComponentType<Props>
) {
  return function ProtectedComponent(props: Props) {
    const { player, pending } = usePlayerContext();

    useEffect(() => {
      if (!pending && !player) {
        redirect("/");
      }
    }, [pending, player]);

    if (pending) {
      return null;
    }

    return <Component {...props} />;
  };
}
