"use client";

import { redirect } from "next/navigation";
import { usePlayerContext } from "@/domains/player/hooks";
import styles from "./index.module.css";

export function PlayerLoginForm() {
  const { player, logIn } = usePlayerContext();

  const submitAction = async (formData: FormData) => {
    const name = formData.get("name") as string;
    logIn(name);
    redirect("/game");
  };

  return (
    <form className={styles.root} action={submitAction}>
      <label htmlFor="name">Enter your name</label>
      <input
        id="name"
        className={styles.nameInput}
        name="name"
        type="text"
        defaultValue={player ? player.name : "Player"}
        required
      />
      <button className={styles.button} type="submit">
        Start the game
      </button>
    </form>
  );
}
