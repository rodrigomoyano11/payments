import { NextApiHandler } from 'next'
import Stripe from 'stripe'
import { Product } from 'types/entities/Product'

type Response = { url: Stripe.Response<Stripe.Checkout.Session>['url'] }

const stripe = new Stripe(
  'sk_test_51M57MTIsdgTFvV82lGigOVeMWqRNv4eH5XIMwPWFJunnbd2ZmquwBiKXfObQNL6Y8xxLyebDVxwF5IqHsluphr9000NRfHTICs',
  { apiVersion: '2022-11-15', typescript: true },
)

const handler: NextApiHandler<Response> = async (req, res) => {
  const items = req.body as Product[]

  const convertedItems: Stripe.Checkout.SessionCreateParams['line_items'] =
    items.map((item) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
          description: item.description,
          images: [item.image],
        },
        unit_amount: item.priceInCents,
      },
      quantity: 1,
    }))

  const checkout = await stripe.checkout.sessions.create({
    mode: 'payment',
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/failure`,
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
    line_items: convertedItems,
  })

  res.status(200).json({ url: checkout.url })
}

export default handler
