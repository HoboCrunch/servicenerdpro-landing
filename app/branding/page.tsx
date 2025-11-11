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

        {/* Brand Identity Components */}
        <section className={styles.features}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Your Complete Brand Identity System</h2>
            <p className={styles.sectionSubtitle}>
              Everything you need to look consistent, professional, and memorable across every customer touchpoint
            </p>

            <div className={styles.brandComponentsGrid}>
              <div className={styles.brandComponentCard}>
                <div className={styles.componentVisual}>
                  <div className={styles.logoPreview}>
                    <div className={styles.logoCollage}>
                      {/* Mountain/Peak Logo */}
                      <svg className={styles.logoSvg} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30 10L50 45H10L30 10Z" fill="#2563eb"/>
                        <path d="M30 10L40 30L30 25L20 30L30 10Z" fill="#3b82f6" opacity="0.7"/>
                        <circle cx="30" cy="30" r="28" stroke="#2563eb" strokeWidth="2" fill="none"/>
                      </svg>

                      {/* Leaf/Nature Logo */}
                      <svg className={styles.logoSvg} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30 10C30 10 15 20 15 35C15 42 21 48 30 48C30 40 30 20 30 10Z" fill="#14b8a6"/>
                        <path d="M30 10C30 10 45 20 45 35C45 42 39 48 30 48C30 40 30 20 30 10Z" fill="#0d9488"/>
                        <rect x="2" y="2" width="56" height="56" rx="12" stroke="#14b8a6" strokeWidth="2" fill="none"/>
                      </svg>

                      {/* Abstract/Tech Logo */}
                      <svg className={styles.logoSvg} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="15" y="15" width="15" height="15" rx="2" fill="#f97316"/>
                        <rect x="32" y="15" width="13" height="13" rx="2" fill="#fb923c"/>
                        <rect x="15" y="32" width="13" height="13" rx="2" fill="#fb923c"/>
                        <rect x="30" y="30" width="15" height="15" rx="2" fill="#f97316"/>
                      </svg>

                      {/* Hexagon Badge Logo */}
                      <svg className={styles.logoSvg} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30 5L50 17.5V42.5L30 55L10 42.5V17.5L30 5Z" fill="#8b5cf6" stroke="#7c3aed" strokeWidth="2"/>
                        <circle cx="30" cy="30" r="8" fill="white"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className={styles.componentContent}>
                  <div className={styles.featureHeader}>
                    <img src="/icon-design.svg" alt="" className={styles.featureIcon} />
                    <h3>Professional Logo Design</h3>
                  </div>
                  <p>Your logo is your signature. We create multiple unique concepts, refine your favorite, and deliver a mark that represents your values and attracts your ideal customers.</p>
                  <div className={styles.deliverablesList}>
                    <span>✓ 3 unique concepts</span>
                    <span>✓ Unlimited revisions</span>
                    <span>✓ All file formats</span>
                  </div>
                </div>
              </div>

              <div className={styles.brandComponentCard}>
                <div className={styles.componentVisual}>
                  <div className={styles.colorPalette}>
                    <div className={styles.colorSwatch} style={{background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'}}></div>
                    <div className={styles.colorSwatch} style={{background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)'}}></div>
                    <div className={styles.colorSwatch} style={{background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)'}}></div>
                    <div className={styles.colorSwatch} style={{background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'}}></div>
                  </div>
                </div>
                <div className={styles.componentContent}>
                  <div className={styles.featureHeader}>
                    <img src="/icon-premium.svg" alt="" className={styles.featureIcon} />
                    <h3>Strategic Color System</h3>
                  </div>
                  <p>Colors trigger emotions and recognition. We choose a palette that represents your brand personality and works across all mediums—from truck wraps to business cards.</p>
                  <div className={styles.deliverablesList}>
                    <span>✓ Primary + secondary colors</span>
                    <span>✓ Usage guidelines</span>
                    <span>✓ Hex, RGB, CMYK codes</span>
                  </div>
                </div>
              </div>

              <div className={styles.brandComponentCard}>
                <div className={styles.componentVisual}>
                  <div className={styles.typographyPreview}>
                    <div className={styles.fontDisplay}>Aa</div>
                    <div className={styles.fontSubtext}>Typography</div>
                  </div>
                </div>
                <div className={styles.componentContent}>
                  <div className={styles.featureHeader}>
                    <img src="/icon-design.svg" alt="" className={styles.featureIcon} />
                    <h3>Typography System</h3>
                  </div>
                  <p>The right fonts make you readable and memorable. We select type families that work at every size—from billboards to Instagram posts.</p>
                  <div className={styles.deliverablesList}>
                    <span>✓ Headline fonts</span>
                    <span>✓ Body text fonts</span>
                    <span>✓ Web + print options</span>
                  </div>
                </div>
              </div>

              <div className={styles.brandComponentCard}>
                <div className={styles.componentVisual}>
                  <div className={styles.brandGuidePreview}>
                    <div className={styles.guidePages}>
                      <div className={styles.guidePage}></div>
                      <div className={styles.guidePage}></div>
                      <div className={styles.guidePage}></div>
                    </div>
                  </div>
                </div>
                <div className={styles.componentContent}>
                  <div className={styles.featureHeader}>
                    <img src="/icon-secure.svg" alt="" className={styles.featureIcon} />
                    <h3>Brand Guidelines Document</h3>
                  </div>
                  <p>Never second-guess if something "looks right." Your brand guide shows exactly how to use your logo, colors, and fonts—perfect for you and anyone you hire.</p>
                  <div className={styles.deliverablesList}>
                    <span>✓ Logo usage rules</span>
                    <span>✓ Color applications</span>
                    <span>✓ Do's & don'ts</span>
                  </div>
                </div>
              </div>

              <div className={styles.brandComponentCard}>
                <div className={styles.componentVisual}>
                  <div className={styles.businessCardPreview}>
                    <div className={styles.card}></div>
                  </div>
                </div>
                <div className={styles.componentContent}>
                  <div className={styles.featureHeader}>
                    <img src="/icon-pride.svg" alt="" className={styles.featureIcon} />
                    <h3>Business Card Design</h3>
                  </div>
                  <p>Hand someone a flimsy, poorly designed card and you're forgotten. Give them something substantial and professional, and they'll remember you when they need your services.</p>
                  <div className={styles.deliverablesList}>
                    <span>✓ Print-ready files</span>
                    <span>✓ Front + back design</span>
                    <span>✓ Multiple layouts</span>
                  </div>
                </div>
              </div>

              <div className={styles.brandComponentCard}>
                <div className={styles.componentVisual}>
                  <div className={styles.socialMediaPreview}>
                    <div className={styles.socialGrid}>
                      <div className={styles.socialPost}></div>
                      <div className={styles.socialPost}></div>
                      <div className={styles.socialPost}></div>
                      <div className={styles.socialPost}></div>
                    </div>
                  </div>
                </div>
                <div className={styles.componentContent}>
                  <div className={styles.featureHeader}>
                    <img src="/icon-mobile.svg" alt="" className={styles.featureIcon} />
                    <h3>Social Media Templates</h3>
                  </div>
                  <p>Your brand should look cohesive on Instagram, Facebook, and LinkedIn. We create templates so posting always looks professional—even when you're rushing between jobs.</p>
                  <div className={styles.deliverablesList}>
                    <span>✓ Profile images</span>
                    <span>✓ Post templates</span>
                    <span>✓ Story layouts</span>
                  </div>
                </div>
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
            <p className={styles.processSubtitle}>Three simple steps to building your professional brand presence</p>
            <div className={styles.processSteps}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepIcon}>📝</div>
                <h3>Subscribe & Fill Out Information</h3>
                <ul className={styles.checkList}>
                  <li>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient-br1)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient-br1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#2563eb" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Choose your plan and subscribe
                  </li>
                  <li>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient-br2)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient-br2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#2563eb" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Complete our simple onboarding form
                  </li>
                  <li>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient-br3)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient-br3" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#2563eb" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Tell us about your business and vision
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
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient-br4)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient-br4" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#2563eb" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Quick call to understand your needs
                  </li>
                  <li>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient-br5)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient-br5" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#2563eb" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Clarify your brand vision and goals
                  </li>
                  <li>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient-br6)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient-br6" x1="0%" y1="0%" x2="100%" y2="100%">
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
                <h3>Get Your Brand & Collaborate</h3>
                <ul className={styles.checkList}>
                  <li>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient-br7)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient-br7" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#2563eb" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Receive your professional brand identity
                  </li>
                  <li>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient-br8)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient-br8" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#2563eb" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Provide feedback and request refinements
                  </li>
                  <li className={styles.proHighlightItem}>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="url(#gradient-br9)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient-br9" x1="0%" y1="0%" x2="100%" y2="100%">
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
