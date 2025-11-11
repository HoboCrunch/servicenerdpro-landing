'use client'

import { useState } from 'react'
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js'
import styles from './page.module.css'

interface CheckoutFormProps {
  planName: string
  plan: string
  email: string
  name: string
  businessName: string
}

export default function CheckoutForm({ planName, plan, email, name, businessName }: CheckoutFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setLoading(true)
    setErrorMessage(null)

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success?payment_intent=${encodeURIComponent('PAYMENT_INTENT_ID')}`,
      },
      redirect: 'if_required',
    })

    if (error) {
      setErrorMessage(error.message || 'An unexpected error occurred.')
      setLoading(false)
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      // Send onboarding email
      try {
        await fetch('/api/send-onboarding-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            name,
            businessName,
            plan,
            paymentIntent: paymentIntent.id,
          }),
        })
        // Don't block on email sending - continue to success page regardless
      } catch (emailError) {
        // Continue to success page even if email fails
      }

      // Redirect to success page with payment details
      const successUrl = `/success?${new URLSearchParams({
        payment_intent: paymentIntent.id,
        plan: plan,
        email: email,
        name: name,
        businessName: businessName,
      }).toString()}`

      window.location.href = successUrl
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <PaymentElement />

      {errorMessage && (
        <div className={styles.errorMessage}>
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || loading}
        className={styles.submitButton}
      >
        {loading ? (
          <>
            <div className={styles.buttonSpinner}></div>
            Processing...
          </>
        ) : (
          <>
            Subscribe to <span style={{ whiteSpace: 'nowrap' }}>Service Pro{plan === 'pro' ? <sup style={{ color: '#fb923c' }}>+</sup> : <span style={{ color: '#3b82f6' }}> Lite</span>}</span>
          </>
        )}
      </button>

      <p className={styles.terms}>
        By confirming your subscription, you allow Service Pro to charge your card for this payment and future payments in accordance with their terms.
      </p>
    </form>
  )
}
