import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
};

export function PageContainer({ children }: Props) {
  return <main className={styles.root}>{children}</main>;
}
