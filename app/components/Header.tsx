'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setIsServicesOpen(true)
  }

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false)
    }, 150)
  }

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
          <div
            className={styles.dropdown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className={styles.navLink}>
              Services
              <svg className={styles.dropdownArrow} width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {isServicesOpen && (
              <div className={styles.dropdownMenu}>
                <Link href="/website-design" className={styles.dropdownItem}>
                  <span className={styles.dropdownItemTitle}>Website Design</span>
                  <span className={styles.dropdownItemDesc}>Professional sites in 7 days</span>
                </Link>
                <Link href="/digital-marketing" className={styles.dropdownItem}>
                  <span className={styles.dropdownItemTitle}>Digital Marketing</span>
                  <span className={styles.dropdownItemDesc}>Get found on Google</span>
                </Link>
                <Link href="/branding" className={styles.dropdownItem}>
                  <span className={styles.dropdownItemTitle}>Branding</span>
                  <span className={styles.dropdownItemDesc}>Logo & brand identity</span>
                </Link>
              </div>
            )}
          </div>
          <Link href="/blog" className={styles.navLink}>Blog</Link>
          <Link href="/testimonials" className={styles.navLink}>Testimonials</Link>
          <Link href="/pricing" className={styles.navLink}>Pricing</Link>
          <Link href="/pricing">
            <button className={styles.ctaButton}>Get Started</button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
