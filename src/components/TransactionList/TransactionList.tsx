import React from "react";
import styles from "./TransactionList.module.scss";
import { money } from "@/utils";
import { Currency } from "@/components/Currency/Currency";

export function TransactionList() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <div className={styles.date}>Yesterday</div>
        <div className={styles.transaction}>
          <div className={styles.left}>
            <div className={styles.left__top}>
              <div className={styles.account}>я только начал</div>
              <div className={styles.card}>5652</div>
            </div>
            <div className={styles.left__bottom}>Пятерочка</div>
          </div>
          <div className={styles.right}>
            <div className={styles.right__top}>
              -{money(1999)} <Currency cur="$" />
            </div>
            <div className={styles.right__bottom}>
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJhbmtub3RlIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTIiIHg9IjIiIHk9IjYiIHJ4PSIyIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMiIvPjxwYXRoIGQ9Ik02IDEyaC4wMU0xOCAxMmguMDEiLz48L3N2Zz4=" />
              <span>Cash</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
