import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'

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

    // Here you would typically:
    // 1. Store this data in your database
    // 2. Send notification emails to your team
    // 3. Create a project in your project management system
    // 4. Send a welcome email to the customer

    // For now, we'll log it and send a success response
    console.log('Starter Onboarding Submission:', {
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
    console.error('Starter onboarding error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to submit onboarding form' },
      { status: 500 }
    )
  }
}
