"use client";

import { redirect } from "next/navigation";
import styles from "./index.module.css";

export default function LoginForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    redirect("/game");
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit}>
      <label htmlFor="name">Enter your name</label>
      <input
        id="name"
        className={styles.nameInput}
        name="name"
        type="text"
        defaultValue="Player"
        required
      />
      <button className={styles.button} type="submit">
        Start the game
      </button>
    </form>
  );
}
