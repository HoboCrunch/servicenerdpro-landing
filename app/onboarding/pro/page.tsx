'use client'

import { useState, FormEvent, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Header from '@/app/components/Header'
import styles from './page.module.css'

function ProOnboardingForm() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')

  const [formData, setFormData] = useState({
    // Business Information
    businessName: '',
    ownerName: '',
    email: '',
    phone: '',
    businessType: '',
    businessAddress: '',
    serviceArea: '',
    yearsInBusiness: '',

    // Website Content
    businessDescription: '',
    servicesOffered: '',
    targetAudience: '',
    websiteGoals: '',
    keyDifferentiators: '',
    pageRequirements: '',

    // SEO & Local Search
    primaryKeywords: '',
    competitorNames: '',
    googleBusinessExists: 'no',
    googleBusinessEmail: '',

    // Branding Preferences (Pro+ gets full package)
    brandColors: '',
    logoStyle: '',
    brandPersonality: '',
    competitorWebsites: '',

    // Review Management
    reviewPlatforms: [] as string[],
    currentReviewStrategy: '',

    // Social Media & Marketing
    socialMediaAccounts: '',
    marketingGoals: '',
    adBudget: '',

    // Business Cards (Free with Pro+)
    cardName: '',
    cardTitle: '',
    cardEmail: '',
    cardPhone: '',
    mailingAddress: '',

    // Monthly Strategy Session
    strategySessionTopics: '',
    businessChallenges: '',

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
    const { name, value, type } = e.target

    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement
      const isChecked = checkbox.checked
      const checkboxValue = checkbox.value

      setFormData(prev => ({
        ...prev,
        reviewPlatforms: isChecked
          ? [...prev.reviewPlatforms, checkboxValue]
          : prev.reviewPlatforms.filter(v => v !== checkboxValue)
      }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/onboarding/pro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          sessionId,
          plan: 'Pro+',
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
          <div className={styles.header}>
            <div className={styles.successIcon}>🎉</div>
            <div className={styles.premiumBadge}>
              ⭐ Pro+ Plan
            </div>
            <h1 className={styles.title}>Welcome to ServiceNerd Pro+!</h1>
            <p className={styles.subtitle}>Your payment was successful. Let's build your complete digital presence.</p>
            <p className={styles.deliveryPromise}>⚡ Premium website live in 7 days + Full brand package</p>
          </div>

          <div className={styles.formCard}>
            {success ? (
              <div className={styles.successMessage}>
                <h3>🎊 Thank You! Your Pro+ Journey Starts Now</h3>
                <p>Our team will start working on your complete digital marketing package immediately. You'll receive an email within 24 hours with:</p>
                <ul style={{ textAlign: 'left', marginTop: '1rem', paddingLeft: '2rem' }}>
                  <li>Access to your project dashboard</li>
                  <li>Your dedicated account manager's contact info</li>
                  <li>Schedule link for your first strategy session</li>
                  <li>Business card design proof within 48 hours</li>
                </ul>
                <p style={{ marginTop: '1rem' }}>Check your inbox at <strong>{formData.email}</strong></p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {error && (
                  <div className={styles.errorMessage}>
                    {error}
                  </div>
                )}

                {/* Bonus Callout */}
                <div className={styles.bonusCallout}>
                  <div className={styles.bonusTitle}>
                    🎁 Your Pro+ Benefits
                  </div>
                  <div className={styles.bonusText}>
                    You're getting the full package: Multi-page website, complete branding, SEO optimization, review management, social media assets, and 100 free business cards. Plus, you'll have a monthly 30-minute strategy session with our marketing experts. Let's make this count!
                  </div>
                </div>

                {/* Business Information */}
                <div className={styles.formSection}>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.sectionIcon}>🏢</span>
                    Business Information
                  </h2>
                  <p className={styles.sectionDescription}>Tell us about your service business</p>

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
                        Business Address <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="text"
                        name="businessAddress"
                        value={formData.businessAddress}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="123 Main St, Dallas, TX 75001"
                        required
                      />
                      <span className={styles.helpText}>Needed for Google Business Profile and local SEO</span>
                    </div>

                    <div className={styles.formGridTwo}>
                      <div className={styles.formGroup}>
                        <label className={styles.label}>
                          Service Area <span className={styles.required}>*</span>
                        </label>
                        <input
                          type="text"
                          name="serviceArea"
                          value={formData.serviceArea}
                          onChange={handleChange}
                          className={styles.input}
                          placeholder="e.g., Dallas metro, 30-mile radius"
                          required
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label className={styles.label}>
                          Years in Business
                        </label>
                        <input
                          type="text"
                          name="yearsInBusiness"
                          value={formData.yearsInBusiness}
                          onChange={handleChange}
                          className={styles.input}
                          placeholder="e.g., 15 years"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Website Content & Structure */}
                <div className={styles.formSection}>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.sectionIcon}>🌐</span>
                    Multi-Page Website Content
                  </h2>
                  <p className={styles.sectionDescription}>Pro+ includes 5+ pages - let's plan your site structure</p>

                  <div className={styles.formGrid}>
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
                      <span className={styles.helpText}>This will be featured on your homepage</span>
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
                        placeholder="List all services in detail - we'll create dedicated pages for each..."
                        required
                      />
                      <span className={styles.helpText}>Be comprehensive - each major service gets its own page</span>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>
                        What Makes You Different? <span className={styles.required}>*</span>
                      </label>
                      <textarea
                        name="keyDifferentiators"
                        value={formData.keyDifferentiators}
                        onChange={handleChange}
                        className={styles.textarea}
                        placeholder="Why should customers choose you over competitors? (e.g., 24/7 service, certified technicians, warranties...)"
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
                        placeholder="e.g., Homeowners and property managers in Dallas metro"
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>
                        Additional Pages Needed
                      </label>
                      <textarea
                        name="pageRequirements"
                        value={formData.pageRequirements}
                        onChange={handleChange}
                        className={styles.textarea}
                        placeholder="Any specific pages? (e.g., About Us, Service Areas, FAQ, Financing, Careers, Gallery...)"
                      />
                      <span className={styles.helpText}>Standard pages included: Home, Services, About, Contact, Testimonials</span>
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
                        placeholder="What actions should visitors take? (e.g., Call, book online, request quotes, sign up for maintenance plans...)"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* SEO & Local Search */}
                <div className={styles.formSection}>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.sectionIcon}>🔍</span>
                    SEO & Local Search Optimization
                  </h2>
                  <p className={styles.sectionDescription}>Let's get you found on Google</p>

                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>
                        Primary Keywords <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="text"
                        name="primaryKeywords"
                        value={formData.primaryKeywords}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="e.g., Dallas plumber, emergency plumbing Dallas, 24/7 plumber"
                        required
                      />
                      <span className={styles.helpText}>What do customers search for when looking for your services?</span>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>
                        Main Competitors
                      </label>
                      <input
                        type="text"
                        name="competitorNames"
                        value={formData.competitorNames}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="List 3-5 direct competitors (business names)"
                      />
                      <span className={styles.helpText}>Helps us understand your competitive landscape</span>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>
                        Do you have a Google Business Profile? <span className={styles.required}>*</span>
                      </label>
                      <select
                        name="googleBusinessExists"
                        value={formData.googleBusinessExists}
                        onChange={handleChange}
                        className={styles.select}
                        required
                      >
                        <option value="no">No, please help me set one up</option>
                        <option value="yes">Yes, I have one</option>
                        <option value="unsure">I'm not sure</option>
                      </select>
                    </div>

                    {formData.googleBusinessExists === 'yes' && (
                      <div className={styles.formGroup}>
                        <label className={styles.label}>
                          Google Business Profile Email
                        </label>
                        <input
                          type="email"
                          name="googleBusinessEmail"
                          value={formData.googleBusinessEmail}
                          onChange={handleChange}
                          className={styles.input}
                          placeholder="Email used for Google Business"
                        />
                        <span className={styles.helpText}>We'll need access to optimize it</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Branding Package */}
                <div className={styles.formSection}>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.sectionIcon}>🎨</span>
                    Complete Brand Package
                  </h2>
                  <p className={styles.sectionDescription}>Logo, colors, and full brand identity</p>

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
                        placeholder="e.g., Blue and orange, professional and trustworthy"
                      />
                      <span className={styles.helpText}>What colors represent your business?</span>
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
                        <option value="professional">Professional & Corporate</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>
                        Brand Personality
                      </label>
                      <input
                        type="text"
                        name="brandPersonality"
                        value={formData.brandPersonality}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="e.g., Friendly, professional, reliable, innovative"
                      />
                      <span className={styles.helpText}>How should your brand feel to customers?</span>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>
                        Competitor/Inspiration Websites
                      </label>
                      <textarea
                        name="competitorWebsites"
                        value={formData.competitorWebsites}
                        onChange={handleChange}
                        className={styles.textarea}
                        placeholder="List any competitor or industry websites you admire (URLs or business names)"
                      />
                      <span className={styles.helpText}>Helps us understand your style preferences</span>
                    </div>
                  </div>
                </div>

                {/* Review Management */}
                <div className={styles.formSection}>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.sectionIcon}>⭐</span>
                    Review Management System
                  </h2>
                  <p className={styles.sectionDescription}>Let's build your online reputation</p>

                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>
                        Which review platforms do you use? <span className={styles.required}>*</span>
                      </label>
                      <div className={styles.checkboxGroup}>
                        <label className={styles.checkboxLabel}>
                          <input
                            type="checkbox"
                            name="reviewPlatforms"
                            value="google"
                            checked={formData.reviewPlatforms.includes('google')}
                            onChange={handleChange}
                            className={styles.checkbox}
                          />
                          <div className={styles.checkboxText}>
                            <div className={styles.checkboxTitle}>Google Reviews</div>
                            <div className={styles.checkboxDescription}>Most important for local SEO</div>
                          </div>
                        </label>

                        <label className={styles.checkboxLabel}>
                          <input
                            type="checkbox"
                            name="reviewPlatforms"
                            value="yelp"
                            checked={formData.reviewPlatforms.includes('yelp')}
                            onChange={handleChange}
                            className={styles.checkbox}
                          />
                          <div className={styles.checkboxText}>
                            <div className={styles.checkboxTitle}>Yelp</div>
                            <div className={styles.checkboxDescription}>Popular for home services</div>
                          </div>
                        </label>

                        <label className={styles.checkboxLabel}>
                          <input
                            type="checkbox"
                            name="reviewPlatforms"
                            value="facebook"
                            checked={formData.reviewPlatforms.includes('facebook')}
                            onChange={handleChange}
                            className={styles.checkbox}
                          />
                          <div className={styles.checkboxText}>
                            <div className={styles.checkboxTitle}>Facebook</div>
                            <div className={styles.checkboxDescription}>Social proof and visibility</div>
                          </div>
                        </label>

                        <label className={styles.checkboxLabel}>
                          <input
                            type="checkbox"
                            name="reviewPlatforms"
                            value="bbb"
                            checked={formData.reviewPlatforms.includes('bbb')}
                            onChange={handleChange}
                            className={styles.checkbox}
                          />
                          <div className={styles.checkboxText}>
                            <div className={styles.checkboxTitle}>Better Business Bureau</div>
                            <div className={styles.checkboxDescription}>Trust and credibility</div>
                          </div>
                        </label>

                        <label className={styles.checkboxLabel}>
                          <input
                            type="checkbox"
                            name="reviewPlatforms"
                            value="other"
                            checked={formData.reviewPlatforms.includes('other')}
                            onChange={handleChange}
                            className={styles.checkbox}
                          />
                          <div className={styles.checkboxText}>
                            <div className={styles.checkboxTitle}>Other</div>
                            <div className={styles.checkboxDescription}>Specify in additional notes</div>
                          </div>
                        </label>
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>
                        Current Review Strategy
                      </label>
                      <textarea
                        name="currentReviewStrategy"
                        value={formData.currentReviewStrategy}
                        onChange={handleChange}
                        className={styles.textarea}
                        placeholder="How do you currently ask customers for reviews? What's working or not working?"
                      />
                    </div>
                  </div>
                </div>

                {/* Social Media & Marketing */}
                <div className={styles.formSection}>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.sectionIcon}>📱</span>
                    Social Media & Marketing Assets
                  </h2>
                  <p className={styles.sectionDescription}>Templates and ad creatives for your campaigns</p>

                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>
                        Social Media Accounts
                      </label>
                      <input
                        type="text"
                        name="socialMediaAccounts"
                        value={formData.socialMediaAccounts}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="e.g., Facebook: @eliteplumbing, Instagram: @eliteplumbing"
                      />
                      <span className={styles.helpText}>We'll create custom graphics for your accounts</span>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>
                        Marketing Goals
                      </label>
                      <textarea
                        name="marketingGoals"
                        value={formData.marketingGoals}
                        onChange={handleChange}
                        className={styles.textarea}
                        placeholder="What are your marketing priorities? (e.g., more leads, brand awareness, seasonal promotions...)"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>
                        Advertising Budget (if any)
                      </label>
                      <select
                        name="adBudget"
                        value={formData.adBudget}
                        onChange={handleChange}
                        className={styles.select}
                      >
                        <option value="">Select budget range...</option>
                        <option value="none">Not advertising yet</option>
                        <option value="under-500">Under $500/month</option>
                        <option value="500-1000">$500 - $1,000/month</option>
                        <option value="1000-2500">$1,000 - $2,500/month</option>
                        <option value="2500-plus">$2,500+/month</option>
                      </select>
                      <span className={styles.helpText}>Helps us create appropriate ad templates</span>
                    </div>
                  </div>
                </div>

                {/* Business Cards */}
                <div className={styles.formSection}>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.sectionIcon}>💳</span>
                    Free Business Cards (100 cards)
                  </h2>
                  <p className={styles.sectionDescription}>Professional cards shipping to you within 2 weeks</p>

                  <div className={styles.formGrid}>
                    <div className={styles.formGridTwo}>
                      <div className={styles.formGroup}>
                        <label className={styles.label}>
                          Name on Card <span className={styles.required}>*</span>
                        </label>
                        <input
                          type="text"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleChange}
                          className={styles.input}
                          placeholder="John Smith"
                          required
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label className={styles.label}>
                          Title/Position <span className={styles.required}>*</span>
                        </label>
                        <input
                          type="text"
                          name="cardTitle"
                          value={formData.cardTitle}
                          onChange={handleChange}
                          className={styles.input}
                          placeholder="e.g., Owner, Master Plumber"
                          required
                        />
                      </div>
                    </div>

                    <div className={styles.formGridTwo}>
                      <div className={styles.formGroup}>
                        <label className={styles.label}>
                          Email for Card <span className={styles.required}>*</span>
                        </label>
                        <input
                          type="email"
                          name="cardEmail"
                          value={formData.cardEmail}
                          onChange={handleChange}
                          className={styles.input}
                          placeholder="john@eliteplumbing.com"
                          required
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label className={styles.label}>
                          Phone for Card <span className={styles.required}>*</span>
                        </label>
                        <input
                          type="tel"
                          name="cardPhone"
                          value={formData.cardPhone}
                          onChange={handleChange}
                          className={styles.input}
                          placeholder="(555) 123-4567"
                          required
                        />
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>
                        Mailing Address for Card Delivery <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="text"
                        name="mailingAddress"
                        value={formData.mailingAddress}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="123 Main St, Dallas, TX 75001"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Monthly Strategy Session */}
                <div className={styles.formSection}>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.sectionIcon}>📊</span>
                    Monthly Strategy Sessions
                  </h2>
                  <p className={styles.sectionDescription}>30 minutes each month with our marketing experts</p>

                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>
                        Topics You'd Like to Cover
                      </label>
                      <textarea
                        name="strategySessionTopics"
                        value={formData.strategySessionTopics}
                        onChange={handleChange}
                        className={styles.textarea}
                        placeholder="e.g., SEO strategy, lead generation, conversion optimization, seasonal campaigns..."
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>
                        Current Business Challenges
                      </label>
                      <textarea
                        name="businessChallenges"
                        value={formData.businessChallenges}
                        onChange={handleChange}
                        className={styles.textarea}
                        placeholder="What marketing challenges are you facing? What would help you grow?"
                      />
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
                          placeholder="e.g., eliteplumbing.com"
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
                    Additional Information
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
                  {loading ? 'Submitting...' : '🚀 Submit & Start My Pro+ Journey'}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </>
  )
}

export default function ProOnboarding() {
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
      <ProOnboardingForm />
    </Suspense>
  )
}
