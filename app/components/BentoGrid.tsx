import Link from 'next/link'
import styles from './BentoGrid.module.css'
import { trackCTAClick } from '../utils/analytics'

export default function BentoGrid() {
  return (
    <div className={styles.transformationShowcase}>
      {/* Problem Statement */}
      <div className={styles.problemStatement}>
        <h2 className={styles.problemHeading}>Customers Still Can't Find You?</h2>
        <p className={styles.problemSubheading}>
          Every day without a professional online presence costs you jobs, credibility, and money
        </p>
        <div className={styles.problemCards}>
          <div className={styles.problemCard}>
            <div className={styles.roadSignContainer}>
              <img src="/sign-nobrand-pressence.svg" alt="No Brand Presence" className={styles.roadSign} />
            </div>
            <h3 className={styles.problemTitle}>No Website = No Credibility</h3>
            <ul className={styles.problemList}>
              <li>Customers don&apos;t trust businesses without a website</li>
              <li>&quot;Just DM me on Instagram&quot; makes you look unprofessional</li>
              <li>No link to send when someone asks for a quote</li>
              <li>Competitors look established → they win the job</li>
            </ul>
          </div>
          <div className={styles.problemCard}>
            <div className={styles.roadSignContainer}>
              <img src="/sign-diwhy.svg" alt="DI...WHY?" className={styles.roadSign} />
            </div>
            <h3 className={styles.problemTitle}>&apos;Drag & Drop&apos; Burnout</h3>
            <ul className={styles.problemList}>
              <li>Losing weekends trying to build a site from scratch</li>
              <li>Wix/Canva templates make your business look generic</li>
              <li>No clue how to rank on Google or handle SEO</li>
              <li>Every hour DIY&apos;ing is an hour you&apos;re not earning money</li>
            </ul>
          </div>
          <div className={styles.problemCard}>
            <div className={styles.roadSignContainer}>
              <img src="/sign-losingto-competitors.svg" alt="Losing to Competitors" className={styles.roadSign} />
            </div>
            <h3 className={styles.problemTitle}>Can&apos;t Find You, Won&apos;t Hire You</h3>
            <ul className={styles.problemList}>
              <li>You don&apos;t show up when customers search &quot;___ near me&quot;</li>
              <li>Competitors book 3 jobs while you wait on 1 callback</li>
              <li>No Google presence = assumed unreliable or unprofessional</li>
              <li>Forced to underprice because your brand doesn&apos;t justify premium rates</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Elegant Divider */}
      <div className={styles.elegantDivider}>
        <div className={styles.dividerLine}></div>
      </div>

      {/* Solution Section */}
      <div className={styles.solutionSection}>
        <h2 className={styles.solutionHeading}>Why Service Nerd <span className={styles.proText}>Pro<sup className={styles.plusSuper}>+</sup></span></h2>
        <p className={styles.solutionSubheading}>
          <span className={styles.strikethrough}>Invisible & unprofessional</span>
          <span className={styles.arrow}>➜</span>
          <span className={styles.transformation}>Premium & credible</span>
        </p>
        <div className={styles.solutionCards}>
          <div className={styles.solutionCard}>
            <div className={styles.solutionThumbnail}>
              <img src="/website-design-icon.svg" alt="Website Design" />
            </div>
            <div className={styles.solutionContent}>
              <h3>Website Design</h3>
              <p>Customers can book you from their driveway. Mobile-first design means you never miss a lead. Looks professional, loads instantly—customers stay.</p>
              <div className={styles.deliveryBadge}>Delivered in 7 days</div>
            </div>
          </div>
          <div className={styles.solutionCard}>
            <div className={styles.solutionThumbnail}>
              <img src="/marketing-icon.svg" alt="Online Marketing" />
            </div>
            <div className={styles.solutionContent}>
              <h3>Online Marketing</h3>
              <p>Show up when locals search for your services—not on page 4. Your website works while you sleep so you never miss a lead. Fill your calendar with qualified customers.</p>
              <div className={styles.deliveryBadge}>Delivered in 7 days</div>
            </div>
          </div>
          <div className={styles.solutionCard}>
            <div className={styles.solutionThumbnail}>
              <img src="/branding-icon.svg" alt="Bitchin' Branding" />
            </div>
            <div className={styles.solutionContent}>
              <h3>Bitchin' Branding</h3>
              <p>Command premium prices without pushback. Customers expect to pay more when your brand looks premium. Finally have a logo you're proud to share.</p>
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
          <div className={styles.valueButtons}>
            <Link
              href="/pricing"
              onClick={() => trackCTAClick('bento_value_statement', 'View Pricing Plans', '/pricing')}
            >
              <button className={styles.valuePrimaryButton}>View Pricing Plans</button>
            </Link>
            <Link
              href="/testimonials"
              onClick={() => trackCTAClick('bento_value_statement', 'See Success Stories', '/testimonials')}
            >
              <button className={styles.valueSecondaryButton}>See Success Stories</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
