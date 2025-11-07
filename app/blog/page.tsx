import styles from './page.module.css'
import Header from '../components/Header'
import Link from 'next/link'

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      category: 'Website Design',
      title: '5 Reasons Your DIY Website Is Costing You Customers',
      excerpt: 'Your Wix or Squarespace site might look "fine" to you, but here\'s what customers see—and why they\'re choosing your competitors instead.',
      date: 'March 15, 2024',
      readTime: '5 min read',
      image: '/blog-1.jpg'
    },
    {
      id: 2,
      category: 'Digital Marketing',
      title: 'How to Show Up #1 on Google (Without Spending Thousands)',
      excerpt: 'Local SEO isn\'t rocket science, but most service businesses get it completely wrong. Here\'s the simple strategy that actually works.',
      date: 'March 12, 2024',
      readTime: '7 min read',
      image: '/blog-2.jpg'
    },
    {
      id: 3,
      category: 'Branding',
      title: 'Why Premium Brands Charge 3x More (And How You Can Too)',
      excerpt: 'The difference between $500 jobs and $1,500 jobs isn\'t your skills—it\'s your branding. Here\'s how to position yourself as the premium choice.',
      date: 'March 10, 2024',
      readTime: '6 min read',
      image: '/blog-3.jpg'
    },
    {
      id: 4,
      category: 'Business Growth',
      title: 'Stop Trading Time for Money: Scale Your Service Business',
      excerpt: 'You\'re maxed out on hours but still can\'t break $100k/year? Here\'s the mindset shift that changed everything for 500+ service pros.',
      date: 'March 8, 2024',
      readTime: '8 min read',
      image: '/blog-4.jpg'
    },
    {
      id: 5,
      category: 'Website Design',
      title: 'Mobile-First Design: Why 67% of Your Traffic is on Phones',
      excerpt: 'If your website doesn\'t look perfect on mobile, you\'re losing more than half your potential customers. Here\'s what to fix first.',
      date: 'March 5, 2024',
      readTime: '5 min read',
      image: '/blog-5.jpg'
    },
    {
      id: 6,
      category: 'Digital Marketing',
      title: 'Google Business Profile Secrets: Get More Calls This Week',
      excerpt: 'Most service businesses have a Google Business Profile but don\'t optimize it. These 7 changes can double your phone calls in 30 days.',
      date: 'March 3, 2024',
      readTime: '6 min read',
      image: '/blog-6.jpg'
    },
    {
      id: 7,
      category: 'Pricing Strategy',
      title: 'How to Raise Your Prices Without Losing Customers',
      excerpt: 'You\'re undercharging and you know it. Here\'s the exact script that helped 200+ service pros increase prices by 40% with zero pushback.',
      date: 'March 1, 2024',
      readTime: '7 min read',
      image: '/blog-7.jpg'
    },
    {
      id: 8,
      category: 'Branding',
      title: 'Logo Psychology: Colors That Make Customers Trust You',
      excerpt: 'Your logo colors aren\'t just aesthetic—they\'re psychological triggers. Here\'s what your current colors are saying about your business.',
      date: 'February 28, 2024',
      readTime: '5 min read',
      image: '/blog-8.jpg'
    },
    {
      id: 9,
      category: 'Business Growth',
      title: 'From Solo to Team: Hiring Your First Employee (Without Going Broke)',
      excerpt: 'Ready to stop doing everything yourself? This step-by-step guide shows you exactly when and how to hire without killing your cash flow.',
      date: 'February 26, 2024',
      readTime: '9 min read',
      image: '/blog-9.jpg'
    }
  ]

  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                The Service Nerd Pro Blog
              </h1>
              <p className={styles.heroSubtitle}>
                Practical advice for service business owners who want to grow, charge more, and work less. No fluff, just strategies that actually work.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className={styles.featuredSection}>
          <div className={styles.container}>
            <div className={styles.featuredPost}>
              <div className={styles.featuredImage}>
                <span className={styles.featuredBadge}>Featured</span>
                <div className={styles.imagePlaceholder}>
                  <span className={styles.placeholderText}>Featured Post Image</span>
                </div>
              </div>
              <div className={styles.featuredContent}>
                <span className={styles.category}>Business Growth</span>
                <h2 className={styles.featuredTitle}>
                  From $60k to $150k in 12 Months: The Complete Playbook
                </h2>
                <p className={styles.featuredExcerpt}>
                  This isn't another "work harder" article. This is the exact system that 100+ service pros used to double their income while working fewer hours. Learn the mindset shifts, pricing strategies, and marketing tactics that actually move the needle.
                </p>
                <div className={styles.featuredMeta}>
                  <span className={styles.date}>March 18, 2024</span>
                  <span className={styles.readTime}>12 min read</span>
                </div>
                <button className={styles.readButton}>Read Full Article →</button>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className={styles.blogSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Latest Articles</h2>
              <div className={styles.filterButtons}>
                <button className={`${styles.filterButton} ${styles.active}`}>All</button>
                <button className={styles.filterButton}>Website Design</button>
                <button className={styles.filterButton}>Digital Marketing</button>
                <button className={styles.filterButton}>Branding</button>
                <button className={styles.filterButton}>Business Growth</button>
              </div>
            </div>

            <div className={styles.blogGrid}>
              {blogPosts.map((post) => (
                <article key={post.id} className={styles.blogCard}>
                  <div className={styles.blogImage}>
                    <div className={styles.imagePlaceholder}>
                      <span className={styles.placeholderText}>Post Image</span>
                    </div>
                    <span className={styles.blogCategory}>{post.category}</span>
                  </div>
                  <div className={styles.blogContent}>
                    <h3 className={styles.blogTitle}>{post.title}</h3>
                    <p className={styles.blogExcerpt}>{post.excerpt}</p>
                    <div className={styles.blogMeta}>
                      <span className={styles.date}>{post.date}</span>
                      <span className={styles.readTime}>{post.readTime}</span>
                    </div>
                    <button className={styles.blogReadButton}>Read More →</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className={styles.newsletter}>
          <div className={styles.container}>
            <div className={styles.newsletterContent}>
              <h2 className={styles.newsletterTitle}>Never Miss a Post</h2>
              <p className={styles.newsletterSubtitle}>
                Get weekly tips on growing your service business, straight to your inbox. No spam, just actionable advice.
              </p>
              <form className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={styles.newsletterInput}
                />
                <button type="submit" className={styles.newsletterButton}>
                  Subscribe
                </button>
              </form>
              <p className={styles.newsletterNote}>Join 5,000+ service professionals already subscribed</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <h2 className={styles.ctaTitle}>Ready to Put This Into Action?</h2>
            <p className={styles.ctaSubtitle}>
              Stop reading and start doing. Get your professional website, branding, and marketing setup in 7 days.
            </p>
            <Link href="/pricing">
              <button className={styles.ctaButton}>Get Started Today</button>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
