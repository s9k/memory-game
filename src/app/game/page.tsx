import { GameGrid } from "@/components/GameGrid";

const PAIRS = 6;

export default function GamePage() {
  return (
    <>
      <GameGrid pairs={PAIRS} />
    </>
  );
}
