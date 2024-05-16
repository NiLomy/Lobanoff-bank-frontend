import styles from "./Footer.module.scss";
import { MainLogo } from "@/components/Icon";
import Link from "next/link";

export function Footer() {
  return (
    <div className={styles.wrapper}>
      <Link href="/my">
        <MainLogo />
      </Link>
      <div className={styles.line}>
        <Link href="/about" className={styles.link}>
          About us
        </Link>
        <Link href="/conditions" className={styles.link}>
          Terms & Conditions
        </Link>
        <Link href="/policy" className={styles.link}>
          Privacy policy
        </Link>
        <div className={styles.text}>lobanoff-bank@gmail.com</div>
        <div className={styles.text}>+7 800 555 35 35</div>
      </div>
      <div className={styles.copy}>
        © 2024 Copyright: Lobanoff bank All rights reserved
      </div>
    </div>
  );
}
