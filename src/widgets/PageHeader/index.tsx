import { TITLE } from "@/constants";
import styles from "./index.module.css";

export function PageHeader() {
  return (
    <header>
      <h1 className={styles.root}>{TITLE}</h1>
    </header>
  );
}
