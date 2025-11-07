import { createClient } from '@supabase/supabase-js'

// Client for browser/client-side operations
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Server-side admin client with service role key for API routes
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

export const supabaseAdmin = createClient(
  supabaseUrl,
  supabaseServiceRoleKey,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
)

// TypeScript types for our database schema
export type User = {
  id: string
  email: string
  stripe_customer_id?: string
  plan?: string
  created_at: string
  updated_at: string
}

export type Subscription = {
  id: string
  user_id: string
  stripe_subscription_id?: string
  stripe_price_id?: string
  status: string
  plan: string
  current_period_start?: string
  current_period_end?: string
  cancel_at_period_end: boolean
  canceled_at?: string
  created_at: string
  updated_at: string
}

export type OnboardingResponse = {
  id: string
  user_id: string
  stripe_session_id?: string
  plan: string
  form_data: Record<string, any>
  submitted_at: string
}
