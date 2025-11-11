# Supabase Setup Guide for ServiceNerd Pro

## Step 1: Create Supabase Project

1. Go to https://supabase.com
2. Sign in or create an account
3. Click **"New Project"**
4. Fill in the details:
   - **Name**: `servicenerdpro` (or your choice)
   - **Database Password**: Create a strong password and **SAVE IT**
   - **Region**: Choose the region closest to your users
5. Click **"Create new project"**
6. Wait 2-3 minutes for the project to be created

## Step 2: Run Database Schema

1. In your Supabase dashboard, click on the **SQL Editor** in the left sidebar
2. Click **"New Query"**
3. Copy the contents of `supabase-schema.sql` from this project
4. Paste it into the SQL editor
5. Click **"Run"** (or press Cmd/Ctrl + Enter)
6. You should see "Success. No rows returned" - this is normal!

## Step 3: Get Your API Keys

1. In Supabase dashboard, click **"Settings"** (gear icon) in the left sidebar
2. Click **"API"** in the settings menu
3. You'll see:
   - **Project URL** - Copy this
   - **anon public** key - Copy this
   - **service_role** key - Copy this (click "Reveal" first)

## Step 4: Add Environment Variables

1. Open your `.env.local` file in the project root
2. Add these three variables:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_public_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

**Replace the placeholder values with your actual keys from Step 3!**

## Step 5: Verify Setup

Your `.env.local` should now have:

```bash
# Existing Stripe keys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_STARTER_PRICE_ID=price_...
NEXT_PUBLIC_STRIPE_PRO_PRICE_ID=price_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# New Supabase keys
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
```

## Step 6: Restart Dev Server

After adding the environment variables:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

## What Gets Stored in Supabase?

### 1. **users** table
- Email address
- Stripe customer ID
- Current plan (Lite or Pro+)
- Creation and update timestamps

### 2. **subscriptions** table
- Subscription status (active, canceled, etc.)
- Plan details
- Billing period information
- Cancellation data

### 3. **onboarding_responses** table
- Complete form responses in JSON format
- Link to user and Stripe session
- Submission timestamp

## Security Notes

⚠️ **IMPORTANT**:
- Never commit `.env.local` to git (it's already in `.gitignore`)
- The `SUPABASE_SERVICE_ROLE_KEY` has full database access - keep it secret!
- Only use the service role key in API routes, never on the client side
- The anon key is safe for client-side use (it respects Row Level Security policies)

## Testing the Integration

Once setup is complete, you can test by:

1. Going through a checkout flow
2. Submitting an onboarding form
3. Check your Supabase dashboard → **Table Editor** to see the data

You should see:
- New user in `users` table
- Subscription in `subscriptions` table
- Form responses in `onboarding_responses` table
