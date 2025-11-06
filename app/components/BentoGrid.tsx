import styles from './BentoGrid.module.css'

export default function BentoGrid() {
  return (
    <div className={styles.transformationShowcase}>
      {/* Problem Statement */}
      <div className={styles.problemStatement}>
        <div className={styles.problemCards}>
          <div className={styles.problemCard}>
            <div className={styles.roadSignContainer}>
              <img src="/sign-nobrand-pressence.svg" alt="No Brand Presence" className={styles.roadSign} />
              <div className={styles.signShadow}></div>
            </div>
            <p>Your Instagram isn&apos;t a website - and clients know it.</p>
          </div>
          <div className={styles.problemCard}>
            <div className={styles.roadSignContainer}>
              <img src="/sign-diwhy.svg" alt="DI...WHY?" className={styles.roadSign} />
              <div className={styles.signShadow}></div>
            </div>
            <p>Wasting weeks on DIY marketing that still feels cheap.</p>
          </div>
          <div className={styles.problemCard}>
            <div className={styles.roadSignContainer}>
              <img src="/sign-losingto-competitors.svg" alt="Losing to Competitors" className={styles.roadSign} />
              <div className={styles.signShadow}></div>
            </div>
            <p>Competition with websites score the jobsites instead of you.</p>
          </div>
        </div>
      </div>

      {/* Arrow/Divider */}
      <div className={styles.transformArrow}>
        <div className={styles.arrowLine}></div>
        <div className={styles.arrowIcon}>↓</div>
        <div className={styles.arrowLine}></div>
      </div>

      {/* Solution Section */}
      <div className={styles.solutionSection}>
        <div className={styles.sectionBadge}>
          <span className={styles.badgeIcon}>✅</span>
          <span>With ServiceNerd Pro</span>
        </div>
        <div className={styles.solutionCards}>
          <div className={styles.solutionCard}>
            <div className={styles.solutionThumbnail}>
              <img src="/website-design-icon.svg" alt="Website Design" />
            </div>
            <div className={styles.solutionContent}>
              <h3>Website Design</h3>
              <p>Unlimited pages. Mobile-optimized. Zero downtime hosting. 24/7 support. Stop losing clients to &quot;I&apos;ll check your website.&quot;</p>
              <div className={styles.deliveryBadge}>Delivered in 7 days</div>
            </div>
          </div>
          <div className={styles.solutionCard}>
            <div className={styles.solutionThumbnail}>
              <img src="/marketing-icon.svg" alt="Online Marketing" />
            </div>
            <div className={styles.solutionContent}>
              <h3>Online Marketing</h3>
              <p>Local SEO. Review management. Free monthly strategy sessions. Get found first when customers search in your area.</p>
              <div className={styles.deliveryBadge}>Delivered in 7 days</div>
            </div>
          </div>
          <div className={styles.solutionCard}>
            <div className={styles.solutionThumbnail}>
              <img src="/branding-icon.svg" alt="Bitchin' Branding" />
            </div>
            <div className={styles.solutionContent}>
              <h3>Bitchin' Branding</h3>
              <p>Professional logo. Brand colors. Social templates. 100 free business cards. Look like the premium option&mdash;because you are.</p>
              <div className={styles.deliveryBadge}>Delivered in 7 days</div>
            </div>
          </div>
        </div>
      </div>

      {/* Value Statement */}
      <div className={styles.valueStatement}>
        <div className={styles.valueContent}>
          <h3>Everything you need to look legit and land premium clients</h3>
          <p>No $5,000 agency fees. No tech headaches. No wasted weekends.</p>
          <div className={styles.valuePrice}>
            <span className={styles.valuePriceAmount}>$199/month</span>
            <span className={styles.valuePriceTag}>Cancel anytime</span>
          </div>
        </div>
      </div>
    </div>
  )
}
