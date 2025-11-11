import type { Metadata } from 'next';
import Header from '../components/Header';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Terms of Service | ServiceNerdPro',
  description: 'Terms of Service for ServiceNerdPro - Review our terms and conditions for using our services.',
};

export default function TermsOfService() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
        <h1>Terms of Service</h1>
        <p className={styles.lastUpdated}>Last Updated: November 10, 2025</p>

        <section className={styles.section}>
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using ServiceNerdPro's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Services Offered</h2>
          <p>
            ServiceNerdPro provides digital marketing, branding, and website design services for service-based businesses. We offer two subscription tiers:
          </p>
          <ul>
            <li><strong>Lite Plan ($397/month):</strong> Website design or redesign service</li>
            <li><strong>Pro Plan ($697/month):</strong> Comprehensive digital marketing including website design, branding, and ongoing marketing support</li>
          </ul>
          <p>
            Service deliverables and timelines are outlined in your subscription plan and onboarding materials.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Subscription and Payment Terms</h2>

          <h3>3.1 Billing</h3>
          <p>
            Subscriptions are billed monthly on a recurring basis. Payment is processed through Stripe on the date you subscribe and on the same day each subsequent month.
          </p>

          <h3>3.2 Payment Methods</h3>
          <p>
            We accept major credit cards and debit cards through Stripe. You authorize us to charge your payment method for all fees incurred.
          </p>

          <h3>3.3 Price Changes</h3>
          <p>
            We reserve the right to modify our pricing with 30 days' notice. Price changes will not affect your current billing cycle but will apply to subsequent renewals.
          </p>

          <h3>3.4 Failed Payments</h3>
          <p>
            If a payment fails, we will attempt to process it again. Continued failure to pay may result in service suspension or termination.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Cancellation and Refund Policy</h2>

          <h3>4.1 Cancellation</h3>
          <p>
            You may cancel your subscription at any time. Cancellations take effect at the end of your current billing cycle. You will retain access to services until the end of the paid period.
          </p>

          <h3>4.2 30-Day Money-Back Guarantee</h3>
          <p>
            If you cancel your subscription within the first 30 days of your initial signup, you are eligible for a full refund. Refunds are processed within 5-10 business days to your original payment method.
          </p>

          <h3>4.3 Refunds After 30 Days</h3>
          <p>
            After the first 30 days, subscriptions are non-refundable. Upon cancellation, you will not be charged for subsequent billing cycles, but you will not receive a refund for the current billing period.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Service Delivery and Timelines</h2>

          <h3>5.1 Onboarding</h3>
          <p>
            Upon subscription, you will complete an onboarding form to provide necessary information about your business. Service delivery begins after onboarding completion.
          </p>

          <h3>5.2 Delivery Timelines</h3>
          <p>
            We strive to meet estimated delivery timelines, but actual completion may vary based on project complexity, client responsiveness, and revision requests. Timelines are estimates, not guarantees.
          </p>

          <h3>5.3 Client Cooperation</h3>
          <p>
            Timely service delivery requires your cooperation, including providing requested materials, feedback, and approvals. Delays in client response may extend project timelines.
          </p>

          <h3>5.4 Revisions</h3>
          <p>
            Each service includes a reasonable number of revisions as outlined in your plan. Excessive revision requests beyond the scope of your plan may incur additional fees or delays.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Intellectual Property</h2>

          <h3>6.1 Client Content</h3>
          <p>
            You retain ownership of all content, materials, and information you provide to us. By providing content, you grant us a license to use it for the purpose of delivering services.
          </p>

          <h3>6.2 Branding Materials Ownership</h3>
          <p>
            Upon full payment for services that include branding, you own all branding materials created specifically for your business, including logos, brand guidelines, color palettes, and typography. You may use these materials for any business purpose, and ownership transfers to you permanently.
          </p>

          <h3>6.3 Website and Domain IP License</h3>
          <p>
            ServiceNerdPro retains ownership of all intellectual property related to your website, including but not limited to website design, code, structure, domain registration, content management systems, and digital marketing assets. As an active subscriber, you are granted a non-exclusive, non-transferable license to use your website and associated materials for your business purposes.
          </p>
          <p>
            This license remains valid for the duration of your active subscription. Upon cancellation or termination of your subscription, your license to use the website and domain may be revoked, and you may be required to cease using such materials. ServiceNerdPro retains the right to showcase your project in our portfolio unless otherwise agreed.
          </p>

          <h3>6.4 Third-Party Assets</h3>
          <p>
            We may use third-party stock photos, fonts, or other assets in your projects. You are responsible for obtaining appropriate licenses for continued use of any third-party assets after service completion.
          </p>

          <h3>6.5 Our Intellectual Property</h3>
          <p>
            All ServiceNerdPro branding, methodologies, templates, and proprietary processes remain our intellectual property and may not be reproduced or distributed without permission.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. User Responsibilities</h2>
          <p>You agree to:</p>
          <ul>
            <li>Provide accurate and complete information during signup and onboarding</li>
            <li>Maintain the confidentiality of your account credentials</li>
            <li>Notify us immediately of any unauthorized use of your account</li>
            <li>Use our services in compliance with all applicable laws and regulations</li>
            <li>Not use our services for any unlawful or fraudulent purpose</li>
            <li>Not interfere with or disrupt our services or servers</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, ServiceNerdPro and its affiliates, officers, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
          </p>
          <ul>
            <li>Your use or inability to use our services</li>
            <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
            <li>Any interruption or cessation of transmission to or from our services</li>
            <li>Any bugs, viruses, or other harmful code that may be transmitted through our services</li>
            <li>Any errors or omissions in any content or for any loss or damage incurred as a result of your use of any content</li>
          </ul>
          <p>
            Our total liability for any claims arising from or related to these Terms or our services shall not exceed the amount you paid to us in the 12 months preceding the claim.
          </p>
        </section>

        <section className={styles.section}>
          <h2>9. Disclaimers</h2>
          <p>
            Our services are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
          </p>
          <p>
            We do not guarantee that our services will be uninterrupted, secure, or error-free. We do not guarantee specific results from using our services, including but not limited to increased sales, leads, or website traffic.
          </p>
        </section>

        <section className={styles.section}>
          <h2>10. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless ServiceNerdPro and its affiliates, officers, employees, and agents from any claims, liabilities, damages, losses, and expenses, including reasonable attorney's fees, arising out of or in any way connected with:
          </p>
          <ul>
            <li>Your access to or use of our services</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any third-party rights, including intellectual property rights</li>
            <li>Any content you provide to us</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>11. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to our services at any time, with or without notice, for conduct that we believe:
          </p>
          <ul>
            <li>Violates these Terms or applicable laws</li>
            <li>Is harmful to other users, us, or third parties</li>
            <li>Exposes us or others to legal liability</li>
          </ul>
          <p>
            Upon termination, your right to use our services will immediately cease. Termination does not relieve you of any payment obligations for services rendered prior to termination.
          </p>
        </section>

        <section className={styles.section}>
          <h2>12. Governing Law and Dispute Resolution</h2>

          <h3>12.1 Governing Law</h3>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
          </p>

          <h3>12.2 Dispute Resolution</h3>
          <p>
            Any disputes arising from these Terms or our services shall first be attempted to be resolved through good faith negotiation. If negotiation fails, disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
          </p>

          <h3>12.3 Class Action Waiver</h3>
          <p>
            You agree to bring any disputes in your individual capacity and not as a plaintiff or class member in any class or representative action.
          </p>
        </section>

        <section className={styles.section}>
          <h2>13. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website and updating the "Last Updated" date. Continued use of our services after changes constitutes acceptance of the modified Terms.
          </p>
        </section>

        <section className={styles.section}>
          <h2>14. Severability</h2>
          <p>
            If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
          </p>
        </section>

        <section className={styles.section}>
          <h2>15. Entire Agreement</h2>
          <p>
            These Terms, together with our Privacy Policy, constitute the entire agreement between you and ServiceNerdPro regarding our services and supersede any prior agreements.
          </p>
        </section>

        <section className={styles.section}>
          <h2>16. Contact Information</h2>
          <p>If you have questions about these Terms, please contact us:</p>
          <ul>
            <li>Email: support@servicenerdpro.com</li>
            <li>Website: servicenerdpro.com</li>
          </ul>
        </section>
        </div>
      </div>
    </>
  );
}
