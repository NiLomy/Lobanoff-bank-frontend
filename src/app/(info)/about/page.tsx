import React from "react";
import styles from "./page.module.scss";
import {Header} from "@/components/Header/Header";
import {Footer} from "@/components/Footer/Footer";

export default function About() {
    return (
        <><Header/>
            <div className={styles.wrapper}>
                <div className={styles.block}>
                    <div className={styles.title}>
                        About Lobanoff bank
                    </div>
                    <div className={styles.content}>
                        <br/>
                        <p>
                            Welcome to Lobanoff bank, where we are committed to providing exceptional financial services
                            to our clients. Despite the youth of our bank, we have already earned a reputation for
                            trust, reliability, and personalized attention.
                        </p>
                        <br/>
                        <p>
                            At Lobanoff bank, we understand that every client has unique financial needs and goals.
                            That&#39;s why we offer a wide range of banking products and services to meet those diverse
                            needs. Whether you&#39;re looking for a simple checking account, a mortgage for your dream
                            home, or investment advice for your retirement, our team of experienced professionals is
                            here to help you every step of the way.
                        </p>
                        <br/>
                        <p>
                            We believe in building strong relationships with our clients, based on open communication,
                            integrity, and respect. Our commitment to exceptional customer service has been the
                            cornerstone of our success, and we strive to exceed your expectations in every interaction.
                        </p>
                        <br/>
                        <p>
                            In addition to our focus on customer service, Lobanoff bank is also dedicated to giving back
                            to the communities we serve. Through various philanthropic initiatives and partnerships with
                            local organizations, we are actively involved in making a positive impact in the areas where
                            we live and work.
                        </p>
                        <br/>
                        <p>
                            Thank you for considering Lobanoff bank for your financial needs. We invite you to explore
                            our website to learn more about our products, services, and our team. We look forward to the
                            opportunity to serve you and help you achieve your financial goals.
                        </p>
                        <br/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
