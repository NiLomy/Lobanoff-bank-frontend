"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.scss";
import { AccountItemType } from "@/types";
import { SystemCardIcon } from "@/components/Icon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { money } from "@/utils";
import { Currency } from "@/components/Currency/Currency";
import { useUser } from "@/stores";
import { getAllUserAccounts } from "@/api";
import { Loading } from "@/components/Loading/Loading";

export default function MyBank() {
  const router = useRouter();
  const { id, access } = useUser();
  const [loading, setLoading] = useState(true);
  const [accounts, setAccounts] = useState<AccountItemType[]>([]);

  useEffect(() => {
    const get = async () => {
      if (!access || !id) return;
      const a = await getAllUserAccounts(access, id);
      if (a) {
        setAccounts(a);
        setLoading(false);
      }
    };
    get();
  }, [access]);

  if (loading) {
    return (
      <div className={styles.center}>
        <Loading />
      </div>
    );
  }
  console.log(accounts);

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
                  {money(e.deposit)}
                  <Currency cur={e.currency.icon || e.currency.name} />
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
                        <span>{card.number.slice(0, 4)}</span>
                      </div>
                    );
                  })}
                </div>
                <span className={styles.tip}>{e.currency.icon}</span>
              </Link>
            );
          })}
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
}
