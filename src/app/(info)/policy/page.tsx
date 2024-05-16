import React from "react";
import styles from "./page.module.scss";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

export default function Policy() {
  return (
    <div className={styles.c}>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <div className={styles.title}>Privacy policy</div>
          <div className={styles.content}>
            <br />
            <p>
              This Privacy Policy describes how Religious Studying (&#34;we&#34;
              &#34;us&#34; or &#34;our&#34;) collects, uses, and protects the
              personal information of users (&#34;you&#34; or &#34;users&#34;)
              who access or use this platform. By using our services, you
              consent to the practices described in this Privacy Policy.
            </p>
            <br />
            <h2>1. Information Collection</h2>
            <p>
              We may collect personal information from users, including but not
              limited to:
            </p>
            <ul>
              <li>Full name</li>
              <li>Passport data</li>
              <li>Email address</li>
              <li>User preferences and settings</li>
            </ul>
            <br />
            <h2>2. Information Use</h2>
            <h4>2.1 Purpose</h4>
            <p>We use the collected information for the following purposes:</p>
            <ul>
              <li>To provide and improve our services</li>
              <li>To personalize user experience</li>
              <li>To communicate with users</li>
              <li>To prevent fraud and enhance security</li>
            </ul>
            <br />
            <h4>2.2 Legal Requirements:</h4>
            <p>
              We may disclose your information if required by law, court order,
              or government regulation, or if we believe such disclosure is
              necessary to protect our rights, user&#39;s safety, or the
              security of our platform.
            </p>
            <br />
            <h2>3. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your information from unauthorized access, disclosure,
              alteration, or destruction. However, please note that no method of
              transmission over the internet or electronic storage is 100%
              secure, and we cannot guarantee absolute security.
            </p>
            <br />
            <h2>4. User Rights</h2>
            <p>
              You have the right to access and modify your personal information
              through your account settings. If you require assistance, please
              contact us using the information provided below.
            </p>
            <br />
            <h2>6. Updates and Contact</h2>
            <h4>6.1 Updates:</h4>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any material changes by posting the revised Privacy
              Policy on our platform. We encourage you to review this policy
              periodically.
            </p>
            <h4>6.2 Contact us:</h4>
            <p>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or the handling of your personal information,
              please contact us at lobanoff-bank@gmail.com
            </p>
            <br />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
