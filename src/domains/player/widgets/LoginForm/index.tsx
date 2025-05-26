"use client";

import { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import { usePlayerStore } from "@/domains/player/hooks";
import { useGameStore } from "@/domains/game/hooks";
import { Button, Input } from "@/components";
import styles from "./index.module.css";

export function PlayerLoginForm() {
  const { hydrated, playerName, logIn } = usePlayerStore((state) => state);
  const resetGame = useGameStore((state) => state.resetGame);
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/game");
  }, [router]);

  const submitAction = async (formData: FormData) => {
    const name = formData.get("name") as string;

    if (name !== playerName) {
      resetGame();
    }
    logIn(name);
    redirect("/game");
  };

  if (!hydrated) {
    return null;
  }

  return (
    <form className={styles.root} action={submitAction}>
      <label htmlFor="name" className={styles.label}>
        Enter your name
      </label>
      <Input
        id="name"
        name="name"
        type="text"
        defaultValue={playerName ?? undefined}
        placeholder="Player"
        autoFocus
        maxLength={24}
        required
      />
      <Button type="submit">
        <span className={styles.buttonInner}>Start the game</span>
      </Button>
    </form>
  );
}
