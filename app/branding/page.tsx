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
              <h1 className={styles.heroTitle}>
                Stop Looking Amateur.<br />Start Looking Established.
              </h1>
              <p className={styles.heroSubtitle}>
                Your brand is your first impression. Make it count. Professional logo, colors, and brand identity
                that makes customers trust you instantly—even if you started last week.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/pricing">
                  <button className={styles.primaryButton}>Get Started</button>
                </Link>
                <Link href="/testimonials">
                  <button className={styles.secondaryButton}>See Portfolio</button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className={styles.problemSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Your Brand Is Hurting Your Business</h2>
            <p className={styles.problemSubtitle}>First impressions matter—and yours is screaming "amateur hour"</p>
            <div className={styles.problemGrid}>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>
                  <img src="/icon-design.svg" alt="DIY Disaster" />
                </div>
                <div className={styles.problemContent}>
                  <h3>DIY Disaster</h3>
                  <p>That logo you made on Canva? Customers can tell. It screams "unprofessional."</p>
                </div>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>
                  <img src="/icon-premium.svg" alt="No Consistency" />
                </div>
                <div className={styles.problemContent}>
                  <h3>No Consistency</h3>
                  <p>Different colors everywhere. Random fonts. Your business looks disorganized and messy.</p>
                </div>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>
                  <img src="/icon-pride.svg" alt="Can't Compete" />
                </div>
                <div className={styles.problemContent}>
                  <h3>Can't Compete</h3>
                  <p>Competitors with professional branding win jobs—even if you're better at the actual work.</p>
                </div>
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
                <div className={styles.featureHeader}>
                  <img src="/icon-design.svg" alt="" className={styles.featureIcon} />
                  <h3>Custom Logo Design</h3>
                </div>
                <p>Professional logo created by real designers. Multiple concepts, unlimited revisions until you love it.</p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureHeader}>
                  <img src="/icon-premium.svg" alt="" className={styles.featureIcon} />
                  <h3>Brand Color Palette</h3>
                </div>
                <p>Strategic colors that work together and represent your business personality. No more guessing.</p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureHeader}>
                  <img src="/icon-design.svg" alt="" className={styles.featureIcon} />
                  <h3>Typography System</h3>
                </div>
                <p>Professional font choices for all your materials. Consistent and easy to read everywhere.</p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureHeader}>
                  <img src="/icon-secure.svg" alt="" className={styles.featureIcon} />
                  <h3>Brand Guidelines</h3>
                </div>
                <p>Simple guide showing how to use your brand. You'll never wonder "does this look right?"</p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureHeader}>
                  <img src="/icon-pride.svg" alt="" className={styles.featureIcon} />
                  <h3>Business Card Design</h3>
                </div>
                <p>Print-ready business cards that make a great first impression. Professional templates included.</p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureHeader}>
                  <img src="/icon-speed.svg" alt="" className={styles.featureIcon} />
                  <h3>All File Formats</h3>
                </div>
                <p>Your logo in every format you'll need: PNG, JPG, SVG, PDF. Use it anywhere, instantly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className={styles.ctaBanner}>
          <div className={styles.container}>
            <div className={styles.ctaBannerContent}>
              <h3>Ready to Look Like a Pro?</h3>
              <p>Get a brand that commands respect and higher prices. No design skills required.</p>
              <Link href="/pricing">
                <button className={styles.ctaBannerButton}>Get Your Professional Brand Identity</button>
              </Link>
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
            <h2 className={styles.sectionTitle}>Simple Process, Professional Results</h2>
            <p className={styles.processSubtitle}>You don't need to be a designer. We handle everything.</p>
            <div className={styles.processSteps}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepIcon}>💬</div>
                <h3>Brand Discovery</h3>
                <ul className={styles.checkList}>
                  <li>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient-br1)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient-br1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#9333ea" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Quick call to understand your business
                  </li>
                  <li>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient-br2)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient-br2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#9333ea" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Understand your values and customers
                  </li>
                  <li>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient-br3)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient-br3" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#9333ea" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Define your brand personality
                  </li>
                </ul>
              </div>
              <div className={styles.processArrow}>→</div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepIcon}>🎨</div>
                <h3>Design Concepts</h3>
                <ul className={styles.checkList}>
                  <li>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient-br4)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient-br4" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#9333ea" />
                        </linearGradient>
                      </defs>
                    </svg>
                    3 unique logo concepts created
                  </li>
                  <li>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient-br5)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient-br5" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#9333ea" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Pick your favorite and request changes
                  </li>
                  <li>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient-br6)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient-br6" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#9333ea" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Unlimited revisions until perfect
                  </li>
                </ul>
              </div>
              <div className={styles.processArrow}>→</div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepIcon}>📦</div>
                <h3>Finalize & Deliver</h3>
                <ul className={styles.checkList}>
                  <li>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient-br7)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient-br7" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#9333ea" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Complete brand package delivered
                  </li>
                  <li>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient-br8)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient-br8" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#9333ea" />
                        </linearGradient>
                      </defs>
                    </svg>
                    All file formats ready to use
                  </li>
                  <li className={styles.proHighlightItem}>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient-br9)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient-br9" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#9333ea" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className={styles.proHighlight}>Pro+ members: Business cards & social media templates</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className={styles.socialProof}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Service Pros Who Upgraded Their Brand</h2>

            <div className={styles.testimonialGrid}>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialQuote}>
                  "My old logo was something I made in 5 minutes on Fiverr. Now I have a brand I'm actually proud to put on my truck. Customers comment on how professional it looks."
                </div>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorName}>Derek P.</div>
                  <div className={styles.authorBusiness}>Roofing & Exteriors, Portland</div>
                </div>
              </div>

              <div className={styles.testimonialCard}>
                <div className={styles.testimonialQuote}>
                  "I was embarrassed to hand out business cards with my old branding. Now? I'm handing them out like candy. People actually keep them because they look nice."
                </div>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorName}>Amanda K.</div>
                  <div className={styles.authorBusiness}>Pet Grooming, Nashville</div>
                </div>
              </div>

              <div className={styles.testimonialCard}>
                <div className={styles.testimonialQuote}>
                  "Professional branding was the final piece I needed to charge premium prices. My old logo said 'cheap labor.' My new brand says 'quality service.'"
                </div>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorName}>Luis G.</div>
                  <div className={styles.authorBusiness}>Painting Services, Miami</div>
                </div>
              </div>
            </div>

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
