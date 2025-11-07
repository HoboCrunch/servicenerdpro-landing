import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'

export async function POST(request: NextRequest) {
  try {
    const { priceId, planName, email } = await request.json()

    console.log('=== CREATE SUBSCRIPTION REQUEST ===')
    console.log('Received priceId:', priceId)
    console.log('Received planName:', planName)
    console.log('Received email:', email)
    console.log('ENV PRO PRICE:', process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE_ID)
    console.log('ENV STARTER PRICE:', process.env.NEXT_PUBLIC_STRIPE_STARTER_PRICE_ID)

    if (!priceId) {
      return NextResponse.json(
        { error: 'Price ID is required' },
        { status: 400 }
      )
    }

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // First, validate that the price exists and get its details
    let price
    try {
      price = await stripe.prices.retrieve(priceId)
      console.log('Price retrieved:', price.id, 'Live mode:', price.livemode, 'Amount:', price.unit_amount)
    } catch (err: any) {
      console.error('Failed to retrieve price:', err.message)
      return NextResponse.json(
        { error: `Invalid price ID: ${err.message}` },
        { status: 400 }
      )
    }

    // Check if price mode matches API key mode
    const apiKeyIsTest = process.env.STRIPE_SECRET_KEY?.startsWith('sk_test_')
    if (price.livemode && apiKeyIsTest) {
      return NextResponse.json(
        { error: 'Cannot use live mode price with test mode API key. Please use test mode prices.' },
        { status: 400 }
      )
    }

    // Create a customer with email
    const customer = await stripe.customers.create({
      email: email,
      metadata: {
        planName,
      },
    })

    console.log('Customer created:', customer.id, 'Email:', customer.email)

    // Create the subscription with payment_behavior: default_incomplete
    // This creates a subscription with status: incomplete and generates a payment intent
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{
        price: priceId,
      }],
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
    console.log('Subscription status:', subscription.status)

    // Extract the payment intent from the subscription's latest invoice
    const invoice = subscription.latest_invoice as any
    console.log('Invoice ID:', invoice?.id)
    console.log('Invoice status:', invoice?.status)
    console.log('Invoice auto_advance:', invoice?.auto_advance)

    let paymentIntent = invoice?.payment_intent

    console.log('Payment Intent from invoice:', paymentIntent?.id)

    // If payment intent doesn't exist on the invoice, it might be a pending setup intent
    // or the invoice might need to be finalized
    if (!paymentIntent && invoice?.id) {
      console.log('No payment intent found, attempting to retrieve invoice with payment_intent expanded...')

      // Retrieve the invoice again with payment_intent expanded
      const retrievedInvoice = await stripe.invoices.retrieve(invoice.id, {
        expand: ['payment_intent'],
      })

      console.log('Retrieved invoice status:', retrievedInvoice.status)
      paymentIntent = (retrievedInvoice as any).payment_intent

      // If still no payment intent, try finalizing the invoice
      if (!paymentIntent && retrievedInvoice.status === 'draft') {
        console.log('Invoice is in draft status, finalizing...')
        const finalizedInvoice = await stripe.invoices.finalizeInvoice(invoice.id, {
          expand: ['payment_intent'],
        })
        paymentIntent = (finalizedInvoice as any).payment_intent
        console.log('Finalized invoice payment intent:', paymentIntent?.id)
      }

      // If invoice is 'open' and still no payment intent, manually create one
      if (!paymentIntent && retrievedInvoice.status === 'open' && retrievedInvoice.amount_due > 0) {
        console.log('Invoice is open but has no payment intent. Manually creating payment intent for invoice...')

        try {
          // Create a payment intent for the invoice amount
          const manualPaymentIntent = await stripe.paymentIntents.create({
            amount: retrievedInvoice.amount_due,
            currency: retrievedInvoice.currency,
            customer: customer.id,
            metadata: {
              invoice_id: invoice.id,
              subscription_id: subscription.id,
              planName,
            },
            automatic_payment_methods: {
              enabled: true,
            },
          })

          console.log('Manual payment intent created:', manualPaymentIntent.id)
          paymentIntent = manualPaymentIntent
        } catch (piError: any) {
          console.error('Failed to create manual payment intent:', piError.message)
        }
      }
    }

    console.log('Final Payment Intent ID:', paymentIntent?.id)
    console.log('Client Secret:', paymentIntent?.client_secret ? 'exists' : 'missing')

    if (!paymentIntent?.client_secret) {
      console.error('Full subscription object:', JSON.stringify(subscription, null, 2))
      console.error('Latest invoice:', JSON.stringify(invoice, null, 2))
      throw new Error('Failed to create payment intent - invoice may not require immediate payment')
    }

    return NextResponse.json({
      subscriptionId: subscription.id,
      clientSecret: paymentIntent.client_secret,
      customerId: customer.id,
    })
  } catch (error: any) {
    console.error('Subscription creation error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to create subscription' },
      { status: 500 }
    )
  }
}
