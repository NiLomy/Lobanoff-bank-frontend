import React from "react";
import { Header } from "@/components/Header/Header";
import styles from "./layout.module.scss";
import { Access } from "@/components/Access/Access";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Access />
    </div>
  );
}
