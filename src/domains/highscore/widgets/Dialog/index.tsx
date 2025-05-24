"use client";

import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { useClose } from "./useClose";
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
  useClose(dialogRef, onClose);

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
