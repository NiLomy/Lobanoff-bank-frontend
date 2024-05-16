import React, { ReactNode, useState } from "react";
import styles from "./SelectAccount.module.scss";
import { ChevronDown } from "lucide-react";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
export function Select({
  SelectedItem,
  ListItem,
  Inputs,
}: {
  SelectedItem: ReactNode;
  ListItem: ReactNode;
  Inputs: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div
        className={cx(styles.item, styles.item__select, {
          item__select_open: open,
        })}
        onClick={() => setOpen(!open)}
      >
        {SelectedItem}
      </div>
      <div
        className={cx(styles.popup, {
          popup__open: open,
        })}
      >
        {ListItem}
      </div>

      {Inputs}
    </div>
  );
}
