"use client";
import React from "react";
import styles from "./page.module.scss";
import { AccountType } from "@/types";
import { SystemCardIcon } from "@/components/Icon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { money } from "@/utils";
import { Currency } from "@/components/Currency/Currency";
export default function MyBank() {
  const router = useRouter();
  const accounts: AccountType[] = [
    {
      id: "account1",
      balance: 77,
      name: "я только начал",
      currency: "$",
      cards: [{ id: "card1", number: "7777", system: "mastercard" }],
    },
    {
      id: "account2",
      balance: 7778,
      name: "не стоим на месте",
      currency: "₽",
      cards: [
        { id: "card2", number: "7777", system: "visa" },
        { id: "card3", number: "7777", system: "piece" },
      ],
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <div className={styles.left}>
          <div className={styles.top}>
            <span className={styles.title}>Accounts</span>
            <Link href="/accounts/create" className={styles.create}>
              New account
            </Link>
          </div>
          {accounts.map((e) => {
            return (
              <Link
                href={"/accounts/" + e.id}
                key={e.id}
                className={styles.account}
              >
                <div className={styles.balance}>
                  {money(e.balance)}
                  <Currency cur={e.currency} />
                </div>
                <div className={styles.name}>{e.name}</div>
                <div className={styles.cards}>
                  {e.cards.map((card) => {
                    return (
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          router.push("/cards/" + card.id);
                        }}
                        key={card.id}
                        className={styles.card}
                      >
                        <span>{card.number}</span>
                        <SystemCardIcon
                          system={card.system}
                          className={styles.system}
                        />
                      </div>
                    );
                  })}
                </div>
                <span className={styles.tip}>{e.currency}</span>
              </Link>
            );
          })}
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
}
