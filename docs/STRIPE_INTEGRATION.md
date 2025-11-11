# Stripe Subscription Integration Guide

## Overview

Service Pro uses Stripe for processing recurring monthly subscriptions. Customers can subscribe to Lite ($99/mo) or Pro+ ($199/mo) plans through an embedded checkout experience that stays on your domain.

---

## Architecture

### Payment Flow

```
1. User clicks "Get Started" on /pricing
   ↓
2. Redirects to /checkout?plan=starter (or pro)
   ↓
3. API creates Stripe Customer & Subscription
   ↓
4. Embedded Stripe Elements form collects payment
   ↓
5. First month charged immediately
   ↓
6. Subscription set to auto-renew monthly
   ↓
7. Redirects to /success page
   ↓
8. Webhooks trigger for subscription events
   ↓
9. User redirects to /onboarding form
   ↓
10. User books kickoff call via Calendly
```

---

## Key Components

### Frontend

**`/app/pricing/`** - Pricing page with plan cards
- `page-client.tsx` - Client component with pricing cards
- `PricingCard.tsx` - Individual card component with "Get Started" button
- Links to `/checkout?plan=starter` or `/checkout?plan=pro`

**`/app/checkout/`** - Embedded checkout page
- `page.tsx` - Main checkout page with order summary
- `CheckoutForm.tsx` - Stripe Elements payment form
- `page.module.css` - Checkout styling

**`/app/success/`** - Post-payment confirmation
- Shows next steps
- Links to onboarding form

**`/app/onboarding/`** - Customer onboarding form
- Collects business details
- Redirects to Calendly for booking

---

### Backend APIs

**`/app/api/create-payment-intent/route.ts`**
- Creates or retrieves Stripe Customer
- Creates Subscription with first invoice
- Returns `clientSecret` for payment form
- Subscription status: `incomplete` until payment succeeds

**`/app/api/webhooks/stripe/route.ts`**
- Receives Stripe webhook events
- Verifies webhook signature
- Handles subscription lifecycle events:
  - `invoice.payment_succeeded` - Payment processed
  - `customer.subscription.created` - New subscription
  - `customer.subscription.updated` - Plan changes
  - `customer.subscription.deleted` - Cancellation
  - `invoice.payment_failed` - Failed payment

**`/app/api/checkout/route.ts`** (Legacy - not currently used)
- Original hosted checkout implementation
- Can be removed or kept for fallback

---

### Configuration

**`/lib/stripe.ts`** - Server-side Stripe configuration
- Initializes Stripe with secret key
- Exports price IDs for plans
- Helper functions for plan management

**`/lib/stripe-client.ts`** - Client-side Stripe configuration
- Loads Stripe.js with publishable key
- Used by checkout form

---

## Environment Variables

Required in `.env.local`:

```env
# Stripe API Keys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_... (or pk_live_...)
STRIPE_SECRET_KEY=sk_test_... (or sk_live_...)

# Stripe Price IDs
NEXT_PUBLIC_STRIPE_STARTER_PRICE_ID=price_...
NEXT_PUBLIC_STRIPE_PRO_PRICE_ID=price_...

# Webhook Secret
STRIPE_WEBHOOK_SECRET=whsec_...

# Base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

---

## Stripe Dashboard Setup

### 1. Products & Prices

Create two products in [Stripe Dashboard → Products](https://dashboard.stripe.com/products):

**Lite Plan:**
- Name: `Service Pro - Lite`
- Price: `$99.00 USD`
- Billing: `Monthly`
- Copy the **Price ID** (`price_...`)

**Pro+ Plan:**
- Name: `Service Pro+`
- Price: `$199.00 USD`
- Billing: `Monthly`
- Copy the **Price ID** (`price_...`)

### 2. Webhook Configuration

**Local Development:**
```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

