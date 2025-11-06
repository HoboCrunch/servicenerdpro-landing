import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set in environment variables')
}

// Initialize Stripe with your secret key
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-11-20.acacia',
  typescript: true,
})

// Price IDs for each plan
export const PRICE_IDS = {
  starter: process.env.NEXT_PUBLIC_STRIPE_STARTER_PRICE_ID || '',
  pro: process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE_ID || '',
  enterprise: process.env.NEXT_PUBLIC_STRIPE_ENTERPRISE_PRICE_ID || '',
}

// Helper function to get plan name from price ID
export function getPlanFromPriceId(priceId: string): string {
  const plans = Object.entries(PRICE_IDS)
  const plan = plans.find(([_, id]) => id === priceId)
  return plan ? plan[0] : 'unknown'
}
