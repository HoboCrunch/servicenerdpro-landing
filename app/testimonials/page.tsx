import styles from './page.module.css'
import Header from '../components/Header'
import Link from 'next/link'
import TestimonialsClient from './TestimonialsClient'

export default function Testimonials() {
  return (
    <TestimonialsClient>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Real Service Pros.<br />Real Results.
              </h1>
              <p className={styles.heroSubtitle}>
                See how service professionals like you went from invisible online to fully booked—with professional websites, branding, and marketing that actually works.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className={styles.statsSection}>
          <div className={styles.container}>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>500+</div>
                <div className={styles.statLabel}>Service Businesses Launched</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>38%</div>
                <div className={styles.statLabel}>Average Price Increase</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>7 Days</div>
                <div className={styles.statLabel}>Average Launch Time</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>94%</div>
                <div className={styles.statLabel}>Client Retention Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Website Design Testimonials */}
        <section className={styles.testimonialSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.badge}>Website Design</span>
              <h2 className={styles.sectionTitle}>From Side Hustle to Premium Business</h2>
            </div>

            <div className={styles.testimonialGrid}>
              <div className={styles.testimonialCard}>
                <div className={styles.quote}>
                  "I was charging $800 for detailing jobs because that's what felt right for a 'side hustle guy.' Three months after getting my website, I'm at $1,500 per job and customers don't even blink. The professional look completely changed how people perceive my business."
                </div>
                <div className={styles.author}>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorName}>Marcus T.</div>
                    <div className={styles.authorBusiness}>Mobile Detailing, Atlanta</div>
                  </div>
                  <div className={styles.resultBadge}>+88% Price Increase</div>
                </div>
              </div>

              <div className={styles.testimonialCard}>
                <div className={styles.quote}>
                  "I used to be embarrassed when people asked for my website—I'd send them my Instagram and hope they didn't think I was unprofessional. Now I'm proud to share my link. I've gotten multiple jobs from people who found me online and said my website looked 'legit.'"
                </div>
                <div className={styles.author}>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorName}>Sarah K.</div>
                    <div className={styles.authorBusiness}>Landscaping & Hardscaping, Phoenix</div>
                  </div>
                  <div className={styles.resultBadge}>3x More Leads</div>
                </div>
              </div>

              <div className={styles.testimonialCard}>
                <div className={styles.quote}>
                  "I spent $30k on my truck and tools but had a Wix site that looked like a high schooler made it. Getting a real website made me feel like a real business owner for the first time. My booking rate went from 30% to 65% after the switch."
                </div>
                <div className={styles.author}>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorName}>Javier R.</div>
                    <div className={styles.authorBusiness}>HVAC Services, Dallas</div>
                  </div>
                  <div className={styles.resultBadge}>65% Booking Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Marketing Testimonials */}
        <section className={styles.testimonialSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.badge} style={{background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)'}}>Digital Marketing</span>
              <h2 className={styles.sectionTitle}>From Invisible to #1 on Google</h2>
            </div>

            <div className={styles.testimonialGrid}>
              <div className={styles.testimonialCard}>
                <div className={styles.quote}>
                  "I went from begging for work to turning down jobs. My Google Business profile now shows up #1 for 'landscaping near me' in my city. I get 4-5 calls per day from Google alone. Best $199/month I've ever spent."
                </div>
                <div className={styles.author}>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorName}>Carlos M.</div>
                    <div className={styles.authorBusiness}>Landscaping Services, Austin</div>
                  </div>
                  <div className={styles.resultBadge}>#1 Local Ranking</div>
                </div>
              </div>

              <div className={styles.testimonialCard}>
                <div className={styles.quote}>
                  "Within 30 days, I started getting 3-5 new customer calls per week. I had to hire help to keep up with demand. This marketing stuff actually works when pros handle it—I tried doing it myself for a year with zero results."
                </div>
                <div className={styles.author}>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorName}>Jennifer L.</div>
                    <div className={styles.authorBusiness}>Cleaning Services, Denver</div>
                  </div>
                  <div className={styles.resultBadge}>247% Traffic Increase</div>
                </div>
              </div>

              <div className={styles.testimonialCard}>
                <div className={styles.quote}>
                  "I tried running my own Google Ads and Facebook ads—total disaster. Spent $2,000 and got maybe 3 leads. These guys set it up right and I now track every dollar spent and every lead that comes in. My ROI is 5:1."
                </div>
                <div className={styles.author}>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorName}>Mike R.</div>
                    <div className={styles.authorBusiness}>Plumbing & HVAC, Tampa</div>
                  </div>
                  <div className={styles.resultBadge}>5:1 ROI</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Branding Testimonials */}
        <section className={styles.testimonialSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.badge} style={{background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)'}}>Branding</span>
              <h2 className={styles.sectionTitle}>From Amateur to Established</h2>
            </div>

            <div className={styles.testimonialGrid}>
              <div className={styles.testimonialCard}>
                <div className={styles.quote}>
                  "My old logo was something I made in 5 minutes on Fiverr for $5. Now I have a brand I'm actually proud to put on my truck, my shirts, my business cards. Customers comment on how professional it looks all the time."
                </div>
                <div className={styles.author}>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorName}>Derek P.</div>
                    <div className={styles.authorBusiness}>Roofing & Exteriors, Portland</div>
                  </div>
                  <div className={styles.resultBadge}>Premium Positioning</div>
                </div>
              </div>

              <div className={styles.testimonialCard}>
                <div className={styles.quote}>
                  "I was embarrassed to hand out business cards with my old branding. Now? I'm handing them out like candy. People actually keep them because they look nice. I've gotten multiple referrals from people who kept my card."
                </div>
                <div className={styles.author}>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorName}>Amanda K.</div>
                    <div className={styles.authorBusiness}>Pet Grooming, Nashville</div>
                  </div>
                  <div className={styles.resultBadge}>2x Referrals</div>
                </div>
              </div>

              <div className={styles.testimonialCard}>
                <div className={styles.quote}>
                  "Professional branding was the final piece I needed to charge premium prices. My old logo said 'cheap labor.' My new brand says 'quality service.' I raised my prices 40% and nobody complained."
                </div>
                <div className={styles.author}>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorName}>Luis G.</div>
                    <div className={styles.authorBusiness}>Painting Services, Miami</div>
                  </div>
                  <div className={styles.resultBadge}>+40% Pricing</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full Package Testimonials */}
        <section className={styles.testimonialSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.badge} style={{background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)'}}>Complete Package</span>
              <h2 className={styles.sectionTitle}>The Full Transformation</h2>
            </div>

            <div className={styles.testimonialGrid}>
              <div className={styles.testimonialCardLarge}>
                <div className={styles.quote}>
                  "I went all in—website, branding, and marketing. Best business decision I ever made. Within 6 months, I went from $4,500/month revenue to $18,000/month. I had to hire two employees. The investment paid for itself in the first month."
                </div>
                <div className={styles.author}>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorName}>Brandon S.</div>
                    <div className={styles.authorBusiness}>Pressure Washing & Exterior Cleaning, Seattle</div>
                  </div>
                  <div className={styles.resultBadge}>4x Revenue Growth</div>
                </div>
              </div>

              <div className={styles.testimonialCardLarge}>
                <div className={styles.quote}>
                  "I was working 70 hours a week just to make $60k/year. After getting my full online presence set up, I'm making $120k working 45 hours. I can finally take weekends off. My wife is happy, I'm happy, and I'm not stressed about where the next job is coming from."
                </div>
                <div className={styles.author}>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorName}>Tyler M.</div>
                    <div className={styles.authorBusiness}>Electrical Services, Charlotte</div>
                  </div>
                  <div className={styles.resultBadge}>2x Income, Less Hours</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefitsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>What Service Pro<sup style={{ fontSize: '0.7em', color: 'var(--accent-orange)' }}>+</sup>s Experience</h2>
            <p className={styles.sectionSubtitle}>
              These aren't just nice-to-haves—they're the proven results our Service Pros experience every day
            </p>

            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <div className={styles.benefitHeader}>
                  <img src="/icon-premium.svg" alt="" className={styles.benefitIcon} />
                  <h3>Charge Premium Rates Without Pushback</h3>
                </div>
                <p>Customers expect to pay premium prices when your website looks premium. No more justifying your rates or competing on price alone.</p>
              </div>

              <div className={styles.benefitCard}>
                <div className={styles.benefitHeader}>
                  <img src="/icon-target.svg" alt="" className={styles.benefitIcon} />
                  <h3>Attract Serious Buyers, Not Tire-Kickers</h3>
                </div>
                <p>Professional presence filters out price shoppers. You get inquiries from customers who value quality and are ready to book.</p>
              </div>

              <div className={styles.benefitCard}>
                <div className={styles.benefitHeader}>
                  <img src="/icon-pride.svg" alt="" className={styles.benefitIcon} />
                  <h3>Share Your Link With Pride</h3>
                </div>
                <p>Finally have a website you're proud to share. No more apologizing for your Instagram or outdated Wix template.</p>
              </div>

              <div className={styles.benefitCard}>
                <div className={styles.benefitHeader}>
                  <img src="/icon-growth.svg" alt="" className={styles.benefitIcon} />
                  <h3>Compete With Established Companies</h3>
                </div>
                <p>Look as established as the competition—even if you're solo. Customers can't tell the difference between you and a 20-person team.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <h2 className={styles.ctaTitle}>Ready to Write Your Success Story?</h2>
            <p className={styles.ctaSubtitle}>
              Join hundreds of service professionals who stopped losing customers to competition and started commanding premium prices.
            </p>
            <Link href="/pricing">
              <button className={styles.ctaButton}>Get Started Today</button>
            </Link>
            <p className={styles.guarantee}>✓ 7-Day Delivery  ✓ Money-Back Guarantee  ✓ Cancel Anytime</p>
          </div>
        </section>
      </main>
    </TestimonialsClient>
  )
}
