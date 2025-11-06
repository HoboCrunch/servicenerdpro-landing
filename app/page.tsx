import styles from './page.module.css'
import Header from './components/Header'
import BentoGrid from './components/BentoGrid'

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.heroBadge}>🚀 Professional Service Business Websites</div>
              <h1 className={styles.heroTitle}>
                Stop Losing Customers to Online Competition
              </h1>
              <p className={styles.heroSubtitle}>
                Get a professional website, branding, and Google presence for your service business—delivered in 7 days.
                No tech skills required. No $5,000 upfront fees.
              </p>
              <div className={styles.heroValue}>
                <div className={styles.priceTag}>
                  <span className={styles.priceAmount}>$199</span>
                  <span className={styles.pricePeriod}>/month</span>
                </div>
                <div className={styles.priceDetails}>
                  <div className={styles.priceFeature}>✓ Website Design & Hosting</div>
                  <div className={styles.priceFeature}>✓ Professional Branding</div>
                  <div className={styles.priceFeature}>✓ Google Business Setup</div>
                </div>
              </div>
              <div className={styles.ctaButtons}>
                <button className={styles.primaryButton}>Get Your Website in 7 Days</button>
                <button className={styles.secondaryButton}>See Examples</button>
              </div>
            </div>
          </div>
        </section>

      {/* Risk Reduction Bar */}
      <section className={styles.trustBar}>
        <div className={styles.container}>
          <div className={styles.trustBarContent}>
            <div className={styles.trustItem}>
              <svg className={styles.checkmarkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="url(#gradient1)" />
                <path d="M8 12.5L10.5 15L16 9.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#fb923c" />
                  </linearGradient>
                </defs>
              </svg>
              <div className={styles.trustTextContent}>
                <div className={styles.trustTitle}>7-Day Delivery</div>
                <div className={styles.trustSubtitle}>Your website goes live in one week</div>
              </div>
            </div>
            <div className={styles.trustItem}>
              <svg className={styles.checkmarkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="url(#gradient2)" />
                <path d="M8 12.5L10.5 15L16 9.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#fb923c" />
                  </linearGradient>
                </defs>
              </svg>
              <div className={styles.trustTextContent}>
                <div className={styles.trustTitle}>Money Back Guarantee</div>
                <div className={styles.trustSubtitle}>Cancel in first month, get refunded</div>
              </div>
            </div>
            <div className={styles.trustItem}>
              <svg className={styles.checkmarkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="url(#gradient3)" />
                <path d="M8 12.5L10.5 15L16 9.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#fb923c" />
                  </linearGradient>
                </defs>
              </svg>
              <div className={styles.trustTextContent}>
                <div className={styles.trustTitle}>12-Month Price Lock</div>
                <div className={styles.trustSubtitle}>No surprise price increases for a year</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why Service Nerd <span className={styles.proText}>Pro<sup className={styles.plusSuper}>+</sup></span></h2>
          <p className={styles.sectionSubtitle}>
            <span className={styles.strikethrough}>Invisible & unprofessional</span>
            <span className={styles.arrow}>➜</span>
            <span className={styles.transformation}>Premium & credible</span>
          </p>

          <BentoGrid />
        </div>
      </section>

      {/* Social Proof Section */}
      <section className={styles.socialProof}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Join 10,000+ Service Professionals</h2>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>10k+</div>
              <div className={styles.statLabel}>Active Users</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>50k+</div>
              <div className={styles.statLabel}>Appointments Booked</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>4.9/5</div>
              <div className={styles.statLabel}>User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Ready to Grow Your Service Business?</h2>
          <p className={styles.ctaSubtitle}>
            Start your 14-day free trial. No credit card required.
          </p>
          <button className={styles.primaryButton}>Start Free Trial</button>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>&copy; 2025 ServiceNerd Pro. All rights reserved.</p>
        </div>
      </footer>
    </main>
    </>
  )
}
