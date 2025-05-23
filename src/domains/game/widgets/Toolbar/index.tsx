import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
};

export function GameToolbar({ children }: Props) {
  return <div className={styles.root}>{children}</div>;
}
