# Resend Email Flow Setup Guide

## Overview
This guide outlines how to implement the transactional email flow for Service Pro+ onboarding using Resend.

**Flow:** Email Capture → Payment → Transactional Email (with Calendly + Onboarding Form links)

---

## 1. Prerequisites

- [x] Domain configured in Resend
- [ ] Resend API key obtained
- [ ] NPM package installed

---

## 2. Installation

Install the Resend SDK:

```bash
npm install resend
```

---

## 3. Environment Variables

Add to `.env.local`:

```env
# Resend Configuration
RESEND_API_KEY=re_123456789... # Get from https://resend.com/api-keys

# Email Configuration
FROM_EMAIL=noreply@yourdomain.com  # Must be verified domain in Resend
SUPPORT_EMAIL=support@yourdomain.com
```

---

## 4. Email Template Structure

### Location
`/app/emails/OnboardingEmail.tsx`

### Content Includes:
1. Welcome message with plan details
2. Call-to-action: Schedule onboarding call (Calendly link)
3. Call-to-action: Complete business information form
4. Support contact information
5. Brand styling

### Template Props:
```typescript
interface OnboardingEmailProps {
  customerName?: string
  customerEmail: string
  plan: 'Lite' | 'Pro+'
  calendlyUrl: string
  onboardingFormUrl: string
  paymentAmount: string
}
```

---

## 5. API Route Implementation

### Location
`/app/api/send-onboarding-email/route.ts`

### Functionality:
- Accepts POST request with: `{ email, plan, paymentIntent, customerName? }`
- Validates input data
- Constructs personalized email using template
- Sends via Resend API
- Returns success/error response

### Security:
- Rate limiting (consider implementing)
- Input validation
- Error handling with proper HTTP status codes

---

## 6. Integration Points

### A. After Payment Success
**File:** `/app/checkout/CheckoutForm.tsx`

**Flow:**
1. Stripe payment succeeds
2. Call `/api/send-onboarding-email` with customer data
3. Wait for email confirmation
4. Redirect to success page

```typescript
// After successful payment
await fetch('/api/send-onboarding-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: customerEmail,
    plan: planName,
    paymentIntent: paymentIntentId,
    customerName: extractedName
  })
})
```

### B. Success Page Update
**File:** `/app/success/page.tsx`

**New Message:**
- "Check Your Email!"
- Instructions sent to [email]
- Look for email from [FROM_EMAIL]
- Check spam folder reminder

---

## 7. Email Content

### Subject Line
```
Welcome to Service Nerd Pro+! 🚀 Next Steps Inside
```

### Body Structure

**Hero Section:**
- Welcome message
- Confirmation of plan subscription
- Payment confirmation

**Step 1: Schedule Your Call**
- 📅 Button/Link to Calendly
- "Book your 30-minute onboarding call"
- Emphasize: "Pick a time that works for you"

**Step 2: Complete Your Information**
- 📋 Button/Link to onboarding form
- "Tell us about your business"
- Pre-filled with email and payment data

**Footer:**
- Questions? Contact support
- Phone number
- Email address
- Business hours

---

## 8. URL Construction

### Calendly URL
```
https://calendly.com/contact-opsprocket/30min?email={customerEmail}&name={customerName}
```

### Onboarding Form URL
```
/onboarding/{plan}?email={customerEmail}&payment_intent={paymentIntentId}
```

---

## 9. Error Handling

### Scenarios to Handle:
1. **Resend API failure** → Log error, show user support contact
2. **Invalid email** → Validate before sending
3. **Network timeout** → Retry logic (1-2 attempts)
4. **Rate limiting** → Queue system or user message

### Fallback:
If email fails after payment:
- Still show success page
- Provide manual links to Calendly and form
- Log error for admin follow-up

---

## 10. Testing Checklist

### Development Testing:
- [ ] Email sends successfully
- [ ] Links are correctly formatted
- [ ] Email renders well on:
  - [ ] Gmail
  - [ ] Outlook
  - [ ] Apple Mail
  - [ ] Mobile devices
- [ ] Spam score is acceptable (use Resend's testing tools)

### Production Testing:
- [ ] Test with real payment (small amount)
- [ ] Verify email delivery time (< 30 seconds)
- [ ] Check all links work end-to-end
- [ ] Test failure scenarios

---

## 11. Monitoring & Analytics

### Track:
- Email delivery rate (Resend dashboard)
- Email open rate
- Link click rates (Calendly booking, form completion)
- Time between payment and form submission

### Resend Features to Use:
- Webhooks for delivery status
- Email logs for debugging
- Analytics dashboard

---

## 12. Implementation Checklist

- [ ] Install Resend package
- [ ] Add environment variables
- [ ] Create email template component
- [ ] Create API route `/api/send-onboarding-email`
- [ ] Update CheckoutForm to call email API
- [ ] Update success page messaging
- [ ] Remove Calendly from checkout flow
- [ ] Update progress indicators (2 steps instead of 3)
- [ ] Test email delivery
- [ ] Test complete flow end-to-end

---

## 13. Future Enhancements

### Immediate:
- Add customer name capture during email step
- Store email status in database

### Short-term:
- Reminder email if form not completed (24h)
- Second reminder email (48h)
- Thank you email after form submission

### Long-term:
- Email sequences for onboarding progress
- Weekly digest during website build
- Launch notification email
- Monthly newsletter

---

## 14. Support Resources

- **Resend Docs:** https://resend.com/docs
- **React Email (for templates):** https://react.email
- **Resend Status:** https://status.resend.com
- **Resend Community:** https://resend.com/community

---

## Notes

- Resend free tier: 100 emails/day, 3,000/month
- Email typically delivers in < 5 seconds
- Domain verification is required for production
- Keep FROM_EMAIL consistent for deliverability
- Use plain text fallback for all HTML emails
