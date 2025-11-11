'use client'

import { useEffect, useState, useCallback } from 'react'
import { trackTestimonialPageView } from '../utils/analytics'
import { usePageTracking } from '../hooks/usePageTracking'
import styles from './TestimonialsClient.module.css'

interface CarouselProps {
  children: React.ReactNode[]
  sectionId: string
}

export function TestimonialCarousel({ children, sectionId }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % children.length)
  }, [children.length])

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + children.length) % children.length)
  }, [children.length])

  const goToIndex = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselContent}>
        {children[currentIndex]}
      </div>

      <div className={styles.carouselControls}>
        <button
          className={styles.carouselButton}
          onClick={goToPrev}
          aria-label="Previous testimonial"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className={styles.carouselIndicators}>
          {children.map((_, index) => (
            <button
              key={`${sectionId}-${index}`}
              className={`${styles.carouselIndicator} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => goToIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          className={styles.carouselButton}
          onClick={goToNext}
          aria-label="Next testimonial"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default function TestimonialsClient({ children }: { children: React.ReactNode }) {
  // Track page engagement
  usePageTracking()

  useEffect(() => {
    trackTestimonialPageView()
  }, [])

  return <>{children}</>
}
