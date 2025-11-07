'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import styles from './StickyMobileCTA.module.css'
import { trackStickyMobileCTAShow, trackStickyMobileCTAClick } from '../utils/analytics'

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const hasTrackedShow = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 800
      setIsVisible(shouldShow)

      // Track first time it becomes visible
      if (shouldShow && !hasTrackedShow.current) {
        trackStickyMobileCTAShow()
        hasTrackedShow.current = true
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`${styles.stickyBar} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.content}>
        <div className={styles.text}>
          <div className={styles.title}>Ready to get started?</div>
          <div className={styles.subtitle}>$199/mo • 7-Day Delivery</div>
        </div>
        <Link href="/pricing" onClick={trackStickyMobileCTAClick}>
          <button className={styles.ctaButton}>Get Started</button>
        </Link>
      </div>
    </div>
  )
}
