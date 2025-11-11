'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setIsMobileServicesOpen(false)
  }

  return (
    <>
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

          {/* Desktop Navigation */}
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

          {/* Mobile Hamburger Button */}
          <button
            className={styles.hamburger}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay - Outside header */}
      {isMobileMenuOpen && (
        <>
          <div className={styles.mobileOverlay} onClick={closeMobileMenu}></div>
          <div className={styles.mobileMenu}>
            <div className={styles.mobileMenuHeader}>
              <span className={styles.mobileMenuTitle}>Menu</span>
              <button
                className={styles.mobileCloseButton}
                onClick={closeMobileMenu}
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <nav className={styles.mobileNav}>
              {/* Services Dropdown for Mobile */}
              <div className={styles.mobileDropdown}>
                <button
                  className={styles.mobileNavLink}
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                >
                  Services
                  <svg
                    className={`${styles.mobileDropdownArrow} ${isMobileServicesOpen ? styles.mobileDropdownArrowOpen : ''}`}
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                  >
                    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {isMobileServicesOpen && (
                  <div className={styles.mobileDropdownMenu}>
                    <Link href="/website-design" className={styles.mobileDropdownItem} onClick={closeMobileMenu}>
                      <span className={styles.mobileDropdownItemTitle}>Website Design</span>
                      <span className={styles.mobileDropdownItemDesc}>Professional sites in 7 days</span>
                    </Link>
                    <Link href="/digital-marketing" className={styles.mobileDropdownItem} onClick={closeMobileMenu}>
                      <span className={styles.mobileDropdownItemTitle}>Digital Marketing</span>
                      <span className={styles.mobileDropdownItemDesc}>Get found on Google</span>
                    </Link>
                    <Link href="/branding" className={styles.mobileDropdownItem} onClick={closeMobileMenu}>
                      <span className={styles.mobileDropdownItemTitle}>Branding</span>
                      <span className={styles.mobileDropdownItemDesc}>Logo & brand identity</span>
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/testimonials" className={styles.mobileNavLink} onClick={closeMobileMenu}>Testimonials</Link>
              <Link href="/pricing" className={styles.mobileNavLink} onClick={closeMobileMenu}>Pricing</Link>

              <Link href="/pricing" onClick={closeMobileMenu}>
                <button className={styles.mobileCtaButton}>Get Started</button>
              </Link>
            </nav>
          </div>
        </>
      )}
    </>
  )
}
