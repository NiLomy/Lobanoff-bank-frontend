"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.scss";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import classNames from "classnames/bind";
import { TransactionStats } from "@/components/TransactionStats/TransactionStats";
import { TransactionList } from "@/components/TransactionList/TransactionList";
import { useUser } from "@/stores";
import { TransactionType } from "@/types/TransactionType";
import {
  getTransactionsExpenses,
  getTransactionsReceipts,
} from "@/api/transactions";
import { Loading } from "@/components/Loading/Loading";
import { CategoryType } from "@/types/CategoryType";
import { getAllCategories } from "@/api/categories";
import { useRouter } from "next/navigation";

const cx = classNames.bind(styles);
export default function Transactions() {
  const { id, access } = useUser();
  const [receipts, setReceipts] = useState<TransactionType[]>([]);
  const [expenses, setExpenses] = useState<TransactionType[]>([]);
  const [categories, setCategories] = useState<CategoryType | null>(null);
  const [loading, setLoading] = useState(true);
  const [one, setOne] = useState(true);
  console.log(receipts, expenses);
  const router = useRouter();
  useEffect(() => {
    const get = async () => {
      if (!id || !access) return;
      const r = await getTransactionsReceipts(id, access);
      const e = await getTransactionsExpenses(id, access);
      const c = await getAllCategories(access);
      if (c) setCategories(c);
      if (r) setReceipts(r);
      if (e) setExpenses(e);
      if (e && r) setOne(true);
      if (!e && r) setOne(false);
      if (c !== null) {
        setLoading(false);
      } else {
        router.push("/my");
      }
    };
    get();
  }, [access]);

  if (loading || !categories) {
    return (
      <div className={styles.center}>
        <Loading />
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <div className={styles.top}>
          <div className={styles.top__block}>
            <div className={styles.calendar}>
              <button
                className={cx(styles.left, styles.calendar__btn)}
                disabled={true}
              >
                <ChevronLeft size={16} />
              </button>
              <div className={styles.middle}>
                <Calendar size={16} />
                May 2024
              </div>
              <button
                className={cx(styles.right, styles.calendar__btn)}
                disabled={true}
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/*<button className={styles.btn}>All time</button>*/}
          </div>
          <div className={styles.top__block}>
            {expenses.length > 0 && (
              <button
                className={cx(styles.btn, { btn__active: one })}
                onClick={() => setOne(true)}
              >
                Expenses
              </button>
            )}
            {receipts.length > 0 && (
              <button
                className={cx(styles.btn, { btn__active: !one })}
                onClick={() => setOne(false)}
              >
                Receipts
              </button>
            )}
          </div>
        </div>
        <TransactionStats
          list={one ? expenses : receipts}
          categories={categories}
        />
        <TransactionList
          list={one ? expenses : receipts}
          categories={categories}
          bool={one}
        />
      </div>
    </div>
  );
}
