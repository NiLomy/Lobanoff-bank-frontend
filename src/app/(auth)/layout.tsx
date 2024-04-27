import React from "react";
import { MainLogo } from "@/components/Icon";
import styles from "./layout.module.scss";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.wrapper}>
      <MainLogo />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
