import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/servicenerdpro-logo.svg"
            alt="ServiceNerd Pro Logo"
            width={50}
            height={46}
            priority
            className={styles.logoImage}
          />
          <span className={styles.brandName}>
            Service Nerd <span className={styles.proSuperscript}>Pro<sup className={styles.plusSign}>+</sup></span>
          </span>
        </Link>
        <nav className={styles.nav}>
          <Link href="/website-design" className={styles.navLink}>Website Design</Link>
          <Link href="/digital-marketing" className={styles.navLink}>Digital Marketing</Link>
          <Link href="/branding" className={styles.navLink}>Branding</Link>
          <Link href="/pricing" className={styles.navLink}>Pricing</Link>
          <Link href="/pricing">
            <button className={styles.ctaButton}>Get Started</button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
