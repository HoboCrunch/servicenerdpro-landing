# ServiceNerdPro - Quick Reference Card

**Site:** http://localhost:3001 (dev) | servicenerdpro.com (production)
**GA4 ID:** G-PZV18FBWD6
**Analytics:** [analytics.google.com](https://analytics.google.com)

---

## 📊 Key Metrics Dashboard

| Metric | Target | Check In |
|--------|--------|----------|
| Overall Conversion Rate | >3% | GA4 → Conversions |
| Hero CTA Click Rate | >15% | GA4 → Events → `cta_click` |
| Exit Intent Conversion | >15% | GA4 → Events → `exit_intent_submit` |
| Pricing → Checkout | >40% | GA4 → Events → `begin_checkout` |
| Mobile Conversion | >2% | GA4 (filter: mobile) |

---

## 🧪 A/B Test: Hero Headlines

| Variant | Headline | Status |
|---------|----------|--------|
| Control | "Look Premium Online, Book Premium Jobs" | Active |
| Variant A | "Premium Website, Premium Prices" | Active |
| Variant B | "Your Website in 7 Days. Higher Prices..." | Active |

**Check Results:** GA4 → Explore → Add dimension `variant`
**Minimum Data:** 1,000 visitors per variant
**Duration:** 2-4 weeks

---

## 🔍 Tracked Events

**Conversions:**
- `cta_click` - CTA button clicks
- `begin_checkout` - Checkout initiated
- `exit_intent_submit` - Exit popup lead capture
- `generate_lead` - Lead conversion event

**Engagement:**
- `scroll_depth` - 25%, 50%, 75%, 90%
- `time_on_page` - 30s, 60s, 120s, 300s
- `sticky_mobile_cta_shown` - Mobile CTA visibility

**Funnel:**
- `pricing_page_view` - Pricing page entry
- `testimonial_page_view` - Social proof page
- `urgency_banner_view` - Urgency element exposure

---

## 📁 Key Files

**Tracking:**
- `app/utils/analytics.ts` - All tracking functions
- `app/utils/abtest.ts` - A/B testing logic
- `app/hooks/usePageTracking.ts` - Engagement tracking

**Documentation:**
- `ANALYTICS_GUIDE.md` - Complete analytics reference
- `CONVERSION_AUDIT.md` - Optimization history
- `PHASE_4_SUMMARY.md` - Phase 4 implementation details

**Components:**
- `app/components/HomeClient.tsx` - Home page with tracking
- `app/components/ExitIntentPopup.tsx` - Exit intent popup
- `app/components/StickyMobileCTA.tsx` - Mobile sticky CTA

---

## 🚀 Quick Actions

**Test Tracking Locally:**
```bash
# Open browser console
window.dataLayer  # View all events

# Force A/B variant
localStorage.setItem('ab_test_hero_headline_test', 'variant_a')
# Refresh page

# Clear A/B tests
localStorage.clear()
```

**View Real-Time Events (GA4):**
1. Install "Google Analytics Debugger" Chrome extension
2. GA4 → Configure → DebugView
3. Open site in Incognito
4. See events appear instantly

**Check Site Status:**
```bash
npm run dev  # Start dev server on :3001
```

---

## 📅 Weekly Checklist

**Every Monday:**
- [ ] Check GA4 event counts (ensure tracking working)
- [ ] Review conversion funnel drop-offs
- [ ] Monitor A/B test progress

**Every Friday:**
- [ ] Compare mobile vs desktop conversion
- [ ] Check exit intent popup performance
- [ ] Review which pricing tier gets most clicks

---

## 🎯 Conversion Funnel

```
Home Page View
    ↓ (Target: >15%)
Hero CTA Click
    ↓ (Target: >70%)
Pricing Page View
    ↓ (Target: >40%)
Checkout Initiated
    ↓ (Target: >80%)
Purchase Complete
```

**Where to Check:** GA4 → Explore → Funnel Exploration

---

## 🆘 Troubleshooting

**Events not in GA4:**
- Wait 24-48 hours (GA4 processes with delay)
- Use DebugView for real-time (see above)

**A/B test not changing:**
- Clear localStorage: `localStorage.clear()`
- Hard refresh: Cmd+Shift+R

**Tracking not working:**
- Check console for errors (F12)
- Verify `window.gtag` is defined
- Ensure GA4 script loaded (`window.dataLayer` exists)

---

## 📞 Support Resources

**Documentation:**
- `ANALYTICS_GUIDE.md` - Detailed analytics guide
- `CONVERSION_AUDIT.md` - What was changed and why

**External:**
- [GA4 Help](https://support.google.com/analytics)
- [Next.js Docs](https://nextjs.org/docs)
- [Stripe Docs](https://stripe.com/docs)

---

## 🎉 Phase Status

- ✅ Phase 1: Critical Blockers (CTAs functional)
- ✅ Phase 2: Quick Wins (FAQ, testimonials, mobile)
- ✅ Phase 3: Advanced Optimization (exit intent, urgency)
- ✅ Phase 4: Analytics & Testing (tracking, A/B tests)
- ⏳ Phase 5: Data-Driven Iteration (2-4 weeks)

---

**Last Updated:** 2025-11-07
**Dev Server:** http://localhost:3001
**GA4 Property:** G-PZV18FBWD6
