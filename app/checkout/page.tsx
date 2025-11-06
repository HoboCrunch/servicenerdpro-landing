'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Header from '../components/Header'
import CheckoutForm from './CheckoutForm'
import styles from './page.module.css'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

function CheckoutContent() {
  const searchParams = useSearchParams()
  const plan = searchParams.get('plan')
  const [clientSecret, setClientSecret] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const planDetails: Record<string, { name: string; price: number; priceId: string }> = {
    starter: {
      name: 'Starter',
      price: 99,
      priceId: process.env.NEXT_PUBLIC_STRIPE_STARTER_PRICE_ID || '',
    },
    pro: {
      name: 'Pro+',
      price: 199,
      priceId: process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE_ID || '',
    },
  }

  const selectedPlan = plan ? planDetails[plan] : null

  useEffect(() => {
    if (!selectedPlan) {
      setError('Invalid plan selected')
      setLoading(false)
      return
    }

    // Create Subscription with PaymentIntent as soon as the page loads
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        priceId: selectedPlan.priceId,
        planName: plan,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          throw new Error(data.error)
        }
        setClientSecret(data.clientSecret)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message || 'Failed to initialize checkout')
        setLoading(false)
      })
  }, [selectedPlan, plan])

  if (!selectedPlan) {
    return (
      <>
        <Header />
        <main className={styles.main}>
          <div className={styles.container}>
            <div className={styles.errorCard}>
              <h1>Invalid Plan</h1>
              <p>Please select a valid plan from the pricing page.</p>
              <a href="/pricing" className={styles.backLink}>
                ← Back to Pricing
              </a>
            </div>
          </div>
        </main>
      </>
    )
  }

  const appearance = {
    theme: 'stripe' as const,
    variables: {
      colorPrimary: '#f97316',
      colorBackground: '#ffffff',
      colorText: '#334155',
      colorDanger: '#ef4444',
      fontFamily: 'system-ui, sans-serif',
      spacingUnit: '4px',
      borderRadius: '8px',
    },
  }

  const options = {
    clientSecret,
    appearance,
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.checkoutWrapper}>
            {/* Order Summary */}
            <div className={styles.orderSummary}>
              <h2 className={styles.summaryTitle}>Order Summary</h2>
              <div className={styles.planInfo}>
                <div className={styles.planName}>{selectedPlan.name}</div>
                <div className={styles.planPrice}>
                  ${selectedPlan.price}
                  <span className={styles.planPeriod}>/month</span>
                </div>
              </div>
              <div className={styles.summaryDivider}></div>
              <div className={styles.summaryRow}>
                <span>Subtotal</span>
                <span>${selectedPlan.price}.00</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Tax</span>
                <span>Calculated at checkout</span>
              </div>
              <div className={styles.summaryDivider}></div>
              <div className={styles.summaryTotal}>
                <span>Total due today</span>
                <span className={styles.totalAmount}>${selectedPlan.price}.00</span>
              </div>
              <div className={styles.benefits}>
                <h3>What's included:</h3>
                <ul>
                  {selectedPlan.name === 'Starter' ? (
                    <>
                      <li>✓ Single Page Website</li>
                      <li>✓ Logo Design</li>
                      <li>✓ 0 Downtime Hosting</li>
                      <li>✓ 24/7 Support</li>
                    </>
                  ) : (
                    <>
                      <li>✓ Unlimited Pages (5+ included)</li>
                      <li>✓ Complete Branding Package</li>
                      <li>✓ Local SEO Optimization</li>
                      <li>✓ Review Management</li>
                      <li>✓ Monthly Strategy Session</li>
                      <li>🎁 100 Free Business Cards</li>
                    </>
                  )}
                </ul>
              </div>
            </div>

            {/* Checkout Form */}
            <div className={styles.checkoutForm}>
              <h1 className={styles.title}>Complete Your Subscription</h1>
              <p className={styles.subtitle}>
                Subscribe to {selectedPlan.name} - billed monthly, cancel anytime
              </p>

              {loading && (
                <div className={styles.loadingState}>
                  <div className={styles.spinner}></div>
                  <p>Loading secure checkout...</p>
                </div>
              )}

              {error && (
                <div className={styles.errorState}>
                  <p>{error}</p>
                  <a href="/pricing" className={styles.backLink}>
                    ← Back to Pricing
                  </a>
                </div>
              )}

              {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                  <CheckoutForm planName={selectedPlan.name} />
                </Elements>
              )}

              <div className={styles.securityBadge}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L3 3V7C3 10.3 5.4 13.1 8 14C10.6 13.1 13 10.3 13 7V3L8 1Z" stroke="#22c55e" strokeWidth="1.5" fill="none"/>
                  <path d="M6 8L7.5 9.5L10.5 6.5" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Secured by Stripe</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  )
}
