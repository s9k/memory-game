import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>404</h2>
      <p>This page could not be found</p>
    </div>
  );
}
