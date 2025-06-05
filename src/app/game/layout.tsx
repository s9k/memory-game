import { ReactNode } from "react";
import { PlayerLoggedGuard } from "@/domains/player/widgets";
import { GameRoot } from "@/domains/game/widgets";

type Props = {
  children: ReactNode;
};

export default async function GameLayout({ children }: Props) {
  return (
    <PlayerLoggedGuard mode="logged-in">
      <GameRoot />
      {children}
    </PlayerLoggedGuard>
  );
}
