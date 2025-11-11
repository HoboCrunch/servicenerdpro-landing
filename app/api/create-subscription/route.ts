import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { priceId, planName, email, name, businessName } = await request.json()

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
    } catch (err: any) {
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
      name: name || undefined,
      metadata: {
        planName,
        businessName: businessName || '',
      },
    })

    // Create or update user in Supabase
    const { data: existingUser, error: userSelectError } = await supabaseAdmin
      .from('users')
      .select('id')
      .eq('email', email)
      .single()

    let userId: string

    if (existingUser) {
      // Update existing user
      const { data: updatedUser, error: updateError } = await supabaseAdmin
        .from('users')
        .update({
          stripe_customer_id: customer.id,
          plan: planName,
        })
        .eq('id', existingUser.id)
        .select()
        .single()

      if (updateError) {
        throw new Error('Failed to update user record')
      }

      userId = existingUser.id
    } else {
      // Create new user
      const { data: newUser, error: insertError } = await supabaseAdmin
        .from('users')
        .insert({
          email,
          stripe_customer_id: customer.id,
          plan: planName,
        })
        .select()
        .single()

      if (insertError) {
        throw new Error('Failed to create user record')
      }

      userId = newUser.id
    }

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

    // Create subscription record in Supabase
    const { error: subscriptionError } = await supabaseAdmin
      .from('subscriptions')
      .insert({
        user_id: userId,
        stripe_subscription_id: subscription.id,
        stripe_price_id: priceId,
        status: subscription.status,
        plan: planName,
        current_period_start: (subscription as any).current_period_start
          ? new Date((subscription as any).current_period_start * 1000).toISOString()
          : null,
        current_period_end: (subscription as any).current_period_end
          ? new Date((subscription as any).current_period_end * 1000).toISOString()
          : null,
        cancel_at_period_end: (subscription as any).cancel_at_period_end,
      })

    if (subscriptionError) {
      // Don't throw - Stripe subscription already created, so continue
    }

    // Extract the payment intent from the subscription's latest invoice
    const invoice = subscription.latest_invoice as any

    let paymentIntent = invoice?.payment_intent

    // If payment intent doesn't exist on the invoice, it might be a pending setup intent
    // or the invoice might need to be finalized
    if (!paymentIntent && invoice?.id) {
      // Retrieve the invoice again with payment_intent expanded
      const retrievedInvoice = await stripe.invoices.retrieve(invoice.id, {
        expand: ['payment_intent'],
      })

      paymentIntent = (retrievedInvoice as any).payment_intent

      // If still no payment intent, try finalizing the invoice
      if (!paymentIntent && retrievedInvoice.status === 'draft') {
        const finalizedInvoice = await stripe.invoices.finalizeInvoice(invoice.id, {
          expand: ['payment_intent'],
        })
        paymentIntent = (finalizedInvoice as any).payment_intent
      }

      // If invoice is 'open' and still no payment intent, manually create one
      if (!paymentIntent && retrievedInvoice.status === 'open' && retrievedInvoice.amount_due > 0) {
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

          paymentIntent = manualPaymentIntent
        } catch (piError: any) {
          // Failed to create manual payment intent
        }
      }
    }

    if (!paymentIntent?.client_secret) {
      throw new Error('Failed to create payment intent - invoice may not require immediate payment')
    }

    return NextResponse.json({
      subscriptionId: subscription.id,
      clientSecret: paymentIntent.client_secret,
      customerId: customer.id,
      userId: userId,
    })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to create subscription' },
      { status: 500 }
    )
  }
}
