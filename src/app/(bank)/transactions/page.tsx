import React from "react";
import styles from "./page.module.scss";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import classNames from "classnames/bind";
import { TransactionStats } from "@/components/TransactionStats/TransactionStats";
import { TransactionList } from "@/components/TransactionList/TransactionList";

const cx = classNames.bind(styles);
export default function Transactions() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <div className={styles.top}>
          <div className={styles.top__block}>
            <div className={styles.calendar}>
              <button className={cx(styles.left, styles.calendar__btn)}>
                <ChevronLeft size={16} />
              </button>
              <div className={styles.middle}>
                <Calendar size={16} />
                March 2024
              </div>
              <button className={cx(styles.right, styles.calendar__btn)}>
                <ChevronRight size={16} />
              </button>
            </div>

            <button className={styles.btn}>All time</button>
          </div>
          <div className={styles.top__block}>
            <button className={cx(styles.btn, styles.btn__active)}>
              Expenses
            </button>
            <button className={styles.btn}>Receipts</button>
          </div>
        </div>
        <TransactionStats />
        <TransactionList />
      </div>
    </div>
  );
}
