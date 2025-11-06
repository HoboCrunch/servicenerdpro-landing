'use client'

import { useState } from 'react'
import styles from './page.module.css'

interface PricingCardProps {
  planName: string
  price: number
  description: string
  features: Array<{ text: string; included: boolean }>
  priceId: string
  featured?: boolean
}

export default function PricingCard({
  planName,
  price,
  description,
  features,
  priceId,
  featured = false,
}: PricingCardProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleCheckout = () => {
    // Redirect to embedded checkout page
    const planSlug = planName.toLowerCase().replace('+', '')
    window.location.href = `/checkout?plan=${planSlug}`
  }

  return (
    <div className={`${styles.pricingCard} ${featured ? styles.featured : ''}`}>
      {featured && <div className={styles.popularBadge}>Most Popular</div>}

      <div className={styles.planHeader}>
        <h3 className={styles.planName}>{planName}</h3>
        <div className={styles.planPrice}>
          <span className={styles.currency}>$</span>
          <span className={styles.amount}>{price}</span>
          <span className={styles.period}>/month</span>
        </div>
        <p className={styles.planDescription}>{description}</p>
      </div>

      <div className={styles.planFeatures}>
        {features.map((feature, index) => (
          <div
            key={index}
            className={feature.included ? styles.feature : styles.featureDisabled}
          >
            {feature.text}
          </div>
        ))}
      </div>

      {error && (
        <div className={styles.errorMessage}>
          {error}
        </div>
      )}

      <button
        onClick={handleCheckout}
        disabled={loading}
        className={featured ? styles.selectButtonFeatured : styles.selectButton}
      >
        {loading ? 'Loading...' : 'Get Started'}
      </button>
    </div>
  )
}
