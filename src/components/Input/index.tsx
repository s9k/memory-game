import { JSX } from "react";
import styles from "./index.module.css";

type Props = Omit<JSX.IntrinsicElements["input"], "className">;

export function Input(props: Props) {
  return <input className={styles.root} {...props} />;
}
