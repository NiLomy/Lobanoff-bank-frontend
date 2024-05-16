import React from "react";
import styles from "./TransactionList.module.scss";
import { money } from "@/utils";
import { Currency } from "@/components/Currency/Currency";
import { TransactionType } from "@/types/TransactionType";
import { CategoryType } from "@/types/CategoryType";

export function TransactionList({
  list,
  categories,
  bool,
}: {
  list: TransactionType[];
  categories: CategoryType;
  bool: boolean;
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        {list.map((e) => {
          return (
            <div key={e.id} className={styles.transaction}>
              <div className={styles.left}>
                <div className={styles.account}>{e.from.name}</div>
                <div className={styles.left__bottom}>{e.to.name}</div>
              </div>
              <div className={styles.right}>
                <div className={styles.right__top}>
                  {bool ? "- " : ""}
                  {money(e.amount)}{" "}
                  <Currency cur={e.currency.icon || e.currency.name} />
                </div>
                {e.category && (
                  <div className={styles.right__bottom}>
                    {categories[e.category] && (
                      <img src={categories[e.category]} />
                    )}
                    <span>{e.category}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
