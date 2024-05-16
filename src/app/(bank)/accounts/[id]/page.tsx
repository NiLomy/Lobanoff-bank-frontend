"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.scss";
import classNames from "classnames/bind";
import { money } from "@/utils";
import { Currency } from "@/components/Currency/Currency";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AccountItemType } from "@/types";
import { RequisitesType } from "@/types/RequisitesType";
import { Loading } from "@/components/Loading/Loading";
import { useUser } from "@/stores";
import { getAccountInfo } from "@/api";
import { getRequisitesByAccountId } from "@/api/requisites";
import { createCard } from "@/api/cards";
import { useRouter } from "next/navigation";

const cx = classNames.bind(styles);
export default function Accounts({ params }: { params: { id: string } }) {
  const [info, setInfo] = useState<AccountItemType | null>(null);
  const [req, setReq] = useState<RequisitesType | null>(null);
  const router = useRouter();
  const { access } = useUser();
  useEffect(() => {
    const get = async () => {
      if (!access) return;
      const i = await getAccountInfo(access, params.id);
      const r = await getRequisitesByAccountId(params.id, access);
      if (i) setInfo(i);
      if (r) setReq(r);
    };
    get();
  }, [access]);

  const handleCreate = async () => {
    if (!access) return;
    const q = await createCard(
      {
        accountId: params.id,
      },
      access,
    );
    if (q) {
      router.push("/cards/" + q.id);
    }
  };

  if (req === null || info === null) {
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
          <Link href="/my" className={styles.back}>
            <ChevronLeft size={20} />
          </Link>
          <div className={styles.name}>{info.name}</div>

          <div className={styles.money}>
            {money(info.deposit)}{" "}
            <Currency cur={info.currency.icon || info.currency.name} />
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={styles.left__top}>
              <div className={styles.title}>Cards</div>
              <button className={styles.new} onClick={() => handleCreate()}>
                New card
              </button>
            </div>
            {info.cards.map((e) => {
              return (
                <Link
                  key={e.id}
                  href={"/cards/" + e.id}
                  className={styles.card}
                >
                  <div className={styles.num}>{e.number.slice(0, 4)}</div>
                  <ChevronRight size={16} />
                </Link>
              );
            })}
          </div>
          <div className={styles.right}>
            <div className={styles.title}>Details</div>
            <div className={styles.row}>
              <div className={styles.category}>Payee</div>
              <div className={styles.value}>
                {req.payee.lastname +
                  " " +
                  req.payee.name +
                  " " +
                  req.payee.patronymic}
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.category}>The account of the payee</div>
              <div className={styles.value}>{req.accountNumber}</div>
            </div>
            <div className={styles.row}>
              <div className={styles.category}>Purpose of payment</div>
              <div className={styles.value}>
                Transfer of funds. VAT is not subject to
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.category}>Bank identification code</div>
              <div className={styles.value}>{req.code}</div>
            </div>
            <div className={styles.row}>
              <div className={styles.category}>The recipient bank</div>
              <div className={styles.value}>{req.bankName}</div>
            </div>
            <div className={styles.row}>
              <div className={styles.category}>Correspondent account</div>
              <div className={styles.value}>{req.corrAccount}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
