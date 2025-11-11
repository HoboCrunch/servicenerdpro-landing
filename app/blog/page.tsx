import { Metadata } from 'next'
import styles from './page.module.css'
import Header from '../components/Header'
import Link from 'next/link'
import { getAllBlogPosts } from './blogData'

export const metadata: Metadata = {
  title: 'Blog | Service Nerd Pro - Growth Strategies for Service Businesses',
  description: 'Practical advice for service business owners who want to grow, charge more, and work less. Expert tips on marketing, pricing, branding, and business growth.',
  keywords: 'service business blog, marketing tips, pricing strategy, business growth, website design, local SEO, service business advice',
}

export default function Blog() {
  const allPosts = getAllBlogPosts()

  // Featured post is the first one (id: 0)
  const featuredPost = allPosts[0]

  // Regular posts are the rest
  const blogPosts = allPosts.slice(1)

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
            <Link href={`/blog/${featuredPost.slug}`} className={styles.featuredPost}>
              <div className={styles.featuredImage}>
                <span className={styles.featuredBadge}>Featured</span>
                <div className={styles.imagePlaceholder}>
                  <span className={styles.placeholderText}>Featured Post Image</span>
                </div>
              </div>
              <div className={styles.featuredContent}>
                <span className={styles.category}>{featuredPost.category}</span>
                <h2 className={styles.featuredTitle}>
                  {featuredPost.title}
                </h2>
                <p className={styles.featuredExcerpt}>
                  {featuredPost.excerpt}
                </p>
                <div className={styles.featuredMeta}>
                  <span className={styles.date}>{featuredPost.date}</span>
                  <span className={styles.readTime}>{featuredPost.readTime}</span>
                </div>
                <button className={styles.readButton}>Read Full Article →</button>
              </div>
            </Link>
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
                <Link key={post.id} href={`/blog/${post.slug}`} className={styles.blogCard}>
                  <article>
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
                </Link>
              ))}
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
