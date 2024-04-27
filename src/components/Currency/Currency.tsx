import styles from "./Currency.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
export function Currency({ cur, blue }: { cur: string; blue?: boolean }) {
  return (
    <span
      className={cx(styles.wrapper, {
        blue,
      })}
    >
      {cur}
    </span>
  );
}
