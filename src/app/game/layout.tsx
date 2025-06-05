import { ReactNode } from "react";
import { PlayerLoggedInGuard } from "@/domains/player/widgets";
import { GameRoot } from "@/domains/game/widgets";

type Props = {
  children: ReactNode;
};

export default async function GameLayout({ children }: Props) {
  return (
    <PlayerLoggedInGuard>
      <GameRoot />
      {children}
    </PlayerLoggedInGuard>
  );
}
