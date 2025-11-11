'use client'

import { useState, Suspense, ReactNode } from 'react'
import { useSearchParams } from 'next/navigation'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Header from '../components/Header'
import CheckoutForm from './CheckoutForm'
import styles from './page.module.css'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

type Step = 'email' | 'payment'

function CheckoutContent() {
  const searchParams = useSearchParams()
  const plan = searchParams.get('plan')

  const [currentStep, setCurrentStep] = useState<Step>('email')
  const [clientSecret, setClientSecret] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const [emailError, setEmailError] = useState('')

  const planDetails: Record<string, { name: string; displayName: ReactNode; price: number; priceId: string }> = {
    lite: {
      name: 'Service Pro Lite',
      displayName: <span style={{ whiteSpace: 'nowrap' }}>Service <span style={{ color: '#3b82f6' }}>Pro Lite</span></span>,
      price: 99,
      priceId: process.env.NEXT_PUBLIC_STRIPE_STARTER_PRICE_ID || '',
    },
    pro: {
      name: 'Service Pro+',
      displayName: <span style={{ whiteSpace: 'nowrap' }}>Service <span style={{ color: '#f97316' }}>Pro<sup>+</sup></span></span>,
      price: 199,
      priceId: process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE_ID || '',
    },
  }

  const selectedPlan = plan ? planDetails[plan] : null


  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setEmailError('')

    if (!name || name.trim().length === 0) {
      setEmailError('Please enter your name')
      return
    }

    if (!businessName || businessName.trim().length === 0) {
      setEmailError('Please enter your business name')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      setEmailError('Please enter a valid email address')
      return
    }

    if (!selectedPlan) {
      setEmailError('Invalid plan selected')
      return
    }

    setEmailSubmitted(true)
    setLoading(true)

    try {
      const response = await fetch('/api/create-subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          priceId: selectedPlan.priceId,
          planName: plan,
          email: email,
          name: name,
          businessName: businessName,
        }),
      })

      const data = await response.json()

      if (data.error) {
        throw new Error(data.error)
      }

      setClientSecret(data.clientSecret)
      setCurrentStep('payment')
      setLoading(false)
    } catch (err: any) {
      setEmailError(err.message || 'Failed to initialize checkout')
      setLoading(false)
    }
  }

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

  const getStepNumber = () => {
    switch (currentStep) {
      case 'email': return 1
      case 'payment': return 2
      default: return 1
    }
  }

  const getStepText = () => {
    switch (currentStep) {
      case 'email': return 'Enter your contact information'
      case 'payment': return 'Complete payment'
      default: return 'Enter your contact information'
    }
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
                <div className={styles.planName}>{selectedPlan.displayName}</div>
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
                <ul className={plan === 'pro' ? styles.proBenefits : ''}>
                  {plan === 'lite' ? (
                    <>
                      <li>✓ Single Page Website</li>
                      <li>✓ Logo Design</li>
                      <li>✓ 0 Downtime Hosting</li>
                      <li>✓ 24/7 Support</li>
                    </>
                  ) : (
                    <>
                      <li>✓ Everything in Lite, plus:</li>
                      <li>✓ Unlimited Pages (5+ pages included)</li>
                      <li>✓ Logo, Brand Colors & Brand Assets</li>
                      <li>✓ Organic SEO Optimization</li>
                      <li>✓ Local Search Optimization</li>
                      <li>✓ Social Media Templates & Ad Templates</li>
                      <li>✓ Brand Images</li>
                      <li>✓ Monthly 30min Marketing Strategy Session</li>
                      <li>🎁 100 Free Business Cards on Signup</li>
                    </>
                  )}
                </ul>
              </div>

              {/* Progress Indicator in Sidebar */}
              <div className={styles.progressSteps}>
                <div className={`${styles.progressStep} ${emailSubmitted || currentStep === 'payment' ? styles.progressStepComplete : currentStep === 'email' ? styles.progressStepActive : ''}`}>
                  <div className={styles.progressStepNumber}>1</div>
                  <div className={styles.progressStepLabel}>Contact</div>
                </div>
                <div className={`${styles.progressStep} ${currentStep === 'payment' ? styles.progressStepActive : ''}`}>
                  <div className={styles.progressStepNumber}>2</div>
                  <div className={styles.progressStepLabel}>Payment</div>
                </div>
              </div>
            </div>

            {/* Checkout Form */}
            <div className={styles.checkoutForm}>
              <h1 className={styles.title}>Complete Your Subscription</h1>
              <p className={styles.subtitle}>
                Subscribe to {selectedPlan.displayName} - billed monthly, cancel anytime
              </p>

              {currentStep === 'email' && (
                <div className={styles.emailCaptureSection}>
                  <div className={styles.stepIndicator}>
                    <span className={styles.stepNumber}>{getStepNumber()}</span>
                    <span className={styles.stepText}>{getStepText()}</span>
                  </div>
                  <form onSubmit={handleEmailSubmit} className={styles.emailForm}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name" className={styles.emailLabel}>
                        Full Name <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={styles.emailInput}
                        placeholder="John Smith"
                        required
                        disabled={loading}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="businessName" className={styles.emailLabel}>
                        Business Name <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        className={styles.emailInput}
                        placeholder="Your Business LLC"
                        required
                        disabled={loading}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.emailLabel}>
                        Email Address <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.emailInput}
                        placeholder="you@example.com"
                        required
                        disabled={loading}
                      />
                      {emailError && (
                        <div className={styles.emailError}>{emailError}</div>
                      )}
                      <p className={styles.emailHint}>
                        We'll use this email for your account and order confirmations
                      </p>
                    </div>
                    <button
                      type="submit"
                      className={styles.continueButton}
                      disabled={loading || !email || !name || !businessName}
                    >
                      {loading ? (
                        <>
                          <div className={styles.buttonSpinner}></div>
                          Loading...
                        </>
                      ) : (
                        'Continue to Payment →'
                      )}
                    </button>
                  </form>
                </div>
              )}

              {currentStep === 'payment' && (
                <>
                  <div className={styles.stepIndicator}>
                    <span className={styles.stepNumber}>{getStepNumber()}</span>
                    <span className={styles.stepText}>{getStepText()}</span>
                  </div>
                  <div className={styles.emailConfirmation}>
                    <div>
                      <span className={styles.emailLabel}>Name:</span>
                      <span className={styles.emailValue}>{name}</span>
                    </div>
                    <div>
                      <span className={styles.emailLabel}>Business:</span>
                      <span className={styles.emailValue}>{businessName}</span>
                    </div>
                    <div>
                      <span className={styles.emailLabel}>Email:</span>
                      <span className={styles.emailValue}>{email}</span>
                    </div>
                    <button
                      onClick={() => {
                        setCurrentStep('email')
                        setEmailSubmitted(false)
                        setClientSecret('')
                        setName('')
                        setBusinessName('')
                        setEmail('')
                      }}
                      className={styles.changeEmailButton}
                    >
                      Change
                    </button>
                  </div>

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
                      <CheckoutForm
                        planName={selectedPlan.name}
                        plan={plan || 'pro'}
                        email={email}
                        name={name}
                        businessName={businessName}
                      />
                    </Elements>
                  )}
                </>
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
