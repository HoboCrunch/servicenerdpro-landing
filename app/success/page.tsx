'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Header from '../components/Header'
import styles from './page.module.css'

function SuccessContent() {
  const searchParams = useSearchParams()
  const paymentIntent = searchParams.get('payment_intent')
  const plan = searchParams.get('plan')
  const email = searchParams.get('email')
  const name = searchParams.get('name')
  const businessName = searchParams.get('businessName')

  // Construct onboarding form URL
  const onboardingUrl = `/onboarding/${plan}?${new URLSearchParams({
    email: email || '',
    name: name || '',
    businessName: businessName || '',
    payment_intent: paymentIntent || '',
  }).toString()}`

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.successCard}>
            <div className={styles.checkmark}>✓</div>
            <h1 className={styles.title}>Payment Successful!</h1>
            <p className={styles.message}>
              Your subscription to <span style={{ whiteSpace: 'nowrap' }}>Service Pro{plan === 'pro' ? <sup style={{ color: '#f97316', fontWeight: '600' }}>+</sup> : <span style={{ color: '#3b82f6', fontWeight: '600' }}> Lite</span>}</span> has been successfully activated.
            </p>

            <div style={{
              backgroundColor: '#fff7ed',
              border: '2px solid #f97316',
              borderRadius: '12px',
              padding: '24px',
              margin: '24px 0',
              textAlign: 'center'
            }}>
              <h2 style={{ color: '#1e293b', fontSize: '20px', margin: '0 0 12px 0', fontWeight: '700' }}>
                What's Next?
              </h2>
              <p style={{ color: '#64748b', fontSize: '15px', margin: '0 0 20px 0', lineHeight: '1.6' }}>
                All you need to do is complete the onboarding form and schedule your call. That's it!
              </p>
              <a
                href={onboardingUrl}
                style={{
                  display: 'inline-block',
                  backgroundColor: '#f97316',
                  color: 'white',
                  padding: '14px 32px',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontWeight: '600',
                  fontSize: '16px',
                  boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3)',
                  transition: 'transform 0.2s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                📋 Complete Onboarding Form
              </a>
            </div>

            <div style={{
              backgroundColor: '#f0f9ff',
              border: '2px solid #3b82f6',
              borderRadius: '12px',
              padding: '20px',
              margin: '24px 0',
              textAlign: 'center'
            }}>
              <h2 style={{ color: '#1e293b', fontSize: '18px', margin: '0 0 8px 0', fontWeight: '600' }}>
                📧 Check Your Email
              </h2>
              <p style={{ color: '#64748b', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>
                We've sent a welcome email to <strong>{email}</strong> with a link to the onboarding form. You can also complete it using the button above!
              </p>
            </div>

            <p className={styles.details}>
              <strong>Your Next Steps:</strong><br/>
              1. Complete the onboarding form with your business details<br/>
              2. Schedule your onboarding call to discuss your vision<br/>
              3. We'll get to work building your website!
            </p>

            <p className={styles.deliveryNote}>
              ⚡ Your website will be live within 7 days
            </p>

            <div style={{ marginTop: '24px', padding: '16px', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
              <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>
                <strong>Questions?</strong> Contact us:<br/>
                📧 contact@servicenerdpro.com<br/>
                📞 (509) 961-6310
              </p>
            </div>

            <Link href="/" className={styles.homeLink} style={{ marginTop: '20px', display: 'inline-block' }}>
              Return to Home →
            </Link>
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
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
      }}>
        <div style={{ color: '#334155', fontSize: '1.5rem' }}>Loading...</div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  )
}
