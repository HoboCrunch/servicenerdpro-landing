'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '../components/Header'
import styles from './page.module.css'

export default function Onboarding() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    // Business Information
    businessName: '',
    businessType: '',
    phoneNumber: '',
    website: '',

    // Location
    address: '',
    city: '',
    state: '',
    zipCode: '',

    // Services
    services: '',
    targetCustomers: '',

    // Branding Preferences
    brandColors: '',
    brandStyle: '',
    competitors: '',

    // Additional Info
    currentMarketing: '',
    goals: '',
    additionalNotes: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // TODO: Save onboarding data to your database
      console.log('Onboarding data:', formData)

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Redirect to calendar booking
      // Replace with your actual Calendly or Cal.com link
      window.location.href = 'https://calendly.com/your-link'
    } catch (error) {
      console.error('Onboarding error:', error)
      alert('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>Let's Get Started!</h1>
            <p className={styles.subtitle}>
              Tell us about your business so we can create the perfect website, branding, and marketing strategy for you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            {/* Business Information */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Business Information</h2>

              <div className={styles.formGroup}>
                <label htmlFor="businessName" className={styles.label}>
                  Business Name <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="e.g., Smith Plumbing Services"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="businessType" className={styles.label}>
                  Type of Service Business <span className={styles.required}>*</span>
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                  className={styles.select}
                >
                  <option value="">Select your business type</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="hvac">HVAC</option>
                  <option value="electrical">Electrical</option>
                  <option value="landscaping">Landscaping</option>
                  <option value="cleaning">Cleaning Services</option>
                  <option value="roofing">Roofing</option>
                  <option value="painting">Painting</option>
                  <option value="general-contractor">General Contractor</option>
                  <option value="pest-control">Pest Control</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="phoneNumber" className={styles.label}>
                    Phone Number <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="website" className={styles.label}>
                    Current Website (if any)
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="https://yourwebsite.com"
                  />
                </div>
              </div>
            </section>

            {/* Location */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Service Location</h2>

              <div className={styles.formGroup}>
                <label htmlFor="address" className={styles.label}>
                  Street Address <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="123 Main Street"
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="city" className={styles.label}>
                    City <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Denver"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="state" className={styles.label}>
                    State <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="CO"
                    maxLength={2}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="zipCode" className={styles.label}>
                    ZIP Code <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="80202"
                    maxLength={5}
                  />
                </div>
              </div>
            </section>

            {/* Services & Target Market */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Services & Target Market</h2>

              <div className={styles.formGroup}>
                <label htmlFor="services" className={styles.label}>
                  What services do you offer? <span className={styles.required}>*</span>
                </label>
                <textarea
                  id="services"
                  name="services"
                  value={formData.services}
                  onChange={handleChange}
                  required
                  className={styles.textarea}
                  rows={4}
                  placeholder="e.g., Residential plumbing repairs, drain cleaning, water heater installation, emergency services..."
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="targetCustomers" className={styles.label}>
                  Who are your ideal customers? <span className={styles.required}>*</span>
                </label>
                <textarea
                  id="targetCustomers"
                  name="targetCustomers"
                  value={formData.targetCustomers}
                  onChange={handleChange}
                  required
                  className={styles.textarea}
                  rows={3}
                  placeholder="e.g., Homeowners in suburban areas, property managers, small businesses..."
                />
              </div>
            </section>

            {/* Branding Preferences */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Branding Preferences</h2>

              <div className={styles.formGroup}>
                <label htmlFor="brandColors" className={styles.label}>
                  Preferred Colors (if any)
                </label>
                <input
                  type="text"
                  id="brandColors"
                  name="brandColors"
                  value={formData.brandColors}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="e.g., Blue and orange, earthy tones, professional colors..."
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="brandStyle" className={styles.label}>
                  Brand Style/Personality
                </label>
                <input
                  type="text"
                  id="brandStyle"
                  name="brandStyle"
                  value={formData.brandStyle}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="e.g., Professional and trustworthy, modern and sleek, friendly and approachable..."
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="competitors" className={styles.label}>
                  Competitors or websites you admire
                </label>
                <textarea
                  id="competitors"
                  name="competitors"
                  value={formData.competitors}
                  onChange={handleChange}
                  className={styles.textarea}
                  rows={3}
                  placeholder="Share any competitor websites or examples you like (or want to avoid)..."
                />
              </div>
            </section>

            {/* Goals & Additional Info */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Goals & Additional Information</h2>

              <div className={styles.formGroup}>
                <label htmlFor="currentMarketing" className={styles.label}>
                  Current marketing efforts
                </label>
                <textarea
                  id="currentMarketing"
                  name="currentMarketing"
                  value={formData.currentMarketing}
                  onChange={handleChange}
                  className={styles.textarea}
                  rows={3}
                  placeholder="What marketing have you done? Social media, ads, word of mouth, etc."
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="goals" className={styles.label}>
                  What are your main goals? <span className={styles.required}>*</span>
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  value={formData.goals}
                  onChange={handleChange}
                  required
                  className={styles.textarea}
                  rows={3}
                  placeholder="e.g., Get more leads, look more professional, rank higher on Google, beat competitors..."
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="additionalNotes" className={styles.label}>
                  Anything else we should know?
                </label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  className={styles.textarea}
                  rows={4}
                  placeholder="Any special requirements, features you need, or information that will help us serve you better..."
                />
              </div>
            </section>

            <div className={styles.submitSection}>
              <button
                type="submit"
                disabled={loading}
                className={styles.submitButton}
              >
                {loading ? 'Submitting...' : 'Complete & Book Your Kickoff Call →'}
              </button>
              <p className={styles.helperText}>
                After submitting, you'll be redirected to schedule your kickoff call with our team.
              </p>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}
