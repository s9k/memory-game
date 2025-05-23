import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
};

export function GameActions({ children }: Props) {
  return <div className={styles.root}>{children}</div>;
}
