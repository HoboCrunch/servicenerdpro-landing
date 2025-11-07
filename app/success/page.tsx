'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Header from '../components/Header'
import styles from './page.module.css'

function SuccessContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const sessionId = searchParams.get('session_id')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const redirectToOnboarding = async () => {
      if (!sessionId) {
        // No session ID - show plan selection instead of error
        setLoading(false)
        return
      }

      try {
        // Fetch session details from Stripe to determine plan
        const response = await fetch(`/api/get-session?session_id=${sessionId}`)

        if (!response.ok) {
          throw new Error('Failed to fetch session details')
        }

        const data = await response.json()
        const planName = data.metadata?.planName || ''

        // Route to appropriate onboarding page based on plan
        if (planName.toLowerCase().includes('starter')) {
          router.push(`/onboarding/starter?session_id=${sessionId}`)
        } else if (planName.toLowerCase().includes('pro')) {
          router.push(`/onboarding/pro?session_id=${sessionId}`)
        } else {
          // Default fallback - could be enterprise or unknown
          setError('Unable to determine subscription plan')
          setLoading(false)
        }
      } catch (err) {
        console.error('Error redirecting to onboarding:', err)
        setError(err instanceof Error ? err.message : 'An error occurred')
        setLoading(false)
      }
    }

    redirectToOnboarding()
  }, [sessionId, router])

  // Show plan selection if no session ID (for testing/manual access)
  if (!loading && !sessionId) {
    return (
      <>
        <Header />
        <main className={styles.main}>
          <div className={styles.container}>
            <div className={styles.successCard}>
              <div className={styles.checkmark}>✓</div>
              <h1 className={styles.title}>Welcome to ServiceNerd Pro!</h1>
              <p className={styles.message}>
                Please select your plan to continue with onboarding:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
                <button
                  onClick={() => router.push('/onboarding/starter')}
                  className={styles.homeButton}
                  style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' }}
                >
                  Starter Plan Onboarding
                </button>
                <button
                  onClick={() => router.push('/onboarding/pro')}
                  className={styles.homeButton}
                  style={{ background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)' }}
                >
                  Pro+ Plan Onboarding
                </button>
              </div>
              <p style={{ marginTop: '1.5rem', fontSize: '0.875rem', color: '#64748b' }}>
                If you just completed payment, please check your email for the onboarding link.
              </p>
            </div>
          </div>
        </main>
      </>
    )
  }

  if (error) {
    return (
      <>
        <Header />
        <main className={styles.main}>
          <div className={styles.container}>
            <div className={styles.successCard}>
              <div className={styles.checkmark}>✓</div>
              <h1 className={styles.title}>Payment Successful!</h1>
              <p className={styles.message}>
                Thank you for subscribing! Your subscription is now active.
              </p>
              <p className={styles.details}>
                You'll receive a confirmation email shortly with next steps.
              </p>
              <p className={styles.error}>
                {error}
              </p>
              <div style={{ marginTop: '2rem' }}>
                <button
                  onClick={() => router.push('/onboarding/starter')}
                  className={styles.homeButton}
                  style={{ marginRight: '1rem' }}
                >
                  Starter Onboarding
                </button>
                <button
                  onClick={() => router.push('/onboarding/pro')}
                  className={styles.homeButton}
                >
                  Pro+ Onboarding
                </button>
              </div>
            </div>
          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.successCard}>
            <div className={styles.spinner}></div>
            <h1 className={styles.title}>Payment Successful!</h1>
            <p className={styles.message}>
              Redirecting you to complete your setup...
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a1128 0%, #1a2642 100%)'
      }}>
        <div style={{ color: 'white', fontSize: '1.5rem' }}>Loading...</div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  )
}