**Production:**
1. Go to [Stripe Dashboard → Webhooks](https://dashboard.stripe.com/webhooks)
2. Add endpoint: `https://yourdomain.com/api/webhooks/stripe`
3. Select events:
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
   - `checkout.session.completed` (if using hosted checkout)
4. Copy webhook signing secret (`whsec_...`)

---

## Subscription Lifecycle

### Creation
1. User submits payment on `/checkout`
2. API creates Customer & Subscription
3. Subscription status: `incomplete`
4. First invoice generated
5. PaymentIntent created for first payment
6. User enters card details
7. Payment processes
8. Subscription status → `active`
9. Webhook: `invoice.payment_succeeded`
10. Webhook: `customer.subscription.created`

### Monthly Renewal
1. Stripe automatically bills on renewal date
2. If payment succeeds:
   - Webhook: `invoice.payment_succeeded`
   - Subscription continues
3. If payment fails:
   - Webhook: `invoice.payment_failed`
   - Stripe retries automatically (Smart Retries)
   - Customer notified to update card

### Cancellation
1. Customer cancels (via customer portal or support)
2. Subscription marked for cancellation
3. Access continues until period end
4. Webhook: `customer.subscription.updated` (status: `canceled`)
5. On period end:
   - Webhook: `customer.subscription.deleted`
   - No further charges

### Plan Changes
1. Customer upgrades/downgrades
2. Proration calculated automatically
3. Webhook: `customer.subscription.updated`
4. New plan takes effect immediately
5. Invoice adjusted for difference

---

## Testing

### Test Cards

```
Success:           4242 4242 4242 4242
Decline:           4000 0000 0000 0002
Requires 3DS:      4000 0025 0000 3155
Insufficient:      4000 0000 0000 9995

Expiry: Any future date (e.g., 12/34)
CVC: Any 3 digits (e.g., 123)
ZIP: Any 5 digits (e.g., 12345)
```

### Test Flow

1. Start dev server: `npm run dev`
2. Start webhook forwarding: `stripe listen --forward-to localhost:3000/api/webhooks/stripe`
3. Go to `http://localhost:3000/pricing`
4. Click "Get Started" on any plan
5. Enter test card details
6. Submit payment
7. Check terminal for webhook events
8. Verify subscription in [Stripe Dashboard](https://dashboard.stripe.com/subscriptions)

---

## Key Features

✅ **Recurring Billing** - Automatic monthly charges
✅ **Customer Management** - Customers stored in Stripe
✅ **Payment Method Storage** - Cards saved securely
✅ **Webhook Integration** - Real-time event handling
✅ **Embedded Checkout** - Stays on your domain
✅ **Mobile Responsive** - Works on all devices
✅ **Secure by Design** - PCI compliant via Stripe
✅ **Smart Retries** - Automatic failed payment recovery

---

## Security

- ✅ Payment details never touch your server (Stripe Elements handles)
- ✅ Webhook signature verification prevents tampering
- ✅ API keys secured in environment variables
- ✅ HTTPS required in production
- ✅ PCI compliance handled by Stripe

---

## Future Enhancements

### Customer Portal
Allow customers to self-manage:
- Update payment method
- Cancel subscription
- View invoices
- Download receipts

### Free Trials
Add 14-day trial before first charge:
```typescript
trial_period_days: 14
```

### Usage-Based Billing
Add metered billing for additional services:
```typescript
items: [
  { price: basePriceId },
  { price: usagePriceId, quantity: usage }
]
```

### Multiple Payment Methods
Accept additional payment types:
- ACH Direct Debit
- SEPA Direct Debit
- Alipay
- WeChat Pay

---

## Troubleshooting

### "Module not found: @/lib/stripe"
- Check `tsconfig.json` has `"@/*": ["./*"]`
- Restart dev server
- Clear `.next` folder: `rm -rf .next`

### "No such price: price_..."
- Verify Price IDs in `.env.local`
- Ensure using Price ID not Product ID
- Check test vs live mode matches

### Webhook signature verification failed
- Verify `STRIPE_WEBHOOK_SECRET` is set
- Check webhook endpoint URL is correct
- Ensure `stripe listen` is running (local dev)

### Payment succeeds but webhook not received
- Check webhook endpoint is accessible
- Verify webhook secret matches
- Check Stripe Dashboard → Webhooks → Logs for errors

---

## Resources

- **Stripe Docs**: https://stripe.com/docs
- **Subscriptions Guide**: https://stripe.com/docs/billing/subscriptions/overview
- **Webhook Guide**: https://stripe.com/docs/webhooks
- **Test Cards**: https://stripe.com/docs/testing
- **Customer Portal**: https://stripe.com/docs/customer-management/integrate-customer-portal

---

## Support

For Stripe-related issues:
1. Check [Stripe Dashboard → Logs](https://dashboard.stripe.com/logs)
2. Review webhook delivery logs
3. Test with different test cards
4. Contact Stripe Support (excellent 24/7 support)

For integration issues:
- Review browser console for errors
- Check dev server terminal for API errors
- Verify environment variables are set
- Ensure webhook forwarding is active (local dev)
