"use client";
import React from "react";
import styles from "./Footer.module.scss";
import { MainLogo } from "@/components/Icon";

export function Footer() {
    return (
        <div className={styles.wrapper}>
            <section className="">
                <div className={styles.footerColumn}>
                    <div className="">
                        <div className="">
                            <h6 className="">
                                <a href="/">
                                    <MainLogo/>
                                </a>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className={styles.block}>
                    <div className={styles.footerRow}>
                        <div className="">
                            <h6 className="">
                                Help
                            </h6>
                            <p>
                                <a href="/about">About us</a>
                            </p>
                            <p>
                                <a href="/conditions">Terms & Conditions</a>
                            </p>
                            <p>
                                <a href="/policy">Privacy policy</a>
                            </p>
                        </div>
                        <div className="">
                            <h6 className="">Contact</h6>
                            <p>
                                lobanoff-bank@gmail.com
                            </p>
                            <p>+7 800 555 35 35</p>
                        </div>
                    </div>
                </div>
                <div className={styles.copyrightBlock}>
                    © 2024 Copyright:
                    <a href="/"> Lobanoff bank</a>
                    <span>   All rights reserved</span>
                </div>
            </section>
        </div>
    );
}
