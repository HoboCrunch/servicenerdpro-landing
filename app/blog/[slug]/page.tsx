import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '../../components/Header'
import { getBlogPostBySlug, getAllBlogPosts } from '../blogData'
import styles from './page.module.css'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: 'Blog Post Not Found',
    }
  }

  return {
    title: post.seo.metaTitle,
    description: post.seo.metaDescription,
    keywords: post.seo.keywords.join(', '),
    openGraph: {
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'Service Nerd Pro Team'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
    }
  }
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const allPosts = getAllBlogPosts()
  const relatedPosts = allPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3)

  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Breadcrumb */}
        <section className={styles.breadcrumb}>
          <div className={styles.container}>
            <Link href="/" className={styles.breadcrumbLink}>Home</Link>
            <span className={styles.breadcrumbSeparator}>/</span>
            <Link href="/blog" className={styles.breadcrumbLink}>Blog</Link>
            <span className={styles.breadcrumbSeparator}>/</span>
            <span className={styles.breadcrumbCurrent}>{post.title}</span>
          </div>
        </section>

        {/* Article Header */}
        <article className={styles.article}>
          <div className={styles.container}>
            <header className={styles.articleHeader}>
              <span className={styles.category}>{post.category}</span>
              <h1 className={styles.title}>{post.title}</h1>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <div className={styles.meta}>
                <span className={styles.author}>By {post.author || 'Service Nerd Pro Team'}</span>
                <span className={styles.separator}>•</span>
                <span className={styles.date}>{post.date}</span>
                <span className={styles.separator}>•</span>
                <span className={styles.readTime}>{post.readTime}</span>
              </div>
            </header>

            {/* Featured Image */}
            <div className={styles.featuredImage}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.placeholderText}>Featured Image</span>
              </div>
            </div>

            {/* Article Content */}
            <div className={styles.content}>
              <div className={styles.introduction}>
                <p>{post.content.introduction}</p>
              </div>

              {post.content.sections.map((section, index) => (
                <section key={index} className={styles.section}>
                  <h2 className={styles.sectionHeading}>{section.heading}</h2>
                  <p className={styles.sectionContent}>{section.content}</p>
                </section>
              ))}

              <div className={styles.conclusion}>
                <h2 className={styles.sectionHeading}>The Bottom Line</h2>
                <p>{post.content.conclusion}</p>
              </div>
            </div>

            {/* CTA Box */}
            <div className={styles.ctaBox}>
              <h3 className={styles.ctaTitle}>Ready to Transform Your Service Business?</h3>
              <p className={styles.ctaText}>
                Stop reading and start doing. Get your professional website, branding, and marketing setup in 7 days.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/pricing">
                  <button className={styles.ctaPrimary}>Get Started Today</button>
                </Link>
                <Link href="/blog">
                  <button className={styles.ctaSecondary}>Read More Articles</button>
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className={styles.relatedSection}>
            <div className={styles.container}>
              <h2 className={styles.relatedTitle}>Related Articles</h2>
              <div className={styles.relatedGrid}>
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className={styles.relatedCard}
                  >
                    <div className={styles.relatedImage}>
                      <div className={styles.imagePlaceholder}>
                        <span className={styles.placeholderText}>Post Image</span>
                      </div>
                      <span className={styles.relatedCategory}>{relatedPost.category}</span>
                    </div>
                    <div className={styles.relatedContent}>
                      <h3 className={styles.relatedCardTitle}>{relatedPost.title}</h3>
                      <p className={styles.relatedExcerpt}>{relatedPost.excerpt}</p>
                      <div className={styles.relatedMeta}>
                        <span className={styles.date}>{relatedPost.date}</span>
                        <span className={styles.readTime}>{relatedPost.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Newsletter CTA */}
        <section className={styles.newsletter}>
          <div className={styles.container}>
            <div className={styles.newsletterContent}>
              <h2 className={styles.newsletterTitle}>Get Weekly Growth Tips</h2>
              <p className={styles.newsletterSubtitle}>
                Join 5,000+ service professionals getting actionable advice to grow their business every week. No spam, just results.
              </p>
              <form className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={styles.newsletterInput}
                  required
                />
                <button type="submit" className={styles.newsletterButton}>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
