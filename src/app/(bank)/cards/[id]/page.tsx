"use client";
import styles from "./page.module.scss";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Loading } from "@/components/Loading/Loading";
import { useUser } from "@/stores";
import { getCardById } from "@/api/cards";
import { CardType } from "@/types";

function reformatNumber(f: string) {
  let ans = "";
  let i = 0;
  while (i !== 16) {
    if (i === 4) ans += " ";
    if (i === 8) ans += " ";
    if (i === 12) ans += " ";
    ans += f[i];
    i++;
  }
  return ans;
}

export default function Cards({ params }: { params: { id: string } }) {
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState<CardType | null>(null);
  const { access } = useUser();
  useEffect(() => {
    const get = async () => {
      if (!access) return;
      const i = await getCardById(params.id, access);
      if (i) setInfo(i);
    };
    get();
  }, [access]);

  if (info === null) {
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
          <div className={styles.left}>
            <Link href="/my" className={styles.back}>
              <ChevronLeft size={20} />
            </Link>
            <div className={styles.title}>Card info</div>
          </div>
          <button
            className={styles.show}
            onClick={() => {
              setShow(true);
              setTimeout(() => {
                setShow(false);
              }, 2000);
            }}
          >
            show
          </button>
        </div>
        <div className={styles.card}>
          <div className={styles.line}>
            <div className={styles.value}>
              {show
                ? reformatNumber(info.number)
                : "**** **** **** " + info.number.slice(12)}
            </div>
          </div>
          <div className={styles.line}>
            <div className={styles.value}>
              {show ? info.expiration : "** / **"}
            </div>
            <div className={styles.value}>{show ? info.cvv : "***"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
