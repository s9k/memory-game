"use client";

import { redirect } from "next/navigation";
import { usePlayerStore } from "@/domains/player/hooks";
import styles from "./index.module.css";

export function PlayerLoginForm() {
  const { hydrated, playerName, logIn } = usePlayerStore((state) => state);

  const submitAction = async (formData: FormData) => {
    const name = formData.get("name") as string;
    logIn(name);
    redirect("/game");
  };

  if (!hydrated) {
    return null;
  }

  return (
    <form className={styles.root} action={submitAction}>
      <label htmlFor="name">Enter your name</label>
      <input
        id="name"
        className={styles.nameInput}
        name="name"
        type="text"
        defaultValue={playerName ?? "Player"}
        autoFocus
        required
      />
      <button className={styles.button} type="submit">
        Start the game
      </button>
    </form>
  );
}
