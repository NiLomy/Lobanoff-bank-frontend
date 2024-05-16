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
          <div className={styles.title}>Terms & Conditions</div>
          <div className={styles.content}>
            <br />
            <p>
              Please read these Terms and Conditions (&#34;Terms&#34;) carefully
              before accessing or using Religious studying (&#34;we,&#34;
              &#34;us,&#34; or &#34;our&#34;). These Terms apply to all users
              (&#34;you&#34; or &#34;users&#34;) of the Platform. By accessing
              or using the Platform, you agree to be bound by these Terms. If
              you do not agree with any part of these Terms, you may not access
              or use the Platform.
            </p>
            <br />
            <h2>1. User Responsibilities</h2>
            <h4>1.1 Account Registration</h4>
            <p>
              You are responsible for maintaining the confidentiality of your
              account credentials and for all activities that occur under your
              account. You agree to provide accurate, current, and complete
              information during the registration process.
            </p>
            <h4>1.2 Prohibited Activities</h4>
            <p>You agree not to engage in any of the following activities:</p>
            <ul>
              <li>Violating any applicable laws or regulations</li>
              <li>
                Infringing upon the intellectual property rights of others
              </li>
              <li>
                Distributing malware or engaging in hacking or unauthorized
                access
              </li>
              <li>
                Interfering with or disrupting the Platform&#39;s functionality
                or security
              </li>
              <li>
                Engaging in any activity that may cause harm to the Platform or
                other users
              </li>
            </ul>
            <h4>1.3 User Content</h4>
            <p>
              You are solely responsible for the content you upload, post, or
              transmit through the Platform. We respect your privacy and will
              not share your user content with any third parties, except as
              outlined in our Privacy Policy or as required by law.
            </p>
            <p>
              Please note that while we take measures to protect your user
              content, we do not guarantee absolute security. You are
              responsible for taking appropriate measures to safeguard your own
              user content and information.
            </p>
            <br />
            <h2>2. Intellectual Property</h2>
            <h4>2.1 Platform Ownership</h4>
            <p>
              The Platform, including its design, code, features, and all
              related intellectual property rights, is owned and protected by
              copyright and other applicable laws.
            </p>
            <h4>2.2 User License</h4>
            <p>
              Subject to compliance with these Terms, we grant you a limited,
              non-exclusive, non-transferable, revocable license to access and
              use the Platform for your internal business purposes.
            </p>
            <h4>2.3 Trademarks</h4>
            <p>
              All trademarks, service marks, logos, and trade names displayed on
              the Platform are the property of their respective owners. You may
              not use any trademarks without the prior written consent of the
              respective owners.
            </p>
            <br />
            <h2>3. Limitation of Liability</h2>
            <h4>3.1 Disclaimer</h4>
            <p>
              The Platform is provided on an &#34;as is&#34; and &#34;as
              available&#34; basis, without warranties of any kind, whether
              express or implied. We do not guarantee that the Platform will be
              error-free, uninterrupted, or free from viruses or other harmful
              components.
            </p>
            <br />
            <h4>3.2 Indemnification</h4>
            <p>
              You agree to indemnify, defend, and hold us harmless from and
              against any claims, damages, losses, liabilities, costs, and
              expenses arising out of or related to your use of the Platform,
              violation of these Terms, or infringement of any rights of third
              parties.
            </p>
            <h4>3.3 Limitation of Liability</h4>
            <p>
              In no event shall we be liable for any indirect, incidental,
              special, consequential, or punitive damages arising out of or in
              connection with your use of the Platform or these Terms, whether
              based on warranty, contract, tort, or any other legal theory.
            </p>
            <br />
            <h2>4. Termination</h2>
            <p>
              We may, in our sole discretion, suspend or terminate your access
              to the Platform at any time, without prior notice or liability,
              for any reason, including, but not limited to, a breach of these
              Terms, violation of applicable laws or regulations, or if we
              determine that your use of the Platform poses a risk to the
              security, integrity, or functionality of the Platform or to other
              users.
            </p>
            <p>
              Upon termination, your right to access and use the Platform will
              immediately cease, and you must cease all use of the Platform. Any
              provisions of these Terms that by their nature should survive
              termination shall survive termination, including, but not limited
              to, intellectual property rights, disclaimer of warranties,
              limitation of liability, indemnification, and dispute resolution
              provisions.
            </p>
            <br />
            <h2>6. Governing Laws and Jurisdiction</h2>
            <p>
              These Terms and any dispute arising out of or in connection with
              these Terms, including any disputes regarding their existence,
              validity, or termination, shall be governed by and construed in
              accordance with the laws of India. Any legal actions or
              proceedings relating to these Terms shall be exclusively brought
              in the courts located in India, and you hereby consent to the
              personal jurisdiction of such courts.
            </p>
            <br />
            <h2>7. Amendments to the Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If we make any material changes to these
              Terms, we will notify you by posting an updated version on the
              Platform or by sending an email to the email address associated
              with your account. Your continued use of the Platform after any
              such changes constitutes your acceptance of the revised Terms.
              Therefore, we recommend that you review these Terms periodically
              for any updates.
            </p>
            <br />
            <h2>8. Severability</h2>
            <p>
              If any provision of these Terms is found to be invalid, illegal,
              or unenforceable, the remaining provisions shall remain in full
              force and effect. The invalid or unenforceable provision shall be
              deemed modified to the extent necessary to make it valid, legal,
              and enforceable while preserving its intent, or if not possible,
              severed from these Terms, and the remaining provisions shall
              continue to be binding and enforceable.
            </p>
            <br />
            <h2>9. Entire Agreement</h2>
            <p>
              These Terms, together with any additional terms and conditions or
              policies referenced herein or provided by us, constitute the
              entire agreement between you and Religious studying relating to
              the subject matter herein and supersede any prior understandings
              or agreements, whether oral or written.
            </p>
            <br />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
