import styles from './page.module.css'
import Header from '../components/Header'
import Link from 'next/link'

export default function WebsiteDesign() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.heroBadge}>🎨 Website Design</div>
              <h1 className={styles.heroTitle}>
                Your Professional Website,<br />Built in 7 Days
              </h1>
              <p className={styles.heroSubtitle}>
                Stop losing customers to competitors with better websites. Get a custom-designed,
                mobile-ready site that converts visitors into paying customers—without the $5,000 agency price tag.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/pricing">
                  <button className={styles.primaryButton}>Get Started - $199/mo</button>
                </Link>
                <button className={styles.secondaryButton}>See Examples</button>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className={styles.problemSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Your Current Website Is Costing You Jobs</h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>📱</div>
                <h3>Instagram Isn't Enough</h3>
                <p>Social media profiles look unprofessional. Customers want a real website they can trust.</p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>🎭</div>
                <h3>DIY Sites Look Cheap</h3>
                <p>Wix and Squarespace templates scream "amateur hour." You deserve better.</p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>⏰</div>
                <h3>No Time to Learn</h3>
                <p>You're running a business, not becoming a web designer. Let the pros handle it.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.features}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>What You Get</h2>
            <p className={styles.sectionSubtitle}>
              Everything you need for a professional online presence
            </p>

            <div className={styles.featureGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🎨</div>
                <h3>Custom Design</h3>
                <p>Not a template. Your website is designed specifically for your business and brand.</p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📱</div>
                <h3>Mobile-First</h3>
                <p>Looks perfect on every device. 70% of your customers browse on mobile.</p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>⚡</div>
                <h3>Lightning Fast</h3>
                <p>Optimized for speed. Fast sites rank higher on Google and convert better.</p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🔍</div>
                <h3>SEO Optimized</h3>
                <p>Built to rank on Google from day one. Get found by local customers searching for your services.</p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📞</div>
                <h3>Lead Generation</h3>
                <p>Contact forms, click-to-call buttons, and booking systems that turn visitors into customers.</p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🔒</div>
                <h3>Secure & Reliable</h3>
                <p>SSL certificates, daily backups, and 99.9% uptime. Your site stays online and safe.</p>
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
                <h3>Tell Us About Your Business</h3>
                <p>Quick 15-minute call to understand your services, brand, and goals.</p>
              </div>
              <div className={styles.processArrow}>→</div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>2</div>
                <h3>We Design & Build</h3>
                <p>Our team creates your custom website. You review and request changes.</p>
              </div>
              <div className={styles.processArrow}>→</div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>3</div>
                <h3>Launch in 7 Days</h3>
                <p>Your professional website goes live. Start attracting premium customers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className={styles.socialProof}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Trusted by Service Professionals</h2>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>500+</div>
                <div className={styles.statLabel}>Websites Delivered</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>7 Days</div>
                <div className={styles.statLabel}>Average Launch Time</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>98%</div>
                <div className={styles.statLabel}>Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <h2 className={styles.ctaTitle}>Ready for Your Professional Website?</h2>
            <p className={styles.ctaSubtitle}>
              Join hundreds of service professionals who've upgraded their online presence.
            </p>
            <Link href="/pricing">
              <button className={styles.primaryButton}>Get Started Today</button>
            </Link>
            <p className={styles.guarantee}>✓ 7-Day Delivery Guarantee  ✓ Money-Back if Not Satisfied</p>
          </div>
        </section>
      </main>
    </>
  )
}
