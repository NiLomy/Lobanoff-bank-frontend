"use client";
import { HomeIconLobanoff, HomeIconTinkoff, MainLogo } from "@/components/Icon";
import Link from "next/link";
import styles from "./page.module.scss";
import classNames from "classnames/bind";
import React from "react";
const cx = classNames.bind(styles);
export default function Home() {
  const [animate, setAnimate] = React.useState(false);
  return (
    <>
      <div
        className={cx(styles.overlay, {
          animate,
        })}
        onClick={() => setAnimate(true)}
      >
        <h1 className={styles.title}>Welcome</h1>
        <p className={styles.action}>Press click to continue</p>
      </div>
      <div className={styles.wrapper}>
        <div className={cx(styles.icons, { animicons: animate })}>
          <HomeIconTinkoff className={styles.tinkoff} />
          <HomeIconLobanoff className={styles.lobanoff} />
        </div>
        <div className={cx(styles.text, { anitext: animate })}>
          <span className={styles.ttext}>Он такой один</span>
          <span className={styles.ltext}>Теперь нас таких двое</span>
        </div>
        <div className={styles.btns}>
          <Link href="/register" className={styles.btn}>
            Register
          </Link>
          <Link href="/login" className={styles.main}>
            Login
          </Link>
        </div>
      </div>
    </>
  );
}
