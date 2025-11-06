import styles from './page.module.css'
import Header from '../components/Header'
import Link from 'next/link'

export default function DigitalMarketing() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.heroBadge}>📈 Digital Marketing</div>
              <h1 className={styles.heroTitle}>
                Get Found by Customers<br />Searching for Your Services
              </h1>
              <p className={styles.heroSubtitle}>
                Stop waiting for the phone to ring. Our digital marketing gets you to the top of Google,
                drives real leads, and fills your calendar—all while you focus on doing the work you love.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/pricing">
                  <button className={styles.primaryButton}>Get Started - $199/mo</button>
                </Link>
                <button className={styles.secondaryButton}>See Results</button>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className={styles.problemSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>You're Invisible Online</h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>🔍</div>
                <h3>Not on Google</h3>
                <p>When locals search for your services, competitors show up. You don't. You're losing jobs daily.</p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>💸</div>
                <h3>Wasting Ad Spend</h3>
                <p>Facebook ads that don't convert. Google Ads that drain your budget with zero ROI.</p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>😫</div>
                <h3>Marketing Confusion</h3>
                <p>SEO, PPC, social media—it's overwhelming. You need someone to just handle it.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.features}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>What's Included</h2>
            <p className={styles.sectionSubtitle}>
              Complete digital marketing that drives real results
            </p>

            <div className={styles.featureGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🗺️</div>
                <h3>Google Business Profile</h3>
                <p>Setup and optimization so you show up in Google Maps and local search. The #1 way customers find service providers.</p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🔍</div>
                <h3>Local SEO</h3>
                <p>Rank higher for "near me" searches. When someone searches for your service + your city, you'll be there.</p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>⭐</div>
                <h3>Review Management</h3>
                <p>Get more 5-star reviews and manage your online reputation. Reviews are the new word-of-mouth.</p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📱</div>
                <h3>Social Media Setup</h3>
                <p>Professional profiles across all platforms. Look credible everywhere customers look for you.</p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📧</div>
                <h3>Email Marketing</h3>
                <p>Stay top-of-mind with past customers. Automated follow-ups that bring repeat business.</p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📊</div>
                <h3>Performance Reports</h3>
                <p>See exactly where your leads come from. Clear monthly reports show your ROI.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className={styles.resultsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Real Results from Service Pros Like You</h2>
            <div className={styles.resultsGrid}>
              <div className={styles.resultCard}>
                <div className={styles.resultMetric}>247%</div>
                <p>Increase in website traffic in first 90 days</p>
              </div>
              <div className={styles.resultCard}>
                <div className={styles.resultMetric}>3.2x</div>
                <p>More leads per month on average</p>
              </div>
              <div className={styles.resultCard}>
                <div className={styles.resultMetric}>$18k</div>
                <p>Average revenue increase in first 6 months</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className={styles.processSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>How It Works</h2>
            <div className={styles.processSteps}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>1</div>
                <h3>Marketing Audit</h3>
                <p>We analyze your current online presence and identify quick wins.</p>
              </div>
              <div className={styles.processArrow}>→</div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>2</div>
                <h3>Strategy & Setup</h3>
                <p>We optimize your listings, launch campaigns, and set up tracking.</p>
              </div>
              <div className={styles.processArrow}>→</div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>3</div>
                <h3>Leads Start Flowing</h3>
                <p>Watch your phone ring with qualified leads ready to book.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className={styles.socialProof}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Trusted by 1,000+ Service Businesses</h2>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>50k+</div>
                <div className={styles.statLabel}>Leads Generated</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>94%</div>
                <div className={styles.statLabel}>Client Retention Rate</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>$2.4M+</div>
                <div className={styles.statLabel}>Revenue Generated for Clients</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <h2 className={styles.ctaTitle}>Ready to Get More Leads?</h2>
            <p className={styles.ctaSubtitle}>
              Start showing up in local search and getting found by ready-to-buy customers.
            </p>
            <Link href="/pricing">
              <button className={styles.primaryButton}>Start Getting Leads</button>
            </Link>
            <p className={styles.guarantee}>✓ Results in 30 Days  ✓ Cancel Anytime</p>
          </div>
        </section>
      </main>
    </>
  )
}
