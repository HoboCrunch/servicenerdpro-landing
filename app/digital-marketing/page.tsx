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
              <h1 className={styles.heroTitle}>
                Get Found by Customers<br />Searching for Your Services
              </h1>
              <p className={styles.heroSubtitle}>
                Stop waiting for the phone to ring. Our digital marketing gets you to the top of Google,
                drives real leads, and fills your calendar—all while you focus on doing the work you love.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/pricing">
                  <button className={styles.primaryButton}>Get Started</button>
                </Link>
                <Link href="/testimonials">
                  <button className={styles.secondaryButton}>See Results</button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className={styles.problemSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>You're Invisible Online</h2>
            <p className={styles.problemSubtitle}>Your competitors show up first on Google, while you're waiting for the phone to ring</p>
            <div className={styles.problemGrid}>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>
                  <img src="/icon-target.svg" alt="Not on Google" />
                </div>
                <div className={styles.problemContent}>
                  <h3>Not on Google</h3>
                  <p>When locals search for your services, competitors show up. You don't. You're losing jobs daily.</p>
                </div>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>
                  <img src="/icon-growth.svg" alt="Wasting Ad Spend" />
                </div>
                <div className={styles.problemContent}>
                  <h3>Wasting Ad Spend</h3>
                  <p>Facebook ads that don't convert. Google Ads that drain your budget with zero ROI.</p>
                </div>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>
                  <img src="/icon-seo.svg" alt="Marketing Confusion" />
                </div>
                <div className={styles.problemContent}>
                  <h3>Marketing Confusion</h3>
                  <p>SEO, PPC, social media—it's overwhelming. You need someone to just handle it.</p>
                </div>
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
                <div className={styles.featureHeader}>
                  <img src="/icon-target.svg" alt="" className={styles.featureIcon} />
                  <h3>Google Business Profile</h3>
                </div>
                <p>Setup and optimization so you show up in Google Maps and local search. The #1 way customers find service providers.</p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureHeader}>
                  <img src="/icon-seo.svg" alt="" className={styles.featureIcon} />
                  <h3>Local SEO</h3>
                </div>
                <p>Rank higher for "near me" searches. When someone searches for your service + your city, you'll be there.</p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureHeader}>
                  <img src="/icon-pride.svg" alt="" className={styles.featureIcon} />
                  <h3>Review Management</h3>
                </div>
                <p>Get more 5-star reviews and manage your online reputation. Reviews are the new word-of-mouth.</p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureHeader}>
                  <img src="/icon-mobile.svg" alt="" className={styles.featureIcon} />
                  <h3>Social Media Setup</h3>
                </div>
                <p>Professional profiles across all platforms. Look credible everywhere customers look for you.</p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureHeader}>
                  <img src="/icon-leads.svg" alt="" className={styles.featureIcon} />
                  <h3>Email Marketing</h3>
                </div>
                <p>Stay top-of-mind with past customers. Automated follow-ups that bring repeat business.</p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureHeader}>
                  <img src="/icon-growth.svg" alt="" className={styles.featureIcon} />
                  <h3>Performance Reports</h3>
                </div>
                <p>See exactly where your leads come from. Clear monthly reports show your ROI.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className={styles.ctaBanner}>
          <div className={styles.container}>
            <div className={styles.ctaBannerContent}>
              <h3>Ready to Stop Being Invisible?</h3>
              <p>Get found by customers actively searching for your services in your area.</p>
              <Link href="/pricing">
                <button className={styles.ctaBannerButton}>Start Getting More Leads Today</button>
              </Link>
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
            <h2 className={styles.sectionTitle}>You Focus on Jobs, We Handle Marketing</h2>
            <p className={styles.processSubtitle}>No marketing experience needed. No confusing dashboards. Just more leads.</p>
            <div className={styles.processSteps}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepIcon}>🔍</div>
                <h3>Marketing Audit</h3>
                <ul className={styles.checkList}>
                  <li>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient-dm1)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient-dm1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#22c55e" />
                          <stop offset="100%" stopColor="#16a34a" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Analyze your current online presence
                  </li>
                  <li>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient-dm2)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient-dm2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#22c55e" />
                          <stop offset="100%" stopColor="#16a34a" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Identify quick wins and opportunities
                  </li>
                  <li>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient-dm3)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient-dm3" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#22c55e" />
                          <stop offset="100%" stopColor="#16a34a" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Competitor research in your area
                  </li>
                </ul>
              </div>
              <div className={styles.processArrow}>→</div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepIcon}>🚀</div>
                <h3>Strategy & Setup</h3>
                <ul className={styles.checkList}>
                  <li>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient-dm4)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient-dm4" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#22c55e" />
                          <stop offset="100%" stopColor="#16a34a" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Optimize all your business listings
                  </li>
                  <li>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient-dm5)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient-dm5" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#22c55e" />
                          <stop offset="100%" stopColor="#16a34a" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Launch targeted local campaigns
                  </li>
                  <li>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient-dm6)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient-dm6" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#22c55e" />
                          <stop offset="100%" stopColor="#16a34a" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Set up tracking and analytics
                  </li>
                </ul>
              </div>
              <div className={styles.processArrow}>→</div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepIcon}>📞</div>
                <h3>Leads Start Flowing</h3>
                <ul className={styles.checkList}>
                  <li>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient-dm7)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient-dm7" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#22c55e" />
                          <stop offset="100%" stopColor="#16a34a" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Watch your phone ring with qualified leads
                  </li>
                  <li>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient-dm8)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient-dm8" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#22c55e" />
                          <stop offset="100%" stopColor="#16a34a" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Monthly reports showing your ROI
                  </li>
                  <li className={styles.proHighlightItem}>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient-dm9)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient-dm9" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#22c55e" />
                          <stop offset="100%" stopColor="#16a34a" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className={styles.proHighlight}>Pro+ members: Ongoing optimization & strategy calls</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className={styles.socialProof}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Service Pros Getting Found Online</h2>

            <div className={styles.testimonialGrid}>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialQuote}>
                  "I went from begging for work to turning down jobs. My Google Business profile now shows up #1 for 'landscaping near me' in my city. Best $199/month I've ever spent."
                </div>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorName}>Carlos M.</div>
                  <div className={styles.authorBusiness}>Landscaping Services, Austin</div>
                </div>
              </div>

              <div className={styles.testimonialCard}>
                <div className={styles.testimonialQuote}>
                  "Within 30 days, I started getting 3-5 new customer calls per week. I had to hire help to keep up with demand. This marketing stuff actually works when pros handle it."
                </div>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorName}>Jennifer L.</div>
                  <div className={styles.authorBusiness}>Cleaning Services, Denver</div>
                </div>
              </div>

              <div className={styles.testimonialCard}>
                <div className={styles.testimonialQuote}>
                  "I tried running my own Google Ads and Facebook ads—total disaster. These guys set it up right. Now I track every dollar spent and every lead that comes in."
                </div>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorName}>Mike R.</div>
                  <div className={styles.authorBusiness}>Plumbing & HVAC, Tampa</div>
                </div>
              </div>
            </div>

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
