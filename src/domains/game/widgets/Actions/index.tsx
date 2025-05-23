import { RefreshCcw, Medal, LogOut } from "lucide-react";
import { usePlayerContext } from "@/domains/player/hooks";
import { GameActionButton } from "../ActionButton";
import styles from "./index.module.css";

export function GameActions() {
  const { logOut } = usePlayerContext();

  return (
    <div className={styles.root}>
      <GameActionButton icon={<RefreshCcw />} label="New game" />
      <GameActionButton icon={<Medal />} label="Scoreboard" />
      <GameActionButton icon={<LogOut />} label="Logout" onClick={logOut} />
    </div>
  );
}
