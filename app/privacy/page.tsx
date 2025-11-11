import type { Metadata } from 'next';
import Header from '../components/Header';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy | ServiceNerdPro',
  description: 'Privacy Policy for ServiceNerdPro - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
        <h1>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last Updated: November 10, 2025</p>

        <section className={styles.section}>
          <h2>1. Introduction</h2>
          <p>
            ServiceNerdPro ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Information We Collect</h2>

          <h3>2.1 Personal Information</h3>
          <p>We collect information that you provide directly to us, including:</p>
          <ul>
            <li>Name and business name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Business information (industry, services, pain points)</li>
            <li>Payment information (processed securely through Stripe)</li>
          </ul>

          <h3>2.2 Automatically Collected Information</h3>
          <p>When you visit our website, we automatically collect certain information, including:</p>
          <ul>
            <li>IP address and browser type</li>
            <li>Device information and operating system</li>
            <li>Pages viewed and time spent on pages</li>
            <li>Referring website and navigation patterns</li>
            <li>Google Analytics data for site usage analysis</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Process your payments and manage subscriptions</li>
            <li>Send you service-related communications and updates</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Deliver onboarding materials and service deliverables</li>
            <li>Analyze website usage and optimize user experience</li>
            <li>Comply with legal obligations and prevent fraud</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Third-Party Services</h2>
          <p>We use the following third-party services that may collect and process your information:</p>

          <h3>4.1 Stripe</h3>
          <p>
            Payment processing is handled by Stripe. We do not store your full credit card information.
            Stripe's use of your information is governed by their{' '}
            <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
          </p>

          <h3>4.2 Supabase</h3>
          <p>
            We use Supabase for secure data storage of customer information and subscription details.
            Supabase's use of your information is governed by their{' '}
            <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
          </p>

          <h3>4.3 Resend</h3>
          <p>
            We use Resend for transactional email communications.
            Resend's use of your information is governed by their{' '}
            <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
          </p>

          <h3>4.4 Google Analytics</h3>
          <p>
            We use Google Analytics to understand how visitors use our website.
            Google's use of your information is governed by their{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Subscription data is retained for the duration of your active subscription plus any required retention period for financial records.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Your Rights</h2>
          <p>Depending on your location, you may have the following rights:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Object to or restrict certain processing of your information</li>
            <li>Request a copy of your information in a portable format</li>
            <li>Withdraw consent where we rely on consent for processing</li>
          </ul>
          <p>To exercise these rights, please contact us at the information provided below.</p>
        </section>

        <section className={styles.section}>
          <h2>8. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
          </p>
        </section>

        <section className={styles.section}>
          <h2>9. Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us.
          </p>
        </section>

        <section className={styles.section}>
          <h2>10. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section className={styles.section}>
          <h2>11. Contact Us</h2>
          <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
          <ul>
            <li>Email: privacy@servicenerdpro.com</li>
            <li>Website: servicenerdpro.com</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>12. California Privacy Rights</h2>
          <p>
            If you are a California resident, you have specific rights regarding your personal information under the California Consumer Privacy Act (CCPA). This includes the right to know what personal information we collect, the right to delete personal information, and the right to opt-out of the sale of personal information. We do not sell your personal information.
          </p>
        </section>

        <section className={styles.section}>
          <h2>13. European Privacy Rights</h2>
          <p>
            If you are located in the European Economic Area (EEA), you have certain rights under the General Data Protection Regulation (GDPR). This includes the right to access, rectify, erase, restrict processing, object to processing, and data portability. You also have the right to lodge a complaint with a supervisory authority.
          </p>
        </section>
        </div>
      </div>
    </>
  );
}
