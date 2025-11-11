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
      // Website Content
      businessDescription,
      servicesOffered,
      targetAudience,
      websiteGoals,
      // Branding Preferences
      brandColors,
      logoStyle,
      competitorWebsites,
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

    // Get customer ID from session
    let customerId = null
    if (sessionId) {
      try {
        const session = await stripe.checkout.sessions.retrieve(sessionId)
        customerId = session.customer as string
      } catch (error) {
        console.error('Error retrieving session:', error)
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
          service_area: targetAudience,
          domain_status: hasDomain,
          existing_domain: existingDomain || '',
          preferred_domain: domainPreference || '',
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
            },
            websiteContent: {
              businessDescription,
              servicesOffered,
              targetAudience,
              websiteGoals,
            },
            branding: {
              brandColors,
              logoStyle,
              competitorWebsites,
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

      console.log('✅ Lite onboarding data saved to Supabase for user:', userId)
    } catch (dbError) {
      console.error('❌ Error saving to Supabase:', dbError)
      // Don't fail the request if DB save fails - we still have it in Stripe
    }

    // Log for debugging
    console.log('Lite Onboarding Submission:', {
      sessionId,
      customerId,
      businessName,
      ownerName,
      email,
      phone,
      businessType,
      businessDescription,
      servicesOffered,
      targetAudience,
      websiteGoals,
      brandColors,
      logoStyle,
      competitorWebsites,
      domainPreference,
      hasDomain,
      existingDomain,
      additionalNotes,
    })

    // TODO: Send email notifications
    // - Email to customer confirming receipt
    // - Email to team with all onboarding details
    // - Create task in project management system

    return NextResponse.json({
      success: true,
      message: 'Onboarding form submitted successfully',
    })
  } catch (error: any) {
    console.error('Lite onboarding error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to submit onboarding form' },
      { status: 500 }
    )
  }
}
