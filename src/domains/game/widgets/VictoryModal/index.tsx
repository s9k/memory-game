import { useEffect, useRef } from "react";
import styles from "./index.module.css";
import { useGameOver } from "../../hooks";

export function GameVictoryModal() {
  const isGameOver = useGameOver();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    dialogRef.current?.show();
  };

  const closeModal = () => {
    dialogRef.current?.close();
  };

  useEffect(() => {
    if (isGameOver) {
      openModal();
    } else {
      closeModal();
    }
  }, [isGameOver]);

  return (
    <dialog className={styles.root} ref={dialogRef}>
      <h1>Victory!</h1>
      <p>Congratulations! You have completed the game.</p>
    </dialog>
  );
}
