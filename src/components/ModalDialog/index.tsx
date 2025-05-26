"use client";

import { X } from "lucide-react";
import React, { ReactNode, useEffect, useRef } from "react";
import { useClose } from "./useClose";
import styles from "./index.module.css";

type Props = {
  title: ReactNode;
  children: ReactNode;
  onClose: () => void;
};

export function ModalDialog({ title, children, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);
  useClose(dialogRef, onClose);

  return (
    <dialog ref={dialogRef} className={styles.root}>
      <section className={styles.content}>
        <header className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <button
            type="button"
            className={styles.close}
            onClick={() => dialogRef.current?.close()}
            aria-label="Close dialog"
          >
            <X />
          </button>
        </header>
        <div className={styles.body}>{children}</div>
      </section>
    </dialog>
  );
}
