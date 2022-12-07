import { useCartContext } from 'contexts/cart.context'
import Image from 'next/image'
import { convertToCurrency } from 'utils/helpers/convertToCurrency.helper'

import { PayPalButtons } from '@paypal/react-paypal-js'

import styles from './cart.module.css'
import { useState } from 'react'
import { PaymentElement } from '@stripe/react-stripe-js'
import { api } from 'utils/api/api.client'
import Stripe from 'stripe'
import { useRouter } from 'next/router'

type Response = { url: Stripe.Response<Stripe.Checkout.Session>['url'] }

export const Cart = () => {
  const [showPayments, setShowPayments] = useState(false)

  const router = useRouter()

  const { cart, removeFromCart, clearCart } = useCartContext()

  const totalInCents = cart.reduce(
    (acc, product) => acc + product.priceInCents,
    0,
  )

  const createStripePayment = async () => {
    const { data } = await api.post<Response>('/create-payment-intent', cart)

    const { url } = data
    if (!url) return

    window.location.href = url
  }

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.title}>Cart</h1>

      {showPayments ? (
        <div className={styles.paymentContainer}>
          <h3 className={styles.paymentTitle}>Select an payment method</h3>

          <div className={styles.paymentButtons}>
            <PayPalButtons
              createOrder={(data, actions) => {
                const value = (totalInCents / 100).toFixed(2).toString()

                return actions.order.create({
                  purchase_units: [
                    {
                      items: cart.map((product) => ({
                        name: product.name,
                        quantity: '1',
                        unit_amount: {
                          currency_code: 'USD',
                          value: (product.priceInCents / 100)
                            .toFixed(2)
                            .toString(),
                        },
                      })),
                      amount: {
                        value,
                        currency_code: 'USD',
                        breakdown: {
                          item_total: {
                            currency_code: 'USD',
                            value,
                          },
                        },
                      },
                    },
                  ],
                })
              }}
              onApprove={async (data, actions) => {
                setShowPayments(false)
                clearCart()

                void router.push('/success')
              }}
              onError={() => {
                setShowPayments(false)
                clearCart()
              }}
              onCancel={() => {
                alert('❌ Pago cancelado')
                setShowPayments(false)
              }}
              style={{
                layout: 'horizontal',
                color: 'white',
                tagline: false,
                shape: 'pill',
              }}
              className="paypal-button"
            ></PayPalButtons>

            <button
              type="button"
              className={styles.stripeButton}
              onClick={createStripePayment}
            >
              Stripe
            </button>
          </div>

          <button
            type="button"
            className={styles.backButton}
            onClick={() => setShowPayments(false)}
          >
            Back
          </button>
        </div>
      ) : (
        <>
          {cart.length === 0 && (
            <p className={styles.emptyCart}>Your cart is empty</p>
          )}

          {cart.length > 0 && (
            <div className={styles.products}>
              {cart.map((product) => (
                <div className={styles.product} key={product.id}>
                  <div className={styles.productInfo}>
                    <Image
                      className={styles.productImage}
                      src={product.image}
                      alt={product.name}
                      width={24}
                      height={24}
                    />

                    <div className={styles.caption}>
                      <h2 className={styles.name}>
                        {product.name.slice(0, 15) + '...'}
                      </h2>
                      <p className={styles.price}>
                        {convertToCurrency(product.priceInCents)}
                      </p>
                    </div>
                  </div>

                  <button
                    className={styles.removeButton}
                    onClick={() => removeFromCart(product)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}

          {cart.length > 0 && (
            <div className={styles.total}>
              <div className={styles.totalText}>
                <span>Total</span>
                <span>{convertToCurrency(totalInCents)}</span>
              </div>

              <div className={styles.buttons}>
                <button
                  className={styles.clearCartButton}
                  onClick={() => clearCart()}
                >
                  Clear cart
                </button>

                <button
                  className={styles.checkoutButton}
                  onClick={() => setShowPayments(true)}
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
