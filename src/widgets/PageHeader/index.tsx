import Link from "next/link";
import { TITLE } from "@/constants";
import styles from "./index.module.css";

export function PageHeader() {
  return (
    <header>
      <h1 className={styles.root}>
        <Link href="/" className={styles.link}>
          {TITLE}
        </Link>
      </h1>
    </header>
  );
}
