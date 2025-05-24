"use client";

import { GameRoot } from "@/domains/game/widgets";
import { HighscoreDialog } from "@/domains/highscore/widgets/Dialog";
import { withPlayerLoggedIn } from "@/domains/player/hocs";
import { redirect } from "next/navigation";

function GameScoresPage() {
  return (
    <>
      <GameRoot paused />
      <HighscoreDialog onClose={() => redirect("/game")} />
    </>
  );
}

export default withPlayerLoggedIn(GameScoresPage);
