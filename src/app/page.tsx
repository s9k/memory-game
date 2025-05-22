import styles from "./page.module.css";
import { PlayerLoginForm } from "@/domains/player/widgets";

export default function LoginPage() {
  return (
    <div className={styles.root}>
      <PlayerLoginForm />
    </div>
  );
}
