// Google Analytics 4 Event Tracking Utilities

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
    dataLayer: any[];
  }
}

// Event tracking for conversion funnel
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// CTA Click Events
export const trackCTAClick = (
  ctaLocation: string,
  ctaText: string,
  destination: string
) => {
  trackEvent('cta_click', {
    event_category: 'engagement',
    event_label: ctaLocation,
    cta_text: ctaText,
    destination: destination,
  });
};

// Exit Intent Popup Events
export const trackExitIntentShow = () => {
  trackEvent('exit_intent_shown', {
    event_category: 'lead_generation',
  });
};

export const trackExitIntentSubmit = (email: string) => {
  trackEvent('exit_intent_submit', {
    event_category: 'conversion',
    event_label: 'free_audit_request',
  });
  // Track as conversion
  trackEvent('generate_lead', {
    value: 50, // Estimated lead value
    currency: 'USD',
  });
};

export const trackExitIntentDismiss = () => {
  trackEvent('exit_intent_dismissed', {
    event_category: 'engagement',
  });
};

// Sticky Mobile CTA Events
export const trackStickyMobileCTAShow = () => {
  trackEvent('sticky_mobile_cta_shown', {
    event_category: 'engagement',
  });
};

export const trackStickyMobileCTAClick = () => {
  trackEvent('sticky_mobile_cta_click', {
    event_category: 'engagement',
    event_label: 'mobile_conversion',
  });
};

// Pricing Page Events
export const trackPricingPageView = () => {
  trackEvent('pricing_page_view', {
    event_category: 'funnel',
    funnel_step: 'pricing_review',
  });
};

export const trackCheckoutInitiated = (tier: string) => {
  trackEvent('begin_checkout', {
    event_category: 'conversion',
    event_label: tier,
  });
};

// Testimonial Page Events
export const trackTestimonialPageView = () => {
  trackEvent('testimonial_page_view', {
    event_category: 'funnel',
    funnel_step: 'social_proof_review',
  });
};

// FAQ Interaction Events
export const trackFAQClick = (question: string) => {
  trackEvent('faq_interaction', {
    event_category: 'engagement',
    event_label: question,
  });
};

// A/B Test Variant Assignment
export const trackABTestVariant = (
  testName: string,
  variant: string
) => {
  trackEvent('ab_test_view', {
    event_category: 'experiment',
    test_name: testName,
    variant: variant,
  });
};

// Scroll Depth Tracking
export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', {
    event_category: 'engagement',
    event_label: `${depth}%`,
    value: depth,
  });
};

// Time on Page Milestones
export const trackTimeOnPage = (seconds: number) => {
  trackEvent('time_on_page', {
    event_category: 'engagement',
    event_label: `${seconds}s`,
    value: seconds,
  });
};

// Trust Badge Click
export const trackTrustBadgeClick = () => {
  trackEvent('trust_badge_click', {
    event_category: 'engagement',
    event_label: 'credibility_check',
  });
};

// Urgency Banner Impression (on pricing page)
export const trackUrgencyBannerView = () => {
  trackEvent('urgency_banner_view', {
    event_category: 'engagement',
    event_label: '7_day_guarantee',
  });
};

// Form Interactions
export const trackFormFocus = (formName: string) => {
  trackEvent('form_start', {
    event_category: 'engagement',
    form_name: formName,
  });
};

export const trackFormSubmit = (formName: string) => {
  trackEvent('form_submit', {
    event_category: 'conversion',
    form_name: formName,
  });
};

// Video/Media Engagement
export const trackMediaPlay = (mediaType: string, mediaName: string) => {
  trackEvent('media_play', {
    event_category: 'engagement',
    media_type: mediaType,
    media_name: mediaName,
  });
};
