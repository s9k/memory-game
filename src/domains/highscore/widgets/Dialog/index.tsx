"use client";

import { useEffect, useRef } from "react";
import { useOutsideClick } from "./useOutsideClick";
import { HighscoreTable } from "../Table";
import styles from "./index.module.css";

type Props = {
  onClose: () => void;
};

export function HighscoreDialog({ onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);
  useOutsideClick(dialogRef, onClose);

  return (
    <dialog ref={dialogRef} className={styles.root}>
      <section className={styles.content}>
        <header>
          <h2 className={styles.title}>Fastest memorizers</h2>
        </header>
        <HighscoreTable />
      </section>
    </dialog>
  );
}
