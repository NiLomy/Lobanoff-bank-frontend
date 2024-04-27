"use client";
import React from "react";
import styles from "./Header.module.scss";
import { MainLogo } from "@/components/Icon";
import Link from "next/link";
import classNames from "classnames/bind";
import { usePathname } from "next/navigation";
const cx = classNames.bind(styles);

const list: { link: string; title: string }[] = [
  { link: "/my", title: "Home" },
  { link: "/transactions", title: "Transactions" },
  { link: "/payments", title: "Payments" },
  { link: "/settings", title: "Settings" },
];
export function Header() {
  const path = usePathname();
  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <MainLogo />
        <nav className={styles.nav}>
          {list.map((e) => {
            return (
              <Link
                key={e.link}
                href={e.link}
                className={cx(styles.item, { active: path === e.link })}
              >
                {e.title}
              </Link>
            );
          })}
        </nav>
        <div className={styles.user}>Никита</div>
      </div>
    </div>
  );
}
