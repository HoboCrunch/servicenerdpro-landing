# Stripe Integration Setup Guide

This guide will walk you through setting up Stripe payments for Service Pro.

## 1. Create a Stripe Account

1. Go to [https://stripe.com](https://stripe.com) and sign up
2. Complete account verification (you can test in Test Mode first)

## 2. Get Your API Keys

1. Go to [https://dashboard.stripe.com/apikeys](https://dashboard.stripe.com/apikeys)
2. Copy your **Publishable key** (starts with `pk_test_` or `pk_live_`)
3. Copy your **Secret key** (starts with `sk_test_` or `sk_live_`)
4. Keep these safe! Never commit them to Git.

## 3. Create Products in Stripe

### Option A: Using Stripe Dashboard (Recommended)

1. Go to [https://dashboard.stripe.com/products](https://dashboard.stripe.com/products)
2. Click **"+ Add product"**

**Create three products:**

#### Product 1: Lite
- Name: `Service Pro - Lite`
- Description: `Perfect for solo service pros just getting started`
- Pricing:
  - Price: `$99.00 USD`
  - Billing period: `Monthly`
  - Click **"Save product"**
- **Copy the Price ID** (starts with `price_`)

#### Product 2: Pro+
- Name: `Service Pro+`
- Description: `Everything you need to dominate your local market`
- Pricing:
  - Price: `$199.00 USD`
  - Billing period: `Monthly`
  - Click **"Save product"**
- **Copy the Price ID** (starts with `price_`)

#### Product 3: Enterprise
- Name: `Service Pro - Enterprise`
- Description: `For established businesses ready to scale`
- Pricing:
  - Price: `$399.00 USD`
  - Billing period: `Monthly`
  - Click **"Save product"**
- **Copy the Price ID** (starts with `price_`)

### Option B: Using Stripe CLI

```bash
# Install Stripe CLI
# macOS: brew install stripe/stripe-cli/stripe
# Or download from: https://github.com/stripe/stripe-cli/releases

# Login to Stripe
stripe login

# Create products and prices
stripe products create --name="Service Pro - Lite" --description="Perfect for solo service pros"
stripe prices create --product=prod_xxx --unit-amount=9900 --currency=usd --recurring-interval=month

stripe products create --name="Service Pro+" --description="Everything you need to dominate"
stripe prices create --product=prod_xxx --unit-amount=19900 --currency=usd --recurring-interval=month

stripe products create --name="Service Pro - Enterprise" --description="For established businesses"
stripe prices create --product=prod_xxx --unit-amount=39900 --currency=usd --recurring-interval=month
```

## 4. Setup Environment Variables

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and add your keys:

```env
# Stripe API Keys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_key_here
STRIPE_SECRET_KEY=sk_test_your_actual_key_here

# Stripe Price IDs (from step 3)
NEXT_PUBLIC_STRIPE_STARTER_PRICE_ID=price_your_starter_price_id
NEXT_PUBLIC_STRIPE_PRO_PRICE_ID=price_your_pro_price_id
NEXT_PUBLIC_STRIPE_ENTERPRISE_PRICE_ID=price_your_enterprise_price_id

# Base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Webhook secret (we'll add this in step 5)
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
```

## 5. Setup Webhook for Local Development

### Option A: Using Stripe CLI (Recommended for Testing)

1. Install Stripe CLI (see step 3B)

2. Forward webhooks to your local server:
   ```bash
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   ```

3. Copy the webhook secret (starts with `whsec_`) and add it to `.env.local`

4. Keep this terminal running while testing

### Option B: Using Stripe Dashboard (For Production)

1. Go to [https://dashboard.stripe.com/webhooks](https://dashboard.stripe.com/webhooks)
2. Click **"+ Add endpoint"**
3. Enter your endpoint URL:
   - For production: `https://yourdomain.com/api/webhooks/stripe`
   - For development with a tunnel: `https://your-tunnel.ngrok.io/api/webhooks/stripe`
4. Select events to listen to:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
5. Click **"Add endpoint"**
6. Copy the **Signing secret** (starts with `whsec_`)
7. Add it to your `.env.local` as `STRIPE_WEBHOOK_SECRET`

## 6. Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Start Stripe webhook forwarding (in a separate terminal):
   ```bash
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   ```

3. Visit `http://localhost:3000/pricing`

4. Click **"Get Started"** on any plan

5. Use Stripe test card:
   - Card number: `4242 4242 4242 4242`
   - Expiry: Any future date (e.g., `12/34`)
   - CVC: Any 3 digits (e.g., `123`)
   - ZIP: Any 5 digits (e.g., `12345`)

6. Complete the checkout

7. Check the console for webhook events

## 7. Customize Calendly Link

In `/app/onboarding/page.tsx`, replace the Calendly link:

```typescript
// Line ~51
window.location.href = 'https://calendly.com/your-actual-link'
```

Replace with your actual Calendly or Cal.com booking link.

## 8. Production Deployment

Before deploying to production:

1. **Switch to Live Mode** in Stripe Dashboard (toggle in top right)

2. Get **Live API keys**:
   - Go to API keys in Live mode
   - Copy publishable key (starts with `pk_live_`)
   - Copy secret key (starts with `sk_live_`)

3. Create **Live products** (repeat step 3)

4. Setup **Live webhook** (repeat step 5B)

5. Update your **production environment variables**:
   ```env
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxx
   STRIPE_SECRET_KEY=sk_live_xxx
   NEXT_PUBLIC_STRIPE_STARTER_PRICE_ID=price_live_xxx
   NEXT_PUBLIC_STRIPE_PRO_PRICE_ID=price_live_xxx
   NEXT_PUBLIC_STRIPE_ENTERPRISE_PRICE_ID=price_live_xxx
   STRIPE_WEBHOOK_SECRET=whsec_live_xxx
   NEXT_PUBLIC_BASE_URL=https://yourdomain.com
   ```

6. Deploy to your hosting platform (Vercel, etc.)

## 9. Testing Checklist

- [ ] Can load pricing page
- [ ] Clicking "Get Started" opens Stripe Checkout
- [ ] Can complete payment with test card
- [ ] Redirected to success page after payment
- [ ] Webhook events logged in console
- [ ] Can fill out onboarding form
- [ ] Redirected to Calendly after form submission

## Common Issues

### "Invalid API Key"
- Check that your keys are correct in `.env.local`
- Make sure you're using test keys in test mode
- Restart your dev server after changing env variables

### "No such price"
- Verify price IDs are correct in `.env.local`
- Make sure you copied the Price ID, not the Product ID
- Check you're using test price IDs in test mode

### "Webhook signature verification failed"
- Check `STRIPE_WEBHOOK_SECRET` is set correctly
- Make sure Stripe CLI is running (`stripe listen`)
- Verify webhook endpoint URL is correct

### Checkout not opening
- Check browser console for errors
- Verify `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` is set
- Make sure the key starts with `pk_test_` or `pk_live_`

## Need Help?

- Stripe Documentation: [https://stripe.com/docs](https://stripe.com/docs)
- Stripe Test Cards: [https://stripe.com/docs/testing](https://stripe.com/docs/testing)
- Next.js + Stripe Guide: [https://stripe.com/docs/checkout/quickstart](https://stripe.com/docs/checkout/quickstart)

## Security Notes

⚠️ **NEVER commit your `.env.local` file to Git!**

- Add `.env.local` to `.gitignore` (already done)
- Never share your secret keys publicly
- Use test mode for development
- Only use live keys in production environment
- Rotate keys if they're ever exposed
