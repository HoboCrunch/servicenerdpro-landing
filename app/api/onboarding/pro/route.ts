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

    // Here you would typically:
    // 1. Store this data in your database
    // 2. Send notification emails to your team
    // 3. Create a project in your project management system
    // 4. Schedule the first strategy session
    // 5. Create business card order
    // 6. Send a welcome email to the customer with dashboard access

    // For now, we'll log it and send a success response
    console.log('Pro+ Onboarding Submission:', {
      sessionId,
      customerId,
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
    })

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
    console.error('Pro+ onboarding error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to submit onboarding form' },
      { status: 500 }
    )
  }
}
