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
                Experience An Online<br />Foundation That Converts
              </h1>
              <p className={styles.heroSubtitle}>
                Beautiful website. Professional brand. Found on Google. We create the complete online presence
                that turns searches into customers—without the complexity of ad campaigns or confusing dashboards.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/pricing">
                  <button className={styles.primaryButton}>Get Your Foundation</button>
                </Link>
                <Link href="/testimonials">
                  <button className={styles.secondaryButton}>See Examples</button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Foundation Components Section */}
        <section className={styles.features}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>The 3-Part Online Marketing Foundation</h2>
            <p className={styles.sectionSubtitle}>
              Website + Brand + SEO = A complete online presence that works together to convert visitors into customers
            </p>

            <div className={styles.foundationGrid}>
              <div className={styles.foundationCard}>
                <div className={styles.featureHeader}>
                  <img src="/icon-target.svg" alt="" className={styles.featureIcon} />
                  <h3>Beautiful Website Design</h3>
                </div>
                <p>Fast, mobile-friendly websites built to convert visitors into leads. Every page is designed to showcase your work and make it easy for customers to reach you.</p>
                <ul className={styles.benefitList}>
                  <li>Custom design that reflects your business</li>
                  <li>Contact forms & lead capture built-in</li>
                  <li>Mobile-optimized for on-the-go customers</li>
                  <li>Fast loading speeds (no clunky templates)</li>
                </ul>
              </div>

              <div className={styles.foundationCard}>
                <div className={styles.featureHeader}>
                  <img src="/icon-pride.svg" alt="" className={styles.featureIcon} />
                  <h3>Professional Branding</h3>
                </div>
                <p>Stand out from competitors with a cohesive brand identity. We create visual elements that make your business look professional and trustworthy.</p>
                <ul className={styles.benefitList}>
                  <li>Logo design & brand colors</li>
                  <li>Social media templates for posts</li>
                  <li>Business card & marketing materials</li>
                  <li>Consistent visual identity everywhere</li>
                </ul>
              </div>

              <div className={styles.foundationCard}>
                <div className={styles.featureHeader}>
                  <img src="/icon-seo.svg" alt="" className={styles.featureIcon} />
                  <h3>Search Engine Optimization</h3>
                </div>
                <p>Get found by customers actively searching for your services. We optimize your website so it shows up in local search results—organically.</p>
                <ul className={styles.benefitList}>
                  <li>Local SEO for "near me" searches</li>
                  <li>Google Business Profile setup</li>
                  <li>Keyword optimization for your services</li>
                  <li>Ongoing technical SEO improvements</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Did You Know Banner */}
        <section className={styles.didYouKnowBanner}>
          <div className={styles.container}>
            <div className={styles.bannerContent}>
              <h2 className={styles.bannerTitle}>Did you know?</h2>
              <div className={styles.bannerStats}>
                <div className={styles.bannerStat}>
                  <svg className={styles.bannerCheckmark} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12.5L10.5 15L16 9.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>68% of local searches result in a phone call or store visit</span>
                </div>
                <div className={styles.bannerStat}>
                  <svg className={styles.bannerCheckmark} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12.5L10.5 15L16 9.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Most customers decide to trust you within the first 5 seconds</span>
                </div>
                <div className={styles.bannerStat}>
                  <svg className={styles.bannerCheckmark} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12.5L10.5 15L16 9.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>75% of users never scroll past the first page of search results</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className={styles.processSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>How We Build Your Foundation</h2>
            <p className={styles.processSubtitle}>Three simple steps to building your complete online foundation</p>
            <div className={styles.processSteps}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepIcon}>📝</div>
                <h3>Subscribe & Fill Out Information</h3>
                <ul className={styles.checkList}>
                  <li>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient-dm1)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient-dm1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#2563eb" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Choose your plan and subscribe
                  </li>
                  <li>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient-dm2)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient-dm2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#2563eb" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Complete our simple onboarding form
                  </li>
                  <li>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient-dm3)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient-dm3" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#2563eb" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Tell us about your business and goals
                  </li>
                </ul>
              </div>
              <div className={styles.processArrow}>→</div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepIcon}>💬</div>
                <h3>Have Onboarding Call</h3>
                <ul className={styles.checkList}>
                  <li>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient-dm4)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient-dm4" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#2563eb" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Quick call to understand your vision
                  </li>
                  <li>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient-dm5)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient-dm5" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#2563eb" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Clarify marketing strategy and priorities
                  </li>
                  <li>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient-dm6)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient-dm6" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#2563eb" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Set timeline and expectations
                  </li>
                </ul>
              </div>
              <div className={styles.processArrow}>→</div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepIcon}>🚀</div>
                <h3>Get Your Foundation & Collaborate</h3>
                <ul className={styles.checkList}>
                  <li>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient-dm7)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient-dm7" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#2563eb" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Receive your complete online presence
                  </li>
                  <li>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient-dm8)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient-dm8" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#2563eb" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Provide feedback and request refinements
                  </li>
                  <li className={styles.proHighlightItem}>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient-dm9)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient-dm9" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#2563eb" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className={styles.proHighlight}>Pro+: Ongoing support & strategy sessions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className={styles.socialProof}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Service Pros With Solid Online Foundations</h2>

            <div className={styles.testimonialGrid}>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialQuote}>
                  "My old website was embarrassing. Now I have a beautiful site that shows off my work, and I'm showing up on Google without paying for ads. Exactly what I needed."
                </div>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorName}>Carlos M.</div>
                  <div className={styles.authorBusiness}>Landscaping Services, Austin</div>
                </div>
              </div>

              <div className={styles.testimonialCard}>
                <div className={styles.testimonialQuote}>
                  "The website + branding package transformed how customers see my business. I finally look as professional as my work quality. Lead forms work great too."
                </div>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorName}>Jennifer L.</div>
                  <div className={styles.authorBusiness}>Cleaning Services, Denver</div>
                </div>
              </div>

              <div className={styles.testimonialCard}>
                <div className={styles.testimonialQuote}>
                  "I was spending $500/month on Google Ads with a terrible website. Now I have a great site with SEO that brings organic traffic. Way better ROI."
                </div>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorName}>Mike R.</div>
                  <div className={styles.authorBusiness}>Plumbing & HVAC, Tampa</div>
                </div>
              </div>
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>100%</div>
                <div className={styles.statLabel}>Custom-Designed Sites</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>3-Part</div>
                <div className={styles.statLabel}>Foundation Included</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>No</div>
                <div className={styles.statLabel}>Ad Spend Required</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <h2 className={styles.ctaTitle}>Ready to Build Your Foundation?</h2>
            <p className={styles.ctaSubtitle}>
              Get the complete online marketing foundation: Website + Branding + SEO. No ad campaigns. No dashboards. Just a professional online presence that converts.
            </p>
            <Link href="/pricing">
              <button className={styles.primaryButton}>See Plans & Pricing</button>
            </Link>
            <p className={styles.guarantee}>✓ Custom Design  ✓ Full Branding Package  ✓ SEO Included</p>
          </div>
        </section>
      </main>
    </>
  )
}
