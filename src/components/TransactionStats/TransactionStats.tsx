"use client";
import React, { useEffect, useState } from "react";
import styles from "./TransactionStats.module.scss";
import { money } from "@/utils";
import { Currency } from "@/components/Currency/Currency";
import { TransactionType } from "@/types/TransactionType";
import { CategoryType } from "@/types/CategoryType";
type StatsType = {
  category: string | null;
  icon: string | null;
  percent: number;
  amount: number;
};
export function TransactionStats({
  list,
  categories,
}: {
  list: TransactionType[];
  categories: CategoryType;
}) {
  const [stats, setStats] = useState<StatsType[]>([]);

  useEffect(() => {
    const map: {
      [key: string]: {
        icon: string | null;
        percent: number;
        amount: number;
      };
    } = {};
    let sum = 0;
    for (const item of list) {
      sum += Math.abs(item.amount);
      const cat = item.category === null ? "null" : item.category;
      if (map[cat]) {
        map[cat].amount += item.amount;
      } else {
        map[cat] = {
          icon: categories[cat] || null,
          percent: 0,
          amount: item.amount,
        };
      }
    }
    const b: StatsType[] = [];
    for (const key in map) {
      map[key].percent = +((Math.abs(map[key].amount) / sum) * 100).toFixed(2);
      b.push({
        category: key === "null" ? null : key,
        icon: map[key].icon,
        percent: map[key].percent,
        amount: map[key].amount,
      });
    }
    setStats(b);
  }, [list]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.block}>
          <strong>Total</strong>
          {Array.from(new Set(list.map((e) => e.currency.name))).map((e) => {
            const item = list.filter((q) => q.currency.name === e);
            if (item.length > 0) {
              return (
                <span key={e}>
                  {money(
                    item.reduce(
                      (previousValue, currentValue) =>
                        currentValue.amount + previousValue,
                      0,
                    ),
                  )}

                  <Currency
                    cur={item[0].currency.icon || item[0].currency.name}
                  />
                </span>
              );
            }
          })}
        </div>
        <div className={styles.block}>
          <strong>Amount</strong>
          <span>{money(list.length)} transactions</span>
        </div>
      </div>

      <div className={styles.table}>
        <div className={styles.left}>
          {stats.map((e) => {
            return (
              <div key={e.category} className={styles.row}>
                <div className={styles.block}>
                  {e.icon && <img className={styles.icon} src={e.icon} />}
                  <div className={styles.title}>
                    {e.category === null ? "null" : e.category}
                  </div>
                </div>
                <div className={styles.percent}>{e.percent}%</div>
                <div className={styles.money}>{money(e.amount)}</div>
              </div>
            );
          })}
        </div>
        <div className={styles.right}>
          {stats.map((e) => {
            return (
              <div key={e.category} className={styles.line}>
                <div
                  className={styles.real}
                  style={{ width: e.percent + "%" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
