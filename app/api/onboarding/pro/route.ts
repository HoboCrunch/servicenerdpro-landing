import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      sessionId,
      plan,
      // Business Information
      businessName,
      ownerName,
      email,
      phone,
      businessType,
      businessAddress,
      serviceArea,
      yearsInBusiness,
      // Website Content
      businessDescription,
      servicesOffered,
      targetAudience,
      websiteGoals,
      keyDifferentiators,
      pageRequirements,
      // SEO & Local Search
      primaryKeywords,
      competitorNames,
      googleBusinessExists,
      googleBusinessEmail,
      // Branding Preferences
      brandColors,
      logoStyle,
      brandPersonality,
      competitorWebsites,
      // Review Management
      reviewPlatforms,
      currentReviewStrategy,
      // Social Media & Marketing
      socialMediaAccounts,
      marketingGoals,
      adBudget,
      // Business Cards
      cardName,
      cardTitle,
      cardEmail,
      cardPhone,
      mailingAddress,
      // Monthly Strategy Session
      strategySessionTopics,
      businessChallenges,
      // Technical Details
      domainPreference,
      hasDomain,
      existingDomain,
      // Additional Information
      additionalNotes,
    } = body

    // Validate required fields
    if (!businessName || !ownerName || !email || !phone || !businessType) {
      return NextResponse.json(
        { error: 'Missing required business information' },
        { status: 400 }
      )
    }

    if (!cardName || !cardTitle || !cardEmail || !cardPhone || !mailingAddress) {
      return NextResponse.json(
        { error: 'Missing required business card information' },
        { status: 400 }
      )
    }

    // Get customer ID from session
    let customerId = null
    if (sessionId) {
      try {
        const session = await stripe.checkout.sessions.retrieve(sessionId)
        customerId = session.customer as string
      } catch (error) {
        // Error retrieving session
      }
    }

    // Store onboarding data in Stripe customer metadata
    if (customerId) {
      await stripe.customers.update(customerId, {
        metadata: {
          onboarding_completed: 'true',
          plan: plan,
          business_name: businessName,
          owner_name: ownerName,
          business_type: businessType,
          phone: phone,
          business_address: businessAddress,
          service_area: serviceArea,
          domain_status: hasDomain,
          existing_domain: existingDomain || '',
          preferred_domain: domainPreference || '',
          google_business_exists: googleBusinessExists,
          review_platforms: Array.isArray(reviewPlatforms) ? reviewPlatforms.join(',') : '',
        },
      })
    }

    // Store data in Supabase
    try {
      // Find or create user
      let userId: string | null = null

      // Try to find existing user by email
      const { data: existingUser } = await supabaseAdmin
        .from('users')
        .select('id')
        .eq('email', email)
        .single()

      if (existingUser) {
        userId = existingUser.id
        // Update user with latest info
        await supabaseAdmin
          .from('users')
          .update({
            stripe_customer_id: customerId,
            plan: plan,
            updated_at: new Date().toISOString(),
          })
          .eq('id', userId)
      } else {
        // Create new user
        const { data: newUser, error: userError } = await supabaseAdmin
          .from('users')
          .insert({
            email: email,
            stripe_customer_id: customerId,
            plan: plan,
          })
          .select('id')
          .single()

        if (userError) throw userError
        userId = newUser.id
      }

      // Store complete onboarding response
      const { error: onboardingError } = await supabaseAdmin
        .from('onboarding_responses')
        .insert({
          user_id: userId,
          stripe_session_id: sessionId,
          plan: plan,
          form_data: {
            businessInfo: {
              businessName,
              ownerName,
              email,
              phone,
              businessType,
              businessAddress,
              serviceArea,
              yearsInBusiness,
            },
            websiteContent: {
              businessDescription,
              servicesOffered,
              targetAudience,
              websiteGoals,
              keyDifferentiators,
              pageRequirements,
            },
            seo: {
              primaryKeywords,
              competitorNames,
              googleBusinessExists,
              googleBusinessEmail,
            },
            branding: {
              brandColors,
              logoStyle,
              brandPersonality,
              competitorWebsites,
            },
            reviewManagement: {
              reviewPlatforms,
              currentReviewStrategy,
            },
            marketing: {
              socialMediaAccounts,
              marketingGoals,
              adBudget,
            },
            businessCards: {
              cardName,
              cardTitle,
              cardEmail,
              cardPhone,
              mailingAddress,
            },
            strategySession: {
              strategySessionTopics,
              businessChallenges,
            },
            domain: {
              domainPreference,
              hasDomain,
              existingDomain,
            },
            additionalNotes,
          },
        })

      if (onboardingError) throw onboardingError
    } catch (dbError) {
      // Don't fail the request if DB save fails - we still have it in Stripe
    }

    // TODO: Implement the following:
    // - Send email to customer with welcome package
    // - Send detailed onboarding info to team
    // - Create business card order with print vendor
    // - Schedule first strategy session (send calendar invite)
    // - Create project in PM system with all details
    // - Set up Google Business Profile (if needed)
    // - Create customer dashboard access

    return NextResponse.json({
      success: true,
      message: 'Pro+ onboarding form submitted successfully',
    })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to submit onboarding form' },
      { status: 500 }
    )
  }
}
