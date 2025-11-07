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
              <h1 className={styles.heroTitle}>
                You're Too Good to Look<br />This Cheap Online
              </h1>
              <p className={styles.heroSubtitle}>
                You deliver premium work. But customers never call because your online presence looks like a hobby.
                Get the professional website you deserve—built in 7 days for $199/month, not $5,000 upfront.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/pricing">
                  <button className={styles.primaryButton}>Get Started</button>
                </Link>
                <Link href="/testimonials">
                  <button className={styles.secondaryButton}>See Examples</button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className={styles.problemSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Website Doesn't Reflect Your Work?</h2>
            <p className={styles.problemSubtitle}>You deliver a premium service, but customers still choose to work with competitors</p>
            <div className={styles.problemGrid}>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>
                  <img src="/webdev-instagram.svg" alt="Instagram Isn't Enough" />
                </div>
                <div className={styles.problemContent}>
                  <h3>Instagram Isn't Enough</h3>
                  <p>Your customers don't want to see your selfies, they want to see your work.</p>
                </div>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>
                  <img src="/webdev-notgood.svg" alt="DIY Sites Look Cheap" />
                </div>
                <div className={styles.problemContent}>
                  <h3>DIY Sites Look Cheap</h3>
                  <p>Wix and Squarespace templates scream "amateur hour." You deserve better.</p>
                </div>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>
                  <img src="/webdev-time.svg" alt="No Time to Learn" />
                </div>
                <div className={styles.problemContent}>
                  <h3>No Time to Learn</h3>
                  <p>You're running a business, not becoming a web designer. Let the pros handle it.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.features}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>What Makes You Look Premium</h2>
            <p className={styles.sectionSubtitle}>
              Everything you need to command premium rates and attract serious customers
            </p>

            <div className={styles.featureGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureHeader}>
                  <img src="/icon-design.svg" alt="" className={styles.featureIcon} />
                  <h3>Look Established (Even If You're Solo)</h3>
                </div>
                <p>Custom design that makes you look like a 10-person team. No cheap templates that scream "I just started last month."</p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureHeader}>
                  <img src="/icon-mobile.svg" alt="" className={styles.featureIcon} />
                  <h3>Perfect on Every Device</h3>
                </div>
                <p>Your customers browse on their phones while sitting in their driveway. Mobile-first design means you never lose a lead to a broken layout.</p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureHeader}>
                  <img src="/icon-speed.svg" alt="" className={styles.featureIcon} />
                  <h3>Fast = Credible</h3>
                </div>
                <p>Lightning-fast loading tells customers "this business has their act together." Slow sites get closed before they even load.</p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureHeader}>
                  <img src="/icon-seo.svg" alt="" className={styles.featureIcon} />
                  <h3>Actually Get Found on Google</h3>
                </div>
                <p>SEO-optimized from day one so when locals search for your service, you show up. Not buried on page 4.</p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureHeader}>
                  <img src="/icon-leads.svg" alt="" className={styles.featureIcon} />
                  <h3>Turn Visitors Into Booked Jobs</h3>
                </div>
                <p>Click-to-call buttons, contact forms, and booking systems that make it stupid-easy for customers to hire you right now.</p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureHeader}>
                  <img src="/icon-secure.svg" alt="" className={styles.featureIcon} />
                  <h3>Always Online, Always Secure</h3>
                </div>
                <p>SSL certificates, daily backups, and 99.9% uptime. Your website works while you sleep so you never miss a lead.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className={styles.ctaBanner}>
          <div className={styles.container}>
            <div className={styles.ctaBannerContent}>
              <h3>Start Charging What You're Worth</h3>
              <p>No $5,000 agency fees. No tech headaches. No wasted weekends.</p>
              <Link href="/pricing">
                <button className={styles.ctaBannerButton}>Get Your Professional Website in 7 Days</button>
              </Link>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className={styles.processSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>You Stay in Your Lane, We Handle Ours</h2>
            <p className={styles.processSubtitle}>Zero tech knowledge required. Zero marketing skills needed. Just run your business.</p>
            <div className={styles.processSteps}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepIcon}>📝</div>
                <h3>Fill Out One Simple Form</h3>
                <ul className={styles.checkList}>
                  <li>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f97316" />
                          <stop offset="100%" stopColor="#fb923c" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Takes 10 minutes—all the info we need
                  </li>
                  <li>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient2)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f97316" />
                          <stop offset="100%" stopColor="#fb923c" />
                        </linearGradient>
                      </defs>
                    </svg>
                    You don't learn web design
                  </li>
                  <li>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient3)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f97316" />
                          <stop offset="100%" stopColor="#fb923c" />
                        </linearGradient>
                      </defs>
                    </svg>
                    You don't become a marketer
                  </li>
                </ul>
              </div>
              <div className={styles.processArrow}>→</div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepIcon}>🚀</div>
                <h3>We Build Everything for You</h3>
                <ul className={styles.checkList}>
                  <li>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient4)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f97316" />
                          <stop offset="100%" stopColor="#fb923c" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Professional design (custom, not templated)
                  </li>
                  <li>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient5)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f97316" />
                          <stop offset="100%" stopColor="#fb923c" />
                        </linearGradient>
                      </defs>
                    </svg>
                    SEO setup so locals can find you
                  </li>
                  <li>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient6)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f97316" />
                          <stop offset="100%" stopColor="#fb923c" />
                        </linearGradient>
                      </defs>
                    </svg>
                    All the tech stuff you'd never figure out
                  </li>
                </ul>
              </div>
              <div className={styles.processArrow}>→</div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepIcon}>✨</div>
                <h3>You Go Back to Running Jobs</h3>
                <ul className={styles.checkList}>
                  <li>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient7)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient7" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f97316" />
                          <stop offset="100%" stopColor="#fb923c" />
                        </linearGradient>
                      </defs>
                    </svg>
                    We host, maintain, and keep it online
                  </li>
                  <li>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient8)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient8" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f97316" />
                          <stop offset="100%" stopColor="#fb923c" />
                        </linearGradient>
                      </defs>
                    </svg>
                    24/7 support when you need help
                  </li>
                  <li className={styles.proHighlightItem}>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient9)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient9" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f97316" />
                          <stop offset="100%" stopColor="#fb923c" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className={styles.proHighlight}>Pro+ members: Monthly strategy calls</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className={styles.socialProof}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Service Pros Who Made the Upgrade</h2>

            <div className={styles.testimonialGrid}>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialQuote}>
                  "I was charging $800 for detailing jobs because that's what felt right for a 'side hustle guy.' Three months after getting my website, I'm at $1,500 per job and customers don't even blink."
                </div>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorName}>Marcus T.</div>
                  <div className={styles.authorBusiness}>Mobile Detailing, Atlanta</div>
                </div>
              </div>

              <div className={styles.testimonialCard}>
                <div className={styles.testimonialQuote}>
                  "I used to be embarrassed when people asked for my website—I'd send them my Instagram and hope they didn't think I was unprofessional. Now I'm proud to share my link."
                </div>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorName}>Sarah K.</div>
                  <div className={styles.authorBusiness}>Landscaping & Hardscaping, Phoenix</div>
                </div>
              </div>

              <div className={styles.testimonialCard}>
                <div className={styles.testimonialQuote}>
                  "I spent $30k on my truck and tools but had a Wix site that looked like a high schooler made it. Getting a real website made me feel like a real business owner for the first time."
                </div>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorName}>Javier R.</div>
                  <div className={styles.authorBusiness}>HVAC Services, Dallas</div>
                </div>
              </div>
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>500+</div>
                <div className={styles.statLabel}>Service Businesses Launched</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>7 Days</div>
                <div className={styles.statLabel}>Average Launch Time</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>38%</div>
                <div className={styles.statLabel}>Average Price Increase After Launch</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <h2 className={styles.ctaTitle}>Ready to Stop Looking Like a Side Hustle?</h2>
            <p className={styles.ctaSubtitle}>
              Join hundreds of service professionals who made the upgrade from hobby to premium business.
            </p>
            <Link href="/pricing">
              <button className={styles.primaryButton}>Get Your Professional Presence in 7 Days</button>
            </Link>
            <p className={styles.guarantee}>✓ 7-Day Delivery Guarantee  ✓ Money-Back if Not Satisfied</p>
          </div>
        </section>
      </main>
    </>
  )
}
