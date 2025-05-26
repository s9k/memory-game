"use client";

import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { redirect } from "next/navigation";
import { useGameStore } from "@/domains/game/hooks";
import { useClose } from "./useClose";
import { HighscoreTable } from "../Table";
import styles from "./index.module.css";

const PAUSE_TRIGGER = "highscore-dialog-opened";

export function HighscoreDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pauseGame = useGameStore((state) => state.pauseGame);
  const unpauseGame = useGameStore((state) => state.unpauseGame);

  useEffect(() => {
    pauseGame(PAUSE_TRIGGER);
    dialogRef.current?.showModal();
  }, []);
  useClose(dialogRef, () => {
    unpauseGame(PAUSE_TRIGGER);
    redirect("/game");
  });

  return (
    <dialog ref={dialogRef} className={styles.root}>
      <section className={styles.content}>
        <header className={styles.header}>
          <h2 className={styles.title}>Fastest memorizers</h2>
          <button
            type="button"
            className={styles.close}
            onClick={() => dialogRef.current?.close()}
            aria-label="Close dialog"
          >
            <X />
          </button>
        </header>
        <div className={styles.body}>
          <HighscoreTable />
        </div>
      </section>
    </dialog>
  );
}
