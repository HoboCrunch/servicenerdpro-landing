import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'

export async function POST(request: NextRequest) {
  try {
    const { priceId, planName, email } = await request.json()

    if (!priceId) {
      return NextResponse.json(
        { error: 'Price ID is required' },
        { status: 400 }
      )
    }

    // Create or retrieve customer
    let customer
    if (email) {
      // Check if customer already exists
      const existingCustomers = await stripe.customers.list({
        email: email,
        limit: 1,
      })

      if (existingCustomers.data.length > 0) {
        customer = existingCustomers.data[0]
      } else {
        // Create new customer
        customer = await stripe.customers.create({
          email: email,
          metadata: {
            planName,
          },
        })
      }
    } else {
      // Create customer without email (will be collected in payment form)
      customer = await stripe.customers.create({
        metadata: {
          planName,
        },
      })
    }

    console.log('Customer created/retrieved:', customer.id)

    // Create a subscription with payment pending
    // Using 'default_incomplete' ensures the subscription waits for payment
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: priceId }],
      payment_behavior: 'default_incomplete',
      payment_settings: {
        payment_method_types: ['card'],
        save_default_payment_method: 'on_subscription',
      },
      expand: ['latest_invoice.payment_intent'],
      metadata: {
        planName,
      },
    })

    console.log('Subscription created:', subscription.id)

    // Get the invoice and payment intent
    const invoice = subscription.latest_invoice as any
    const paymentIntent = invoice?.payment_intent

    console.log('Invoice ID:', invoice?.id)
    console.log('Invoice status:', invoice?.status)
    console.log('Payment Intent:', paymentIntent?.id || 'none')

    // Check if we got a payment intent
    if (paymentIntent && paymentIntent.client_secret) {
      return NextResponse.json({
        subscriptionId: subscription.id,
        clientSecret: paymentIntent.client_secret,
        customerId: customer.id,
      })
    }

    // If no payment intent was created, there might be an issue with the subscription setup
    // This can happen if the invoice doesn't require payment (e.g., $0 amount or trial)
    throw new Error(
      `No payment intent was created for subscription. Invoice status: ${invoice?.status}, Amount: ${invoice?.amount_due}`
    )
  } catch (error: any) {
    console.error('Subscription creation error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to create subscription' },
      { status: 500 }
    )
  }
}
