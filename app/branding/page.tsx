import styles from './page.module.css'
import Header from '../components/Header'
import Link from 'next/link'

export default function Branding() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.heroBadge}>✨ Bitchin' Branding</div>
              <h1 className={styles.heroTitle}>
                Stop Looking Amateur.<br />Start Looking Established.
              </h1>
              <p className={styles.heroSubtitle}>
                Your brand is your first impression. Make it count. Professional logo, colors, and brand identity
                that makes customers trust you instantly—even if you started last week.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/pricing">
                  <button className={styles.primaryButton}>Get Started - $199/mo</button>
                </Link>
                <button className={styles.secondaryButton}>See Portfolio</button>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className={styles.problemSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Your Brand Is Hurting Your Business</h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>🎨</div>
                <h3>DIY Disaster</h3>
                <p>That logo you made on Canva? Customers can tell. It screams "unprofessional."</p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>🤷</div>
                <h3>No Consistency</h3>
                <p>Different colors everywhere. Random fonts. Your business looks disorganized and messy.</p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>😬</div>
                <h3>Can't Compete</h3>
                <p>Competitors with professional branding win jobs—even if you're better at the actual work.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.features}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>What You Get</h2>
            <p className={styles.sectionSubtitle}>
              Complete brand identity that makes you look established
            </p>

            <div className={styles.featureGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🎯</div>
                <h3>Custom Logo Design</h3>
                <p>Professional logo created by real designers. Multiple concepts, unlimited revisions until you love it.</p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🎨</div>
                <h3>Brand Color Palette</h3>
                <p>Strategic colors that work together and represent your business personality. No more guessing.</p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📝</div>
                <h3>Typography System</h3>
                <p>Professional font choices for all your materials. Consistent and easy to read everywhere.</p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📋</div>
                <h3>Brand Guidelines</h3>
                <p>Simple guide showing how to use your brand. You'll never wonder "does this look right?"</p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📇</div>
                <h3>Business Card Design</h3>
                <p>Print-ready business cards that make a great first impression. Professional templates included.</p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📄</div>
                <h3>All File Formats</h3>
                <p>Your logo in every format you'll need: PNG, JPG, SVG, PDF. Use it anywhere, instantly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Section */}
        <section className={styles.beforeAfterSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>The Transformation</h2>
            <p className={styles.sectionSubtitle}>From "meh" to memorable</p>
            <div className={styles.beforeAfterGrid}>
              <div className={styles.beforeCard}>
                <div className={styles.label}>Before</div>
                <div className={styles.beforeContent}>
                  <p>❌ Generic template logos</p>
                  <p>❌ Clashing random colors</p>
                  <p>❌ Inconsistent look</p>
                  <p>❌ Customers question credibility</p>
                </div>
              </div>
              <div className={styles.arrow}>→</div>
              <div className={styles.afterCard}>
                <div className={styles.label}>After</div>
                <div className={styles.afterContent}>
                  <p>✅ Unique professional logo</p>
                  <p>✅ Strategic color system</p>
                  <p>✅ Consistent everywhere</p>
                  <p>✅ Instant trust & credibility</p>
                </div>
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
                <h3>Brand Discovery</h3>
                <p>Quick call to understand your business, values, and target customers.</p>
              </div>
              <div className={styles.processArrow}>→</div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>2</div>
                <h3>Design Concepts</h3>
                <p>We create 3 logo concepts. You pick your favorite and request changes.</p>
              </div>
              <div className={styles.processArrow}>→</div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>3</div>
                <h3>Finalize & Deliver</h3>
                <p>Get your complete brand package in all formats, ready to use everywhere.</p>
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
                <div className={styles.statNumber}>800+</div>
                <div className={styles.statLabel}>Brands Created</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>4.9/5</div>
                <div className={styles.statLabel}>Client Satisfaction</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>100%</div>
                <div className={styles.statLabel}>Unique Designs</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <h2 className={styles.ctaTitle}>Ready to Look Legit?</h2>
            <p className={styles.ctaSubtitle}>
              Get a professional brand that makes customers trust you from the first glance.
            </p>
            <Link href="/pricing">
              <button className={styles.primaryButton}>Start Your Rebrand</button>
            </Link>
            <p className={styles.guarantee}>✓ Unlimited Revisions  ✓ 100% Satisfaction Guarantee</p>
          </div>
        </section>
      </main>
    </>
  )
}
