import { JSX } from "react";
import styles from "./index.module.css";

type Props = Omit<JSX.IntrinsicElements["button"], "className">;

export function Button({ type = "button", ...props }: Props) {
  return <button type={type} className={styles.root} {...props} />;
}
