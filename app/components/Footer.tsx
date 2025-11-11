import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Company Info */}
          <div className={styles.column}>
            <h3 className={styles.title}>
              Service Nerd <span className={styles.proText}>Pro<sup className={styles.plusSign}>+</sup></span>
            </h3>
            <p className={styles.description}>
              Helping service businesses grow with professional digital marketing, branding, and website design.
            </p>
          </div>

          {/* Services */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Services</h4>
            <ul className={styles.links}>
              <li><Link href="/website-design">Website Design</Link></li>
              <li><Link href="/branding">Branding</Link></li>
              <li><Link href="/digital-marketing">Digital Marketing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Company</h4>
            <ul className={styles.links}>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/testimonials">Testimonials</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Legal</h4>
            <ul className={styles.links}>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} Service Nerd Pro. All rights reserved.
          </p>
          <p className={styles.contact}>
            Questions? Email us at{' '}
            <a href="mailto:support@servicenerdpro.com">support@servicenerdpro.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
