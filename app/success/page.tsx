'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Header from '../components/Header'
import styles from './page.module.css'

function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [customerEmail, setCustomerEmail] = useState<string>('')

  useEffect(() => {
    // You can optionally fetch session details here
    if (sessionId) {
      console.log('Payment successful! Session ID:', sessionId)
      // TODO: Fetch session details from your API if needed
    }
  }, [sessionId])

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.successCard}>
            <div className={styles.iconWrapper}>
              <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="url(#successGradient)" />
                <path d="M8 12.5L10.5 15L16 9.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="successGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22c55e" />
                    <stop offset="100%" stopColor="#16a34a" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <h1 className={styles.title}>Payment Successful!</h1>
            <p className={styles.subtitle}>
              Welcome to ServiceNerd Pro! Your subscription is now active.
            </p>

            <div className={styles.infoBox}>
              <h3>What Happens Next?</h3>
              <div className={styles.steps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h4>Complete Your Onboarding</h4>
                    <p>Tell us about your business so we can get started on your website, branding, and marketing.</p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h4>Book Your Kickoff Call</h4>
                    <p>Schedule a 30-minute call with our team to discuss your goals and timeline.</p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h4>We Get to Work</h4>
                    <p>Our team will start building your professional online presence. Launch in 7 days!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.actions}>
              <Link href="/onboarding">
                <button className={styles.primaryButton}>
                  Complete Onboarding Form →
                </button>
              </Link>
              <p className={styles.helperText}>
                You'll receive a confirmation email shortly with next steps.
              </p>
            </div>

            <div className={styles.support}>
              <p>Questions? Email us at <a href="mailto:support@servicenerdpro.com">support@servicenerdpro.com</a></p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default function Success() {
  return (
    <Suspense fallback={
      <>
        <Header />
        <main className={styles.main}>
          <div className={styles.container}>
            <div className={styles.successCard}>
              <p>Loading...</p>
            </div>
          </div>
        </main>
      </>
    }>
      <SuccessContent />
    </Suspense>
  )
}
