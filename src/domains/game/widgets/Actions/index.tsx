import { usePlayerContext } from "@/domains/player/hooks";

export function GameActions() {
  const { logOut } = usePlayerContext();

  return (
    <button type="button" onClick={logOut}>
      Log out
    </button>
  );
}
