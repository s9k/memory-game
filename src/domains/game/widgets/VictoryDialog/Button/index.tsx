import styles from "./index.module.css";

type Props = {
  icon: React.ReactNode;
  label: React.ReactNode;
  onClick?: () => void;
  autoFocus?: boolean;
};

export function Button({ icon, label, onClick }: Props) {
  return (
    <button className={styles.root} type="button" onClick={onClick}>
      {label}
      <div className={styles.icon}>{icon}</div>
    </button>
  );
}
