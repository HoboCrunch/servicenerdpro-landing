import styles from './page.module.css'
import Header from '../components/Header'
import Link from 'next/link'
import TestimonialsClient, { TestimonialCarousel } from './TestimonialsClient'

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
                Real results from <span style={{ whiteSpace: 'nowrap' }}>Service <span style={{ color: '#fbbf24' }}>Pro<sup style={{ color: '#fbbf24' }}>+</sup></span>s</span>
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
                <div className={styles.statNumber}>100+</div>
                <div className={styles.statLabel}>Online Foundations Launched</div>
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

            <TestimonialCarousel sectionId="website">
              {[
                <div key="website-1" className={styles.compactReview}>
                  <div className={styles.compactReviewLeft}>
                    <div className={styles.compactAvatar}>MT</div>
                    <div className={styles.compactMeta}>
                      <div className={styles.compactStars}>
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#f97316" stroke="#f97316" strokeWidth="1.5"/>
                          </svg>
                        ))}
                      </div>
                      <div className={styles.compactAuthor}>
                        <strong>Marcus Thompson</strong>
                      </div>
                      <div className={styles.compactBusiness}>Premium Mobile Detailing</div>
                      <div className={styles.compactLocation}>Atlanta, GA</div>
                    </div>
                  </div>
                  <div className={styles.compactReviewRight}>
                    <div className={styles.compactQuote}>
                      "I was charging $800 for detailing jobs because that's what felt right for a 'side hustle guy.' Three months after getting my website, I'm at <strong>$1,500 per job</strong> and customers don't even blink. The professional look completely changed how people perceive my business."
                    </div>
                    <div className={styles.compactBadge}>+88% Price Increase</div>
                  </div>
                </div>,

                <div key="website-2" className={styles.compactReview}>
                  <div className={styles.compactReviewLeft}>
                    <div className={styles.compactAvatar}>SK</div>
                    <div className={styles.compactMeta}>
                      <div className={styles.compactStars}>
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#f97316" stroke="#f97316" strokeWidth="1.5"/>
                          </svg>
                        ))}
                      </div>
                      <div className={styles.compactAuthor}>
                        <strong>Sarah Kozlowski</strong>
                      </div>
                      <div className={styles.compactBusiness}>Desert Bloom Landscaping</div>
                      <div className={styles.compactLocation}>Phoenix, AZ</div>
                    </div>
                  </div>
                  <div className={styles.compactReviewRight}>
                    <div className={styles.compactQuote}>
                      "I used to be embarrassed when people asked for my website—I'd send them my Instagram and hope they didn't think I was unprofessional. Now I'm proud to share my link. I've gotten <strong>multiple jobs from people</strong> who found me online and said my website looked 'legit.'"
                    </div>
                    <div className={styles.compactBadge}>3x More Leads</div>
                  </div>
                </div>,

                <div key="website-3" className={styles.compactReview}>
                  <div className={styles.compactReviewLeft}>
                    <div className={styles.compactAvatar}>JR</div>
                    <div className={styles.compactMeta}>
                      <div className={styles.compactStars}>
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#f97316" stroke="#f97316" strokeWidth="1.5"/>
                          </svg>
                        ))}
                      </div>
                      <div className={styles.compactAuthor}>
                        <strong>Javier Rodriguez</strong>
                      </div>
                      <div className={styles.compactBusiness}>Rodriguez Climate Control</div>
                      <div className={styles.compactLocation}>Dallas, TX</div>
                    </div>
                  </div>
                  <div className={styles.compactReviewRight}>
                    <div className={styles.compactQuote}>
                      "I spent $30k on my truck and tools but had a Wix site that looked like a high schooler made it. Getting a real website made me feel like a real business owner for the first time. My <strong>booking rate went from 30% to 65%</strong> after the switch."
                    </div>
                    <div className={styles.compactBadge}>65% Booking Rate</div>
                  </div>
                </div>
              ]}
            </TestimonialCarousel>
          </div>
        </section>

        {/* Digital Marketing Testimonials */}
        <section className={styles.testimonialSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.badge} style={{background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)'}}>Digital Marketing</span>
              <h2 className={styles.sectionTitle}>From Invisible to #1 on Google</h2>
            </div>

            <TestimonialCarousel sectionId="marketing">
              {[
                <div key="marketing-1" className={styles.compactReview}>
                  <div className={styles.compactReviewLeft}>
                    <div className={styles.compactAvatar}>CM</div>
                    <div className={styles.compactMeta}>
                      <div className={styles.compactStars}>
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#f97316" stroke="#f97316" strokeWidth="1.5"/>
                          </svg>
                        ))}
                      </div>
                      <div className={styles.compactAuthor}>
                        <strong>Carlos Martinez</strong>
                      </div>
                      <div className={styles.compactBusiness}>GreenScape ATX Landscaping</div>
                      <div className={styles.compactLocation}>Austin, TX</div>
                    </div>
                  </div>
                  <div className={styles.compactReviewRight}>
                    <div className={styles.compactQuote}>
                      "I went from begging for work to turning down jobs. My Google Business profile now shows up <strong>#1 for 'landscaping near me'</strong> in my city. I get 4-5 calls per day from Google alone. Best $199/month I've ever spent."
                    </div>
                    <div className={styles.compactBadge}>#1 Local Ranking</div>
                  </div>
                </div>,

                <div key="marketing-2" className={styles.compactReview}>
                  <div className={styles.compactReviewLeft}>
                    <div className={styles.compactAvatar}>JL</div>
                    <div className={styles.compactMeta}>
                      <div className={styles.compactStars}>
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#f97316" stroke="#f97316" strokeWidth="1.5"/>
                          </svg>
                        ))}
                      </div>
                      <div className={styles.compactAuthor}>
                        <strong>Jennifer Lewis</strong>
                      </div>
                      <div className={styles.compactBusiness}>Sparkle Pro Cleaning Services</div>
                      <div className={styles.compactLocation}>Denver, CO</div>
                    </div>
                  </div>
                  <div className={styles.compactReviewRight}>
                    <div className={styles.compactQuote}>
                      "Within 30 days, I started getting <strong>3-5 new customer calls per week</strong>. I had to hire help to keep up with demand. This marketing stuff actually works when pros handle it—I tried doing it myself for a year with zero results."
                    </div>
                    <div className={styles.compactBadge}>247% Traffic Increase</div>
                  </div>
                </div>,

                <div key="marketing-3" className={styles.compactReview}>
                  <div className={styles.compactReviewLeft}>
                    <div className={styles.compactAvatar}>MR</div>
                    <div className={styles.compactMeta}>
                      <div className={styles.compactStars}>
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#f97316" stroke="#f97316" strokeWidth="1.5"/>
                          </svg>
                        ))}
                      </div>
                      <div className={styles.compactAuthor}>
                        <strong>Mike Richardson</strong>
                      </div>
                      <div className={styles.compactBusiness}>Bay Area Plumbing & HVAC</div>
                      <div className={styles.compactLocation}>Tampa, FL</div>
                    </div>
                  </div>
                  <div className={styles.compactReviewRight}>
                    <div className={styles.compactQuote}>
                      "I tried running my own Google Ads and Facebook ads—total disaster. Spent $2,000 and got maybe 3 leads. These guys set it up right and I now track every dollar spent and every lead that comes in. My <strong>ROI is 5:1</strong>."
                    </div>
                    <div className={styles.compactBadge}>5:1 ROI</div>
                  </div>
                </div>
              ]}
            </TestimonialCarousel>
          </div>
        </section>

        {/* Branding Testimonials */}
        <section className={styles.testimonialSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.badge} style={{background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'}}>Branding</span>
              <h2 className={styles.sectionTitle}>From Amateur to Established</h2>
            </div>

            <TestimonialCarousel sectionId="branding">
              {[
                <div key="branding-1" className={styles.compactReview}>
                  <div className={styles.compactReviewLeft}>
                    <div className={styles.compactAvatar}>DP</div>
                    <div className={styles.compactMeta}>
                      <div className={styles.compactStars}>
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#f97316" stroke="#f97316" strokeWidth="1.5"/>
                          </svg>
                        ))}
                      </div>
                      <div className={styles.compactAuthor}>
                        <strong>Derek Patterson</strong>
                      </div>
                      <div className={styles.compactBusiness}>Summit Roofing & Exteriors</div>
                      <div className={styles.compactLocation}>Portland, OR</div>
                    </div>
                  </div>
                  <div className={styles.compactReviewRight}>
                    <div className={styles.compactQuote}>
                      "My old logo was something I made in 5 minutes on Fiverr for $5. Now I have a <strong>brand I'm actually proud</strong> to put on my truck, my shirts, my business cards. Customers comment on how professional it looks all the time."
                    </div>
                    <div className={styles.compactBadge}>Premium Positioning</div>
                  </div>
                </div>,

                <div key="branding-2" className={styles.compactReview}>
                  <div className={styles.compactReviewLeft}>
                    <div className={styles.compactAvatar}>AK</div>
                    <div className={styles.compactMeta}>
                      <div className={styles.compactStars}>
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#f97316" stroke="#f97316" strokeWidth="1.5"/>
                          </svg>
                        ))}
                      </div>
                      <div className={styles.compactAuthor}>
                        <strong>Amanda Krause</strong>
                      </div>
                      <div className={styles.compactBusiness}>Pawsitive Grooming Studio</div>
                      <div className={styles.compactLocation}>Nashville, TN</div>
                    </div>
                  </div>
                  <div className={styles.compactReviewRight}>
                    <div className={styles.compactQuote}>
                      "I was embarrassed to hand out business cards with my old branding. Now? I'm handing them out like candy. People actually keep them because they look nice. I've gotten <strong>multiple referrals</strong> from people who kept my card."
                    </div>
                    <div className={styles.compactBadge}>2x Referrals</div>
                  </div>
                </div>,

                <div key="branding-3" className={styles.compactReview}>
                  <div className={styles.compactReviewLeft}>
                    <div className={styles.compactAvatar}>LG</div>
                    <div className={styles.compactMeta}>
                      <div className={styles.compactStars}>
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#f97316" stroke="#f97316" strokeWidth="1.5"/>
                          </svg>
                        ))}
                      </div>
                      <div className={styles.compactAuthor}>
                        <strong>Luis Garcia</strong>
                      </div>
                      <div className={styles.compactBusiness}>Elite Painting Solutions</div>
                      <div className={styles.compactLocation}>Miami, FL</div>
                    </div>
                  </div>
                  <div className={styles.compactReviewRight}>
                    <div className={styles.compactQuote}>
                      "Professional branding was the final piece I needed to charge premium prices. My old logo said 'cheap labor.' My new brand says 'quality service.' I <strong>raised my prices 40%</strong> and nobody complained."
                    </div>
                    <div className={styles.compactBadge}>+40% Pricing</div>
                  </div>
                </div>
              ]}
            </TestimonialCarousel>
          </div>
        </section>

        {/* Full Package Testimonials */}
        <section className={styles.testimonialSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.badge} style={{background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)'}}>Complete Package</span>
              <h2 className={styles.sectionTitle}>The Full Transformation</h2>
            </div>

            <TestimonialCarousel sectionId="complete">
              {[
                <div key="complete-1" className={styles.compactReview}>
                  <div className={styles.compactReviewLeft}>
                    <div className={styles.compactAvatar}>BS</div>
                    <div className={styles.compactMeta}>
                      <div className={styles.compactStars}>
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#f97316" stroke="#f97316" strokeWidth="1.5"/>
                          </svg>
                        ))}
                      </div>
                      <div className={styles.compactAuthor}>
                        <strong>Brandon Sullivan</strong>
                      </div>
                      <div className={styles.compactBusiness}>Pacific Northwest Pressure Washing</div>
                      <div className={styles.compactLocation}>Seattle, WA</div>
                    </div>
                  </div>
                  <div className={styles.compactReviewRight}>
                    <div className={styles.compactQuote}>
                      "I went all in—website, branding, and marketing. Best business decision I ever made. Within 6 months, I went from <strong>$4,500/month revenue to $18,000/month</strong>. I had to hire two employees. The investment paid for itself in the first month."
                    </div>
                    <div className={styles.compactBadge}>4x Revenue Growth</div>
                  </div>
                </div>,

                <div key="complete-2" className={styles.compactReview}>
                  <div className={styles.compactReviewLeft}>
                    <div className={styles.compactAvatar}>TM</div>
                    <div className={styles.compactMeta}>
                      <div className={styles.compactStars}>
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#f97316" stroke="#f97316" strokeWidth="1.5"/>
                          </svg>
                        ))}
                      </div>
                      <div className={styles.compactAuthor}>
                        <strong>Tyler Morrison</strong>
                      </div>
                      <div className={styles.compactBusiness}>Morrison Electrical Solutions</div>
                      <div className={styles.compactLocation}>Charlotte, NC</div>
                    </div>
                  </div>
                  <div className={styles.compactReviewRight}>
                    <div className={styles.compactQuote}>
                      "I was working 70 hours a week just to make $60k/year. After getting my full online presence set up, I'm making <strong>$120k working 45 hours</strong>. I can finally take weekends off. My wife is happy, I'm happy, and I'm not stressed about where the next job is coming from."
                    </div>
                    <div className={styles.compactBadge}>2x Income, Less Hours</div>
                  </div>
                </div>
              ]}
            </TestimonialCarousel>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefitsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>What <span style={{ whiteSpace: 'nowrap' }}>Service Pro<sup style={{ color: '#f97316' }}>+</sup></span> Members Experience</h2>
            <p className={styles.sectionSubtitle}>
              These aren't just nice-to-haves—they're the proven results our <span style={{ whiteSpace: 'nowrap' }}>Service Pro<sup style={{ color: '#f97316' }}>+</sup></span> members experience every day
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
            <p className={styles.guarantee}>✓ 7-Day Delivery  ✓ 30-Day Money-Back Guarantee  ✓ Cancel Anytime</p>
          </div>
        </section>
      </main>
    </TestimonialsClient>
  )
}
