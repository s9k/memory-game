import { photoApi } from "@/domains/photo/api";
import { GameRootClient } from "./Client";

export async function GameRoot() {
  const photosPromise = photoApi.fetchList();

  return <GameRootClient photosPromise={photosPromise} />;
}
