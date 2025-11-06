'use client'

import styles from './page.module.css'
import Header from '../components/Header'
import Link from 'next/link'
import PricingCard from './PricingCard'

export default function PricingClient() {
  const starterPriceId = process.env.NEXT_PUBLIC_STRIPE_STARTER_PRICE_ID || ''
  const proPriceId = process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE_ID || ''
  const enterprisePriceId = process.env.NEXT_PUBLIC_STRIPE_ENTERPRISE_PRICE_ID || ''

  const starterFeatures = [
    { text: '✓ Single Page Website', included: true },
    { text: '✓ Logo Design', included: true },
    { text: '✓ 0 Downtime Hosting', included: true },
    { text: '✓ 24/7 Support', included: true },
    { text: '✗ Multi-Page Website', included: false },
    { text: '✗ Local SEO Optimization', included: false },
    { text: '✗ Review Management', included: false },
    { text: '✗ Brand Assets Package', included: false },
    { text: '✗ Monthly Strategy Sessions', included: false },
  ]

  const proFeatures = [
    { text: '✓ Everything in Starter, plus:', included: true },
    { text: '✓ Unlimited Pages (5+ pages included)', included: true },
    { text: '✓ Logo, Brand Colors & Brand Assets', included: true },
    { text: '✓ Organic SEO Optimization', included: true },
    { text: '✓ Local Search Optimization', included: true },
    { text: '✓ Review Management System', included: true },
    { text: '✓ Social Media Templates & Ad Templates', included: true },
    { text: '✓ Brand Images', included: true },
    { text: '✓ Monthly 30min Marketing Strategy Session', included: true },
    { text: '🎁 100 Free Business Cards on Signup', included: true },
  ]

  const enterpriseFeatures = [
    { text: '✓ Custom solution tailored to your needs', included: true },
    { text: '✓ Multi-Location Support', included: true },
    { text: '✓ Advanced Analytics & Reporting', included: true },
    { text: '✓ Paid Advertising Management', included: true },
    { text: '✓ Social Media Management', included: true },
    { text: '✓ Dedicated Account Manager', included: true },
    { text: '✓ Priority Support', included: true },
    { text: '✓ Custom Integrations', included: true },
    { text: '✓ White-Label Options', included: true },
  ]

  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Simple, Transparent Pricing
              </h1>
              <p className={styles.heroSubtitle}>
                No hidden fees. No surprises. Just professional service business marketing that actually works.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className={styles.pricingSection}>
          <div className={styles.container}>
            <div className={styles.pricingGrid}>
              <PricingCard
                planName="Starter"
                price={99}
                description="Perfect for solo service pros just getting started"
                features={starterFeatures}
                priceId={starterPriceId}
              />

              <PricingCard
                planName="Pro+"
                price={199}
                description="Everything you need to dominate your local market"
                features={proFeatures}
                priceId={proPriceId}
                featured={true}
              />

              <div className={styles.pricingCard}>
                <div className={styles.planHeader}>
                  <h3 className={styles.planName}>Enterprise</h3>
                  <div className={styles.planPrice}>
                    <span className={styles.customPricing}>Custom Pricing</span>
                  </div>
                  <p className={styles.planDescription}>Custom solutions for established businesses</p>
                </div>
                <div className={styles.planFeatures}>
                  {enterpriseFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className={feature.included ? styles.feature : styles.featureDisabled}
                    >
                      {feature.text}
                    </div>
                  ))}
                </div>
                <a href="mailto:sales@servicenerdpro.com?subject=Enterprise Plan Inquiry" className={styles.contactLink}>
                  <button className={styles.selectButton}>
                    Contact Us
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className={styles.comparisonSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Compare Plans</h2>
            <div className={styles.comparisonTable}>
              <div className={styles.tableHeader}>
                <div className={styles.featureColumn}>Features</div>
                <div className={styles.planColumn}>Starter</div>
                <div className={styles.planColumn}>Pro</div>
                <div className={styles.planColumn}>Enterprise</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.featureColumn}>Website Design</div>
                <div className={styles.planColumn}>✓</div>
                <div className={styles.planColumn}>✓</div>
                <div className={styles.planColumn}>✓</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.featureColumn}>Branding Package</div>
                <div className={styles.planColumn}>Basic</div>
                <div className={styles.planColumn}>Complete</div>
                <div className={styles.planColumn}>Complete</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.featureColumn}>Local SEO</div>
                <div className={styles.planColumn}>—</div>
                <div className={styles.planColumn}>✓</div>
                <div className={styles.planColumn}>✓</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.featureColumn}>Monthly Updates</div>
                <div className={styles.planColumn}>—</div>
                <div className={styles.planColumn}>✓</div>
                <div className={styles.planColumn}>Weekly</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.featureColumn}>Email Marketing</div>
                <div className={styles.planColumn}>—</div>
                <div className={styles.planColumn}>Setup</div>
                <div className={styles.planColumn}>Full Management</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.featureColumn}>Social Media</div>
                <div className={styles.planColumn}>—</div>
                <div className={styles.planColumn}>Setup</div>
                <div className={styles.planColumn}>Full Management</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.featureColumn}>Support</div>
                <div className={styles.planColumn}>Email</div>
                <div className={styles.planColumn}>Email + Chat</div>
                <div className={styles.planColumn}>Priority + Phone</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faqSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>Can I cancel anytime?</h3>
                <p>Yes! All plans are month-to-month with no long-term contracts. Cancel anytime with 30 days notice.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Do you offer refunds?</h3>
                <p>We offer a 30-day money-back guarantee. If you're not satisfied in your first month, we'll refund you in full.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>How long until my website is live?</h3>
                <p>Most websites go live within 7 business days. We'll work with you to ensure everything is perfect before launch.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>What if I need custom features?</h3>
                <p>Enterprise clients get custom integrations included. For Starter and Pro plans, we offer custom development at an hourly rate.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Do I own the website and brand assets?</h3>
                <p>Yes! You own all the designs, content, and brand materials we create for you.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I upgrade or downgrade my plan?</h3>
                <p>Absolutely! You can change your plan anytime. Upgrades take effect immediately, downgrades at your next billing cycle.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <h2 className={styles.ctaTitle}>Ready to Grow Your Service Business?</h2>
            <p className={styles.ctaSubtitle}>
              Join 10,000+ service professionals who trust Service Nerd Pro
            </p>
            <div className={styles.ctaButtons}>
              <Link href="#pricing">
                <button className={styles.primaryButton}>View Plans</button>
              </Link>
              <Link href="/">
                <button className={styles.secondaryButton}>Learn More</button>
              </Link>
            </div>
            <p className={styles.guarantee}>✓ 30-Day Money Back Guarantee  ✓ Setup in 7 days  ✓ Cancel anytime</p>
          </div>
        </section>
      </main>
    </>
  )
}
