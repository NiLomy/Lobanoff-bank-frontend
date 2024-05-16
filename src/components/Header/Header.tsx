"use client";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { MainLogo } from "@/components/Icon";
import Link from "next/link";
import classNames from "classnames/bind";
import { usePathname } from "next/navigation";
import { useUser } from "@/stores";
import { getUser } from "@/api";
import { Loading } from "@/components/Loading/Loading";
const cx = classNames.bind(styles);

const list: { link: string; title: string }[] = [
  { link: "/my", title: "Home" },
  { link: "/transactions", title: "Transactions" },
  { link: "/payments", title: "Payments" },
  { link: "/settings", title: "Settings" },
];
export function Header() {
  const path = usePathname();
  const { id, access } = useUser();
  const [name, setName] = useState("");
  useEffect(() => {
    const get = async () => {
      if (!id || !access) return;
      const u = await getUser(access, id);
      if (u) setName(u.name);
    };
    get();
  }, [access]);
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
        <div className={styles.user}>{name ? name : <Loading />}</div>
      </div>
    </div>
  );
}
