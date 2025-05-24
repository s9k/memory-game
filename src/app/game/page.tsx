"use client";

import { GameRoot } from "@/domains/game/widgets";
import { withPlayerLoggedIn } from "@/domains/player/hocs";

function GamePage() {
  return <GameRoot />;
}

export default withPlayerLoggedIn(GamePage);
