# ServiceNerdPro Analytics & Testing Guide

**Last Updated:** 2025-11-07
**Phase:** 4 - Testing & Refinement
**Status:** Analytics infrastructure complete, tracking active

---

## Overview

All conversion events are now tracked in Google Analytics 4 (GA4). This guide explains what's being tracked, how to access your data, and how to interpret results.

## GA4 Setup

**GA4 Property ID:** `G-PZV18FBWD6`

### How to Access Your Analytics

1. Go to [analytics.google.com](https://analytics.google.com)
2. Select property `G-PZV18FBWD6`
3. Navigate to **Reports** → **Engagement** → **Events**

---

## Tracked Events

### 1. CTA Click Tracking

**Event Name:** `cta_click`

**Tracks:** All call-to-action button clicks across the site

**Parameters:**
- `event_category`: engagement
- `event_label`: Location (hero, final_cta, etc.)
- `cta_text`: Button text
- `destination`: Where the CTA links to

**Where It's Used:**
- Home page hero CTAs (app/components/HomeClient.tsx:56-64)
- Final CTA section (app/components/HomeClient.tsx:236)
- All service pages

**How to View:**
1. GA4 → Events → `cta_click`
2. Add secondary dimension: `event_label` to see which CTA performed best
3. Compare `/pricing` destination clicks vs `/testimonials`

**Key Metrics:**
- **Hero CTA click rate** = `cta_click` (hero) / page_view (home)
- **Final CTA click rate** = `cta_click` (final_cta) / page_view (home)
- Target: >15% click rate on hero CTA

---

### 2. Exit Intent Popup Tracking

**Event Names:**
- `exit_intent_shown`
- `exit_intent_submit`
- `exit_intent_dismissed`
- `generate_lead` (conversion event)

**Where It's Used:** app/components/ExitIntentPopup.tsx

**How to View:**
1. GA4 → Events → `exit_intent_shown`
2. Create funnel: shown → submit OR dismiss

**Key Metrics:**
- **Show rate** = `exit_intent_shown` / unique_visitors
- **Conversion rate** = `exit_intent_submit` / `exit_intent_shown`
- **Dismiss rate** = `exit_intent_dismissed` / `exit_intent_shown`
- Target: 10-25% conversion rate on shown popups

**Optimization Tips:**
- If conversion rate < 10%: Test different offer copy
- If dismiss rate > 80%: Popup may be too aggressive
- If show rate < 5%: Users leaving before trigger (improve page content)

---

### 3. Sticky Mobile CTA Tracking

**Event Names:**
- `sticky_mobile_cta_shown`
- `sticky_mobile_cta_click`

**Where It's Used:** app/components/StickyMobileCTA.tsx

**How to View:**
1. GA4 → Events → `sticky_mobile_cta_click`
2. Filter by device category: mobile + tablet

**Key Metrics:**
- **Mobile CTA click rate** = `sticky_mobile_cta_click` / `sticky_mobile_cta_shown`
- Target: >8% click rate on mobile devices

**Optimization Tips:**
- If shown but not clicked: Test different copy/design
- Compare mobile conversion rate to desktop
- Track scroll depth when sticky CTA appears (800px)

---

### 4. Pricing Page Tracking

**Event Names:**
- `pricing_page_view`
- `urgency_banner_view`
- `begin_checkout` (GA4 enhanced ecommerce event)

**Where It's Used:**
- app/pricing/page-client.tsx
- app/pricing/PricingCard.tsx

**How to View:**
1. GA4 → Events → `begin_checkout`
2. Add dimension: `event_label` to see which tier (Lite, Pro+, Enterprise)

**Key Metrics:**
- **Pricing page visit rate** = `pricing_page_view` / total_visitors
- **Checkout initiation rate** = `begin_checkout` / `pricing_page_view`
- Target: >40% checkout initiation from pricing page

**Optimization Tips:**
- Track which tier gets most clicks (event_label)
- Compare urgency banner view rate to checkout rate
- If low initiation: pricing too high, unclear value, or checkout friction

---

### 5. Testimonials Page Tracking

**Event Name:** `testimonial_page_view`

**Where It's Used:** app/testimonials/TestimonialsClient.tsx

**How to View:**
1. GA4 → Pages and screens → `/testimonials`
2. Compare bounce rate and time on page

**Key Metrics:**
- **Testimonial visit rate** = `testimonial_page_view` / total_visitors
- **Return to pricing** = users who visit `/testimonials` then `/pricing`
- Target: <50% bounce rate on testimonials page

---

### 6. Scroll Depth Tracking

**Event Name:** `scroll_depth`

**Tracks:** User engagement via scroll milestones (25%, 50%, 75%, 90%)

**Where It's Used:** app/hooks/usePageTracking.ts (all pages)

**How to View:**
1. GA4 → Events → `scroll_depth`
2. View `event_label` distribution (25%, 50%, 75%, 90%)

**Key Metrics:**
- **25% scroll rate** = users who scroll to 25% / page_view
- **90% scroll rate** = highly engaged users / page_view
- Target: >60% reach 50% scroll depth

**Optimization Tips:**
- Drop-off at 25%: Hero isn't engaging
- Drop-off at 50%: Features section needs improvement
- High 90% rate: Content is compelling but may need CTA placement earlier

---

### 7. Time on Page Tracking

**Event Name:** `time_on_page`

**Tracks:** Engagement milestones (30s, 60s, 120s, 300s)

**Where It's Used:** app/hooks/usePageTracking.ts (all pages)

**How to View:**
1. GA4 → Events → `time_on_page`
2. View `event_label` distribution

**Key Metrics:**
- **30s+ engagement rate** = users staying 30s+ / page_view
- **120s+ engagement rate** = highly engaged users / page_view
- Target: >40% reach 30s milestone

---

### 8. Trust Badge Interaction

**Event Name:** `trust_badge_click`

**Tracks:** Clicks on credibility indicators

**Where It's Used:** app/components/HomeClient.tsx:68

**Key Metrics:**
- **Trust badge click rate** = `trust_badge_click` / page_view
- Indicates users checking credibility claims

---

## A/B Testing

### Hero Headline Test

**Test Name:** `hero_headline_test`

**Variants:**
1. **Control** (33% traffic)
   - Headline: "Look Premium Online, Book Premium Jobs"
   - Subheadline: "Professional website, branding, and Google presence—delivered in 7 days. Stop losing customers to competitors with better online presence."

2. **Variant A** (33% traffic)
   - Headline: "Premium Website, Premium Prices"
   - Subheadline: "Join 500+ service pros who raised their prices 38% on average with a professional online presence. Delivered in 7 days."

3. **Variant B** (33% traffic)
   - Headline: "Your Website in 7 Days. Higher Prices Starting Day 8."
   - Subheadline: "Stop competing on price. Professional branding and website design that positions you as the premium choice in your market."

**Implementation:** app/utils/abtest.ts, app/components/HomeClient.tsx

**How Variants Are Assigned:**
- Client-side random distribution (33/33/33 split)
- Stored in localStorage for consistency across sessions
- Tracked via `ab_test_view` event

**How to View Results:**
1. GA4 → Explore → Create new exploration
2. Add dimension: `variant` (from ab_test_view event)
3. Add metrics: conversions, engagement rate, bounce rate
4. Compare variants side-by-side

**Success Metrics:**
- Primary: Conversion rate (pricing page visit → checkout)
- Secondary: CTA click rate, time on page, scroll depth

**When to Stop Test:**
- After 1,000+ visitors per variant
- Or 2-4 weeks of data
- Or when one variant shows >10% improvement with statistical significance

**How to Force a Variant (for testing):**
```javascript
// In browser console:
localStorage.setItem('ab_test_hero_headline_test', 'variant_a')
// Then refresh page
```

**How to Clear Test Assignment:**
```javascript
// In browser console:
Object.keys(localStorage).forEach(key => {
  if (key.startsWith('ab_test_')) localStorage.removeItem(key)
})
```

---

## Custom Dashboards to Create

### 1. Conversion Funnel Dashboard

**Recommended Setup:**
1. GA4 → Explore → Funnel Exploration
2. Steps:
   - Step 1: page_view (/)
   - Step 2: cta_click (hero)
   - Step 3: pricing_page_view
   - Step 4: begin_checkout
   - Step 5: purchase (Stripe webhook)

**What to Watch:**
- Where do users drop off?
- Mobile vs desktop funnel differences
- Traffic source impact on conversion

### 2. Exit Intent Performance Dashboard

**Recommended Setup:**
1. GA4 → Explore → Free Form
2. Metrics:
   - exit_intent_shown
   - exit_intent_submit
   - exit_intent_dismissed
3. Dimensions: Date, device category, traffic source

### 3. Engagement Dashboard

**Recommended Setup:**
1. GA4 → Explore → Free Form
2. Metrics:
   - scroll_depth (all milestones)
   - time_on_page (all milestones)
   - cta_click
3. Dimensions: Page path, device category

---

## Recommended GA4 Custom Reports

### Report 1: CTA Performance Report

**Purpose:** See which CTAs drive the most conversions

**Metrics:**
- Event count (cta_click)
- Conversion rate
- Revenue (if Stripe integration complete)

**Dimensions:**
- event_label (CTA location)
- cta_text
- destination

**Filters:** event_name = "cta_click"

### Report 2: Mobile Conversion Report

**Purpose:** Track mobile-specific conversion elements

**Metrics:**
- sticky_mobile_cta_shown
- sticky_mobile_cta_click
- begin_checkout (mobile only)

**Dimensions:**
- Device category
- Screen resolution

**Filters:** device_category = "mobile" OR "tablet"

### Report 3: A/B Test Results Report

**Purpose:** Compare hero headline variants

**Metrics:**
- Sessions
- Conversions
- Revenue
- Engagement rate

**Dimensions:**
- variant (from ab_test_view)
- Date

**Segments:**
- Control group
- Variant A group
- Variant B group

---

## Key Conversion Metrics to Monitor

### Primary Metrics

| Metric | Formula | Target | Current |
|--------|---------|--------|---------|
| **Overall Conversion Rate** | (checkout initiated / unique visitors) × 100 | >3% | TBD |
| **Pricing Page Conversion** | (checkout initiated / pricing page views) × 100 | >40% | TBD |
| **Hero CTA Click Rate** | (hero CTA clicks / home page views) × 100 | >15% | TBD |
| **Exit Intent Conversion** | (exit intent submits / exit intent shown) × 100 | >15% | TBD |
| **Mobile Conversion Rate** | (mobile checkouts / mobile visitors) × 100 | >2% | TBD |

### Secondary Metrics

| Metric | Formula | Target | Current |
|--------|---------|--------|---------|
| **Bounce Rate** | Users viewing only 1 page / total visitors | <60% | TBD |
| **Avg. Session Duration** | Total time on site / sessions | >90s | TBD |
| **50% Scroll Rate** | Users scrolling 50%+ / page views | >60% | TBD |
| **Testimonial Visit Rate** | Testimonial page views / home views | >20% | TBD |
| **Urgency Banner Impact** | Pricing checkouts with banner / without | N/A | TBD |

---

## How to Analyze A/B Test Results

### Step 1: Wait for Statistical Significance

**Minimum Requirements:**
- 1,000+ visitors per variant
- Or 100+ conversions total
- Or 2+ weeks of consistent traffic

### Step 2: Export Data

1. GA4 → Explore → Create table
2. Rows: `variant` dimension
3. Values: sessions, conversions, engagement_rate, avg_session_duration
4. Export to Google Sheets

### Step 3: Calculate Winning Variant

**Metrics to Compare:**
1. **Conversion Rate** (most important)
2. **Engagement Rate** (secondary)
3. **Avg. Session Duration** (quality signal)
4. **Bounce Rate** (retention signal)

**How to Declare a Winner:**
- Variant shows >10% improvement in conversion rate
- Improvement is consistent over 2+ weeks
- No negative impact on engagement metrics

### Step 4: Implement Winning Variant

**To Make Variant Permanent:**

1. Update `app/utils/abtest.ts`:
```typescript
// Change this function to always return winning variant
export const getABTestVariant = (testName: string): HeroHeadlineVariant => {
  return 'variant_a' // or 'control' or 'variant_b'
}
```

2. Update `app/components/HomeClient.tsx`:
```typescript
// Remove A/B test logic, hardcode winning headline
const heroContent = {
  headline: 'Premium Website, Premium Prices', // winning variant
  subheadline: '...'
}
```

---

## Testing Checklist

### Weekly Tasks

- [ ] Check GA4 for any tracking errors
- [ ] Review conversion funnel drop-off points
- [ ] Monitor exit intent popup performance
- [ ] Compare mobile vs desktop conversion rates
- [ ] Track which pricing tier gets most clicks

### Bi-Weekly Tasks

- [ ] Analyze A/B test results (if test is running)
- [ ] Review scroll depth and time on page trends
- [ ] Identify pages with high bounce rates
- [ ] Check traffic source quality (organic, paid, social, direct)

### Monthly Tasks

- [ ] Create month-over-month comparison report
- [ ] Calculate ROI on marketing spend
- [ ] Review testimonial page effectiveness
- [ ] Identify top-performing CTAs
- [ ] Plan next round of A/B tests based on data

---

## Troubleshooting

### Events Not Showing Up in GA4

**Possible Causes:**
1. Ad blocker blocking gtag.js
2. Events sent before GA4 script loads
3. GA4 property ID incorrect

**How to Debug:**
1. Open browser console
2. Type: `window.dataLayer`
3. Should see array of events
4. If empty, GA4 script not loading

### A/B Test Variant Not Changing

**Possible Causes:**
1. localStorage cached old variant
2. Browser not supporting localStorage
3. Server-side rendering showing default

**How to Fix:**
1. Clear localStorage (see "How to Clear Test Assignment" above)
2. Hard refresh page (Cmd+Shift+R or Ctrl+Shift+R)

### Low Event Counts

**Possible Causes:**
1. Low traffic volume
2. Users leaving before events fire
3. Events only firing on client-side (SSR pages excluded)

**How to Fix:**
1. Wait for more traffic (Phase 4 is ongoing)
2. Check event trigger conditions
3. Ensure client components are used for tracking

---

## Next Steps After Phase 4

### Phase 5: Advanced Optimization (Ongoing)

**Based on Data Collected:**

1. **If Exit Intent < 15% conversion:**
   - Test different offer (free consultation vs free audit)
   - Test different urgency copy ("3 slots left" vs "Limited time")
   - A/B test popup design

2. **If Hero CTA < 15% click rate:**
   - Test CTA button color (orange vs green)
   - Test CTA copy variations
   - Test CTA placement (above vs below pricing)

3. **If Mobile Conversion < Desktop:**
   - Improve mobile sticky CTA visibility
   - Simplify mobile forms
   - Test mobile-specific headlines

4. **If Pricing Page Drop-off > 60%:**
   - Add more social proof on pricing page
   - Test different pricing display (monthly vs annual)
   - Add FAQ section on pricing page

5. **If Testimonial Page High Bounce:**
   - Add more CTAs on testimonials page
   - Shorten testimonials for faster scanning
   - Add video testimonials

---

## Support & Resources

**GA4 Documentation:**
- [GA4 Events Reference](https://support.google.com/analytics/answer/9322688)
- [GA4 Custom Reports](https://support.google.com/analytics/answer/11091026)
- [GA4 Funnel Exploration](https://support.google.com/analytics/answer/9327974)

**A/B Testing Best Practices:**
- Wait for statistical significance before acting
- Only test one element at a time
- Document all test results
- Don't stop tests too early

**Questions?**
- Check this guide first
- Review GA4 event debugger in browser console
- Verify tracking code is firing correctly

---

**Document Version:** 1.0
**Last Reviewed:** 2025-11-07
