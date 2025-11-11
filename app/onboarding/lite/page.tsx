'use client'

import { useState, FormEvent, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Header from '@/app/components/Header'
import styles from './page.module.css'

function StarterOnboardingForm() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')

  // Get pre-filled data from URL params
  const prefilledEmail = searchParams.get('email') || ''
  const prefilledName = searchParams.get('name') || ''
  const prefilledBusinessName = searchParams.get('businessName') || ''

  const [formData, setFormData] = useState({
    // Business Information
    businessName: prefilledBusinessName,
    ownerName: prefilledName,
    email: prefilledEmail,
    phone: '',
    businessType: '',

    // Website Content
    businessDescription: '',
    servicesOffered: '',
    targetAudience: '',
    websiteGoals: '',
    socialMediaAccounts: '',

    // Branding Preferences
    brandColors: '',
    logoStyle: '',
    competitorWebsites: '',

    // Technical Details
    domainPreference: '',
    hasDomain: 'no',
    existingDomain: '',

    // Additional Information
    additionalNotes: '',
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/onboarding/lite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          sessionId,
          plan: 'Lite',
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit onboarding form')
      }

      setSuccess(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          {success ? (
            <div className={styles.thankYouContainer}>
              <h1 className={styles.thankYouTitle}>Thank You! Your <span style={{ whiteSpace: 'nowrap' }}>Service Pro<span style={{ color: '#3b82f6' }}> Lite</span></span> Journey Begins</h1>
              <p className={styles.thankYouSubtitle}>
                Your payment was successful. Our team is ready to build your professional website!
              </p>
              <p className={styles.deliveryPromise}>We'll have your site live within 7 days</p>

              <div className={styles.nextStepsCard}>
                <h2 className={styles.nextStepsTitle}>Next Steps</h2>

                <div className={styles.stepItem}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepHeading}>Schedule Your Onboarding Call</h3>
                    <p className={styles.stepDescription}>
                      Pick a time that works for you to discuss your project details and goals.
                    </p>
                    <a
                      href={process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_BOOKING_URL || 'https://calendar.google.com'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.scheduleButton}
                    >
                      Schedule Your Call
                    </a>
                  </div>
                </div>

                <div className={styles.stepItem}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepHeading}>Check Your Inbox</h3>
                    <p className={styles.stepDescription}>
                      We'll send follow-up details to <strong>{formData.email || 'your email'}</strong> within 24 hours with your project dashboard access.
                    </p>
                  </div>
                </div>

                <div className={styles.stepItem}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepHeading}>Questions?</h3>
                    <p className={styles.stepDescription}>
                      Contact us anytime at{' '}
                      <a href="mailto:contact@servicenerdpro.com" className={styles.emailLink}>
                        contact@servicenerdpro.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.finalMessage}>
                <p className={styles.finalMessageText}>
                  <strong>Your online presence is on the way!</strong> We're excited to help you grow your business.
                </p>
              </div>

              <Link href="/" className={styles.homeLink}>
                ← Return to Home
              </Link>
            </div>
          ) : (
            <>
              <div className={styles.header}>
                <h1 className={styles.title}>Welcome to <span style={{ whiteSpace: 'nowrap' }}>Service Pro<span style={{ color: '#60a5fa' }}> Lite</span></span></h1>
                <p className={styles.subtitle}>Your payment was successful. Now let's build your website.</p>
                <p className={styles.deliveryPromise}>⚡ We'll have your site live within 7 days</p>
              </div>

              <div className={styles.formCard}>
                <form onSubmit={handleSubmit}>
                  {error && (
                    <div className={styles.errorMessage}>
                      {error}
                  </div>
                )}

                {/* Business Information */}
                <div className={styles.formSection}>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.sectionIcon}>🏢</span>
                    Business Information
                  </h2>
                  <p className={styles.sectionDescription}>Tell us about your service business and website needs</p>

                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>
                        Business Name <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="e.g., Elite Plumbing Services"
                        required
                      />
                    </div>

                    <div className={styles.formGridTwo}>
                      <div className={styles.formGroup}>
                        <label className={styles.label}>
                          Your Name <span className={styles.required}>*</span>
                        </label>
                        <input
                          type="text"
                          name="ownerName"
                          value={formData.ownerName}
                          onChange={handleChange}
                          className={styles.input}
                          placeholder="John Smith"
                          required
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label className={styles.label}>
                          Business Type <span className={styles.required}>*</span>
                        </label>
                        <select
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleChange}
                          className={styles.select}
                          required
                        >
                          <option value="">Select type...</option>
                          <option value="plumbing">Plumbing</option>
                          <option value="hvac">HVAC</option>
                          <option value="electrical">Electrical</option>
                          <option value="landscaping">Landscaping</option>
                          <option value="cleaning">Cleaning</option>
                          <option value="roofing">Roofing</option>
                          <option value="painting">Painting</option>
                          <option value="flooring">Flooring</option>
                          <option value="carpentry">Carpentry</option>
                          <option value="pest-control">Pest Control</option>
                          <option value="handyman">Handyman</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className={styles.formGridTwo}>
                      <div className={styles.formGroup}>
                        <label className={styles.label}>
                          Email Address <span className={styles.required}>*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={styles.input}
                          placeholder="you@yourbusiness.com"
                          required
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label className={styles.label}>
                          Phone Number <span className={styles.required}>*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={styles.input}
                          placeholder="(555) 123-4567"
                          required
                        />
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>
                        Business Description <span className={styles.required}>*</span>
                      </label>
                      <textarea
                        name="businessDescription"
                        value={formData.businessDescription}
                        onChange={handleChange}
                        className={styles.textarea}
                        placeholder="Describe your business, what you do, and what makes you special..."
                        required
                      />
                      <span className={styles.helpText}>This will be used on your homepage</span>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>
                        Services You Offer <span className={styles.required}>*</span>
                      </label>
                      <textarea
                        name="servicesOffered"
                        value={formData.servicesOffered}
                        onChange={handleChange}
                        className={styles.textarea}
                        placeholder="List your main services (e.g., Emergency Plumbing, Drain Cleaning, Fixture Installation...)"
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>
                        Target Customers <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="text"
                        name="targetAudience"
                        value={formData.targetAudience}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="e.g., Homeowners in Dallas metro area"
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>
                        Website Goals <span className={styles.required}>*</span>
                      </label>
                      <textarea
                        name="websiteGoals"
                        value={formData.websiteGoals}
                        onChange={handleChange}
                        className={styles.textarea}
                        placeholder="What do you want visitors to do? (e.g., Call for emergency service, book appointments, request quotes...)"
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>
                        Social Media Links
                      </label>
                      <input
                        type="text"
                        name="socialMediaAccounts"
                        value={formData.socialMediaAccounts}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="e.g., Facebook: @eliteplumbing, Instagram: @eliteplumbing"
                      />
                      <span className={styles.helpText}>We'll create custom graphics for your social accounts</span>
                    </div>
                  </div>
                </div>

                {/* Branding Preferences */}
                <div className={styles.formSection}>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.sectionIcon}>🎨</span>
                    Logo & Branding
                  </h2>
                  <p className={styles.sectionDescription}>Let's create a brand that stands out</p>

                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>
                        Brand Color Preferences
                      </label>
                      <input
                        type="text"
                        name="brandColors"
                        value={formData.brandColors}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="e.g., Blue and orange, professional and trustworthy feel"
                      />
                      <span className={styles.helpText}>What colors represent your business best?</span>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>
                        Logo Style Preference
                      </label>
                      <select
                        name="logoStyle"
                        value={formData.logoStyle}
                        onChange={handleChange}
                        className={styles.select}
                      >
                        <option value="">Select a style...</option>
                        <option value="modern">Modern & Clean</option>
                        <option value="classic">Classic & Traditional</option>
                        <option value="bold">Bold & Eye-catching</option>
                        <option value="minimal">Minimal & Simple</option>
                        <option value="playful">Playful & Friendly</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>
                        Competitor Websites You Like
                      </label>
                      <textarea
                        name="competitorWebsites"
                        value={formData.competitorWebsites}
                        onChange={handleChange}
                        className={styles.textarea}
                        placeholder="List any competitor or industry websites you admire (URLs or business names)"
                      />
                      <span className={styles.helpText}>This helps us understand your style preferences</span>
                    </div>
                  </div>
                </div>

                {/* Domain Information */}
                <div className={styles.formSection}>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.sectionIcon}>🌐</span>
                    Domain Name
                  </h2>
                  <p className={styles.sectionDescription}>Where will your website live?</p>

                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>
                        Do you already own a domain? <span className={styles.required}>*</span>
                      </label>
                      <select
                        name="hasDomain"
                        value={formData.hasDomain}
                        onChange={handleChange}
                        className={styles.select}
                        required
                      >
                        <option value="no">No, I need help getting one</option>
                        <option value="yes">Yes, I already have a domain</option>
                      </select>
                    </div>

                    {formData.hasDomain === 'yes' && (
                      <div className={styles.formGroup}>
                        <label className={styles.label}>
                          Your Existing Domain <span className={styles.required}>*</span>
                        </label>
                        <input
                          type="text"
                          name="existingDomain"
                          value={formData.existingDomain}
                          onChange={handleChange}
                          className={styles.input}
                          placeholder="e.g., yourplumbing.com"
                          required
                        />
                      </div>
                    )}

                    {formData.hasDomain === 'no' && (
                      <div className={styles.formGroup}>
                        <label className={styles.label}>
                          Preferred Domain Name
                        </label>
                        <input
                          type="text"
                          name="domainPreference"
                          value={formData.domainPreference}
                          onChange={handleChange}
                          className={styles.input}
                          placeholder="e.g., eliteplumbing.com"
                        />
                        <span className={styles.helpText}>We'll check availability and help you register</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Additional Information */}
                <div className={styles.formSection}>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.sectionIcon}>💡</span>
                    Anything Else?
                  </h2>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>
                      Additional Notes or Special Requests
                    </label>
                    <textarea
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleChange}
                      className={styles.textarea}
                      placeholder="Any specific features, integrations, or special requirements you'd like us to know about?"
                    />
                  </div>
                </div>

                  <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={loading}
                  >
                    {loading ? 'Submitting...' : 'Submit & Start Building My Website'}
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  )
}

export default function StarterOnboarding() {
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
      <StarterOnboardingForm />
    </Suspense>
  )
}
