'use client'

import { useEffect } from 'react'
import { trackTestimonialPageView } from '../utils/analytics'
import { usePageTracking } from '../hooks/usePageTracking'

export default function TestimonialsClient({ children }: { children: React.ReactNode }) {
  // Track page engagement
  usePageTracking()

  useEffect(() => {
    trackTestimonialPageView()
  }, [])

  return <>{children}</>
}
