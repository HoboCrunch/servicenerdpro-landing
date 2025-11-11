'use client'

import Link from 'next/link'
import styles from '../page.module.css'
import Header from './Header'
import BentoGrid from './BentoGrid'
import StickyMobileCTA from './StickyMobileCTA'
import { trackCTAClick } from '../utils/analytics'
import { usePageTracking } from '../hooks/usePageTracking'

export default function HomeClient() {
  // Track page engagement
  usePageTracking()

  return (
    <>
      <Header />
      <StickyMobileCTA />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Launch Your Online Presence, Land Premium Jobs
              </h1>
              <p className={styles.heroSubtitle}>
                Professional website, branding, and Google presence—delivered in 7 days. Stop losing customers to competitors with better online presence.
              </p>
              <div className={styles.heroValue}>
                <div className={styles.priceTag}>
                  <span className={styles.priceAmount}>$199</span>
                  <span className={styles.pricePeriod}>/month</span>
                </div>
                <div className={styles.priceDetails}>
                  <div className={styles.priceFeature}>✓ Web design, hosting, & SEO</div>
                  <div className={styles.priceFeature}>✓ Professional Branding Kit</div>
                  <div className={styles.priceFeature}>✓ Online Marketing Foundation</div>
                </div>
              </div>
              <div className={styles.ctaButtons}>
                <Link
                  href="/pricing"
                  onClick={() => trackCTAClick('hero', 'Get Started—7 Day Delivery', '/pricing')}
                >
                  <button className={styles.primaryButton}>Get Started—7 Day Delivery</button>
                </Link>
                <Link
                  href="/testimonials"
                  onClick={() => trackCTAClick('hero', 'See Results', '/testimonials')}
                >
                  <button className={styles.secondaryButton}>See Results</button>
                </Link>
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
                  <div className={styles.trustTitle}>30-Day Money-Back Guarantee</div>
                  <div className={styles.trustSubtitle}>Full refund if you cancel within 30 days</div>
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
            <BentoGrid />
          </div>
        </section>

        {/* Social Proof Section */}
        <section className={styles.socialProof}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>The Online Partner You Can Trust</h2>
            <p className={styles.sectionSubtitle}>
              Real Business Transformations from existing <span style={{ color: 'var(--primary-blue-dark)', fontWeight: 700 }}>Service</span> <span className={styles.proText} style={{ fontWeight: 700 }}>Pro<sup style={{ fontSize: '0.7em', color: 'var(--accent-orange)', fontWeight: 700 }}>+</sup></span>s
            </p>

            {/* Enhanced Stats Grid */}
            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statIcon}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.statNumber}>24/7</div>
                <div className={styles.statLabel}>Customer Support</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statIcon}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="12 6 12 12 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.statNumber}>7-Day</div>
                <div className={styles.statLabel}>Guaranteed Delivery</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statIcon}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.statNumber}>98%</div>
                <div className={styles.statLabel}>Customer Satisfaction</div>
              </div>
            </div>

            {/* Featured Review */}
            <div className={styles.featuredReview}>
              <div className={styles.featuredReviewContent}>
                <div className={styles.featuredReviewLeft}>
                  <img
                    src="https://szkuwwapzjnwhiiglzim.supabase.co/storage/v1/object/public/images/review-jarred.webp"
                    alt="Jarred Campeau"
                    className={styles.featuredReviewAvatar}
                  />
                  <div className={styles.featuredReviewMeta}>
                    <div className={styles.featuredReviewStars}>
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#f97316" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ))}
                    </div>
                    <div className={styles.featuredReviewAuthor}>
                      <strong>Jarred Campeau</strong>
                    </div>
                    <a
                      href="https://jccflooring.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.featuredReviewCompany}
                    >
                      JCCFlooring.com
                    </a>
                  </div>
                </div>
                <div className={styles.featuredReviewRight}>
                  <div className={styles.featuredReviewQuote}>
                    "ServiceNerd Pro transformed my flooring business completely. Within weeks of launching my new website, I saw a <strong>40% increase in qualified leads</strong>. Clients instantly trust me and the setup was a breeze, hands down a great investment."
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges & Testimonials CTA */}
            <div className={styles.trustBadgesCTA}>
              <div className={styles.trustBadgesContent}>
                <div className={styles.trustBadges}>
                  <div className={styles.trustBadge}>
                    <svg className={styles.checkmark} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12l2 2 4-4" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>7-Day Delivery, Or It's Free</span>
                  </div>
                  <div className={styles.trustBadge}>
                    <svg className={styles.checkmark} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12l2 2 4-4" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>30 Days No Risk</span>
                  </div>
                  <div className={styles.trustBadge}>
                    <svg className={styles.checkmark} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12l2 2 4-4" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>12-Month Price Guarantee</span>
                  </div>
                </div>
                <Link
                  href="/testimonials"
                  onClick={() => trackCTAClick('social_proof', 'View More Experiences', '/testimonials')}
                >
                  <button className={styles.testimonialsButton}>
                    View More Experiences
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section - Moved Before FAQ */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                Get Ready For More Customers
              </h2>

              <p className={styles.ctaSubtitle}>
                Join 100+ service businesses that chose professional growth over DIY struggles
              </p>

              <div className={styles.ctaCard}>
                <div className={styles.ctaCardHeader}>
                  <div className={styles.ctaPriceTag}>
                    <span className={styles.ctaPriceAmount}>$199</span>
                    <span className={styles.ctaPricePeriod}>/month</span>
                  </div>
                  <div className={styles.ctaPriceDetails}>
                    Everything included • No setup fees • Cancel anytime
                  </div>
                </div>

                <div className={styles.ctaFeatures}>
                  <div className={styles.ctaFeature}>
                    <svg className={styles.ctaCheckmark} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" fill="url(#gradientCheck1)" />
                      <path d="M8 12.5L10.5 15L16 9.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradientCheck1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f97316" />
                          <stop offset="100%" stopColor="#fb923c" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className={styles.ctaFeatureText}>
                      <strong>Professional Website Design</strong>
                      <span>Custom-built for your service business</span>
                    </div>
                  </div>
                  <div className={styles.ctaFeature}>
                    <svg className={styles.ctaCheckmark} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" fill="url(#gradientCheck2)" />
                      <path d="M8 12.5L10.5 15L16 9.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradientCheck2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f97316" />
                          <stop offset="100%" stopColor="#fb923c" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className={styles.ctaFeatureText}>
                      <strong>7-Day Delivery Guarantee</strong>
                      <span>Live and generating leads within a week</span>
                    </div>
                  </div>
                  <div className={styles.ctaFeature}>
                    <svg className={styles.ctaCheckmark} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" fill="url(#gradientCheck3)" />
                      <path d="M8 12.5L10.5 15L16 9.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradientCheck3" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f97316" />
                          <stop offset="100%" stopColor="#fb923c" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className={styles.ctaFeatureText}>
                      <strong>30-Day Money-Back Guarantee</strong>
                      <span>Full refund if you're not completely satisfied</span>
                    </div>
                  </div>
                  <div className={styles.ctaFeature}>
                    <svg className={styles.ctaCheckmark} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" fill="url(#gradientCheck4)" />
                      <path d="M8 12.5L10.5 15L16 9.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradientCheck4" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f97316" />
                          <stop offset="100%" stopColor="#fb923c" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className={styles.ctaFeatureText}>
                      <strong>12-Month Price Lock</strong>
                      <span>Your rate stays at $199/mo for a full year</span>
                    </div>
                  </div>
                </div>

                <div className={styles.ctaCardActions}>
                  <Link
                    href="/pricing"
                    onClick={() => trackCTAClick('final_cta', 'Get Started—Launch in 7 Days', '/pricing')}
                  >
                    <button className={styles.primaryButton}>
                      Get Started—Launch in 7 Days
                    </button>
                  </Link>
                  <div className={styles.ctaTrustIndicator}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#f97316"/>
                    </svg>
                    <span>100+ businesses trust <span style={{ whiteSpace: 'nowrap' }}>Service Pro</span> • 4.9/5 rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faq}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Common Questions</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What if I don't like it?</h3>
                <p className={styles.faqAnswer}>
                  Cancel within your first 30 days and get a full refund. No questions asked, no hoops to jump through.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What happens after the 12-month price lock?</h3>
                <p className={styles.faqAnswer}>
                  Your rate may adjust to current pricing, but you'll get 60 days notice. Most customers stay because the value far exceeds the cost.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Can I cancel anytime?</h3>
                <p className={styles.faqAnswer}>
                  Yes. Cancel anytime—cancellations take effect at the end of your current billing cycle. No long-term contracts, no cancellation fees. You're in control.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do I own my website?</h3>
                <p className={styles.faqAnswer}>
                  Absolutely. Your content, your domain, your website. If you ever leave, you can export everything and take it with you.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What if I need changes after launch?</h3>
                <p className={styles.faqAnswer}>
                  All plans include ongoing updates and 24/7 support. Need content changes? Just ask. We handle it—usually same day.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How fast is the 7-day delivery really?</h3>
                <p className={styles.faqAnswer}>
                  Most sites go live in 5-7 days after you complete our onboarding form. No delays, no excuses. If we're late, your first month is free.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
