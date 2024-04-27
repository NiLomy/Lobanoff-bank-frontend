import React from "react";
import styles from "./page.module.scss";
import classNames from "classnames/bind";
import { money } from "@/utils";
import { Currency } from "@/components/Currency/Currency";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SystemCardIcon } from "@/components/Icon";

const cx = classNames.bind(styles);
export default function Accounts() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <div className={styles.top}>
          <Link href="/my" className={styles.back}>
            <ChevronLeft size={20} />
          </Link>
          <div className={styles.name}>я только начал</div>

          <div className={styles.money}>
            {money(1200)} <Currency cur="₽" />
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={styles.left__top}>
              <div className={styles.title}>Cards</div>
              <Link href="/cards/create" className={styles.new}>
                New card
              </Link>
            </div>

            <Link href={"/cards/card1"} className={styles.card}>
              <div className={styles.num}>5333</div>
              <div className={styles.system}>mastercard</div>
              <ChevronRight size={16} />
            </Link>
            <Link href={"/cards/card1"} className={styles.card}>
              <div className={styles.num}>6767</div>
              <div className={styles.system}>visa</div>
              <ChevronRight size={16} />
            </Link>
          </div>
          <div className={styles.right}>
            <div className={styles.title}>Details</div>
            <div className={styles.row}>
              <div className={styles.category}>Payee</div>
              <div className={styles.value}>Lobanov Nikita Mikhailovich</div>
            </div>
            <div className={styles.row}>
              <div className={styles.category}>The account of the payee</div>
              <div className={styles.value}>40817810600009756899</div>
            </div>
            <div className={styles.row}>
              <div className={styles.category}>Purpose of payment</div>
              <div className={styles.value}>
                Transfer of funds. VAT is not subject to
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.category}>Bank identification code</div>
              <div className={styles.value}>874750232</div>
            </div>
            <div className={styles.row}>
              <div className={styles.category}>The recipient bank</div>
              <div className={styles.value}>Lobanoff bank</div>
            </div>
            <div className={styles.row}>
              <div className={styles.category}>Correspondent account</div>
              <div className={styles.value}>30101810347784028232</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
