"use client";

import { useEffect, useRef } from "react";
import { redirect } from "next/navigation";
import { useGameStore } from "@/domains/game/hooks";
import { ModalDialog } from "@/components";
import { HighscoreTable } from "../Table";

const PAUSE_TRIGGER = "highscore-dialog-opened";

export function HighscoreDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pauseGame = useGameStore((state) => state.pauseGame);
  const unpauseGame = useGameStore((state) => state.unpauseGame);

  useEffect(() => {
    pauseGame(PAUSE_TRIGGER);
    dialogRef.current?.showModal();
  }, []);
  const handleClose = () => {
    unpauseGame(PAUSE_TRIGGER);
    redirect("/game");
  };

  return (
    <ModalDialog title="Fastest memorizers" onClose={handleClose}>
      <HighscoreTable />
    </ModalDialog>
  );
}
