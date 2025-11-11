import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { generateWelcomeEmail } from '@/lib/email-template'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { email, name, businessName, plan, paymentIntent } = await request.json()

    // Validate required fields
    if (!email || !name || !businessName || !plan) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Construct Google Calendar URL (you'll need to replace with your actual Google Calendar appointment schedule URL)
    const googleCalendarUrl = process.env.GOOGLE_CALENDAR_BOOKING_URL || 'https://calendar.google.com'

    // Construct onboarding form URL with pre-filled contact info
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const params = new URLSearchParams({
      email: email,
      name: name,
      businessName: businessName,
      ...(paymentIntent && { payment_intent: paymentIntent }),
    })
    const onboardingFormUrl = `${baseUrl}/onboarding/${plan}?${params.toString()}`

    // Generate email content
    const { html, text } = generateWelcomeEmail({
      name,
      businessName,
      plan,
      googleCalendarUrl,
      onboardingFormUrl,
    })

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Service Nerd Pro <noreply@onboarding.servicenerdpro.com>',
      to: [email],
      subject: `Welcome to Service Nerd Pro! 🚀 Next Steps for ${businessName}`,
      html,
      text,
    })

    if (error) {
      console.error('Failed to send email via Resend:', error)
      return NextResponse.json(
        { error: 'Failed to send email', details: error },
        { status: 500 }
      )
    }

    console.log('Onboarding email sent successfully:', {
      email,
      name,
      businessName,
      plan,
      messageId: data?.id,
    })

    return NextResponse.json({
      success: true,
      message: 'Onboarding email sent successfully',
      messageId: data?.id,
    })
  } catch (error: any) {
    console.error('Send onboarding email error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to send onboarding email' },
      { status: 500 }
    )
  }
}
