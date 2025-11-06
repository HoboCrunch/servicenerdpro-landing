'use client'

import { useState } from 'react'
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'

interface CheckoutFormProps {
  planName: string
}

export default function CheckoutForm({ planName }: CheckoutFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setLoading(true)
    setErrorMessage(null)

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
      },
    })

    if (error) {
      setErrorMessage(error.message || 'An unexpected error occurred.')
      setLoading(false)
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
          `Subscribe to ${planName}`
        )}
      </button>

      <p className={styles.terms}>
        By confirming your subscription, you allow ServiceNerd Pro to charge your card for this payment and future payments in accordance with their terms.
      </p>
    </form>
  )
}
