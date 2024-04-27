import React from "react";
import styles from "./TransactionStats.module.scss";
import { money } from "@/utils";
import { Currency } from "@/components/Currency/Currency";

export function TransactionStats() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.block}>
          <strong>Total</strong>
          <span>
            {money(2300)} <Currency cur={"$"} />
          </span>
          <span>
            {money(52)} <Currency cur={"₽"} />
          </span>
        </div>
        <div className={styles.block}>
          <strong>Amount</strong>
          <span>{money(120)} transactions</span>
        </div>
      </div>

      <div className={styles.table}>
        <div className={styles.left}>
          <div className={styles.row}>
            <div className={styles.block}>
              <img
                className={styles.icon}
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNvaW5zIj48Y2lyY2xlIGN4PSI4IiBjeT0iOCIgcj0iNiIvPjxwYXRoIGQ9Ik0xOC4wOSAxMC4zN0E2IDYgMCAxIDEgMTAuMzQgMTgiLz48cGF0aCBkPSJNNyA2aDF2NCIvPjxwYXRoIGQ9Im0xNi43MSAxMy44OC43LjcxLTIuODIgMi44MiIvPjwvc3ZnPg=="
              />
              <div className={styles.title}>Finance</div>
            </div>
            <div className={styles.percent}>52%</div>
            <div className={styles.money}>
              {money(20000)} <Currency cur="$" />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.block}>
              <img
                className={styles.icon}
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNvaW5zIj48Y2lyY2xlIGN4PSI4IiBjeT0iOCIgcj0iNiIvPjxwYXRoIGQ9Ik0xOC4wOSAxMC4zN0E2IDYgMCAxIDEgMTAuMzQgMTgiLz48cGF0aCBkPSJNNyA2aDF2NCIvPjxwYXRoIGQ9Im0xNi43MSAxMy44OC43LjcxLTIuODIgMi44MiIvPjwvc3ZnPg=="
              />
              <div className={styles.title}>Finance</div>
            </div>
            <div className={styles.percent}>32%</div>
            <div className={styles.money}>
              {money(1200)} <Currency cur="$" />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.block}>
              <img
                className={styles.icon}
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNvaW5zIj48Y2lyY2xlIGN4PSI4IiBjeT0iOCIgcj0iNiIvPjxwYXRoIGQ9Ik0xOC4wOSAxMC4zN0E2IDYgMCAxIDEgMTAuMzQgMTgiLz48cGF0aCBkPSJNNyA2aDF2NCIvPjxwYXRoIGQ9Im0xNi43MSAxMy44OC43LjcxLTIuODIgMi44MiIvPjwvc3ZnPg=="
              />
              <div className={styles.title}>Finance</div>
            </div>
            <div className={styles.percent}>16%</div>
            <div className={styles.money}>
              {money(200)} <Currency cur="$" />
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.line}>
            <div className={styles.real} style={{ width: "32%" }}></div>
          </div>
          <div className={styles.line}>
            <div className={styles.real} style={{ width: "16%" }}></div>
          </div>
          <div className={styles.line}>
            <div className={styles.real} style={{ width: "52%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
