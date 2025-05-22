"use client";

import { GameGrid } from "@/components/GameGrid";
import { withPlayerLoggedIn } from "@/domains/player/hocs";
import { usePlayerContext } from "@/domains/player/hooks";

const PAIRS = 6;

function GamePage() {
  const { player, logOut } = usePlayerContext();

  return (
    <>
      <div>
        {player?.name}
        <br />
        <button type="button" onClick={logOut}>
          Log out
        </button>
      </div>

      <GameGrid pairs={PAIRS} />
    </>
  );
}

export default withPlayerLoggedIn(GamePage);
