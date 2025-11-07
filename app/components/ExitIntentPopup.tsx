'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './ExitIntentPopup.module.css'
import { trackExitIntentShow, trackExitIntentSubmit, trackExitIntentDismiss } from '../utils/analytics'

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Check if user has already seen popup in this session
    const popupShown = sessionStorage.getItem('exitPopupShown')
    if (popupShown) {
      setHasShown(true)
      return
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is leaving from top of page (navigating away)
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
        sessionStorage.setItem('exitPopupShown', 'true')
        trackExitIntentShow()
      }
    }

    // Add small delay to avoid triggering immediately
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave)
    }, 3000)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [hasShown])

  const handleClose = () => {
    setIsVisible(false)
    trackExitIntentDismiss()
  }

  const handleSubmit = () => {
    trackExitIntentSubmit('unknown') // Email would come from actual form
  }

  if (!isVisible) return null

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={handleClose}>
          ×
        </button>

        <div className={styles.content}>
          <div className={styles.icon}>⚡</div>
          <h2 className={styles.title}>Wait! Before You Go...</h2>
          <p className={styles.subtitle}>
            Get a FREE Website Audit & Strategy Session
          </p>

          <div className={styles.benefits}>
            <div className={styles.benefit}>
              <span className={styles.checkmark}>✓</span>
              <span>15-minute personalized website review</span>
            </div>
            <div className={styles.benefit}>
              <span className={styles.checkmark}>✓</span>
              <span>Custom recommendations for your business</span>
            </div>
            <div className={styles.benefit}>
              <span className={styles.checkmark}>✓</span>
              <span>No obligation. No pushy sales pitch.</span>
            </div>
          </div>

          <div className={styles.actions}>
            <Link href="/pricing" onClick={handleSubmit}>
              <button className={styles.primaryButton}>
                Get My Free Audit
              </button>
            </Link>
            <button className={styles.secondaryButton} onClick={handleClose}>
              No thanks, I'll pass on free advice
            </button>
          </div>

          <p className={styles.urgency}>
            🔥 Only 3 audit slots left this week
          </p>
        </div>
      </div>
    </div>
  )
}
