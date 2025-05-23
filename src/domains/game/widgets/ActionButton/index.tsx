import styles from "./index.module.css";

type Props = {
  icon: React.ReactNode;
  label: React.ReactNode;
  onClick?: () => void;
};

export function GameActionButton({ icon, label, onClick }: Props) {
  return (
    <button className={styles.root} type="button" onClick={onClick}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.caption}>{label}</div>
    </button>
  );
}
