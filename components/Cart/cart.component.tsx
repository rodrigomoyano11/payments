import { useCartContext } from 'contexts/cart.context'
import Image from 'next/image'
import { convertToCurrency } from 'utils/helpers/convertToCurrency.helper'

import styles from './cart.module.css'

export const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCartContext()
  console.log(cart)

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.title}>Cart</h1>

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
                Delete Product
              </button>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className={styles.total}>
          <p className={styles.totalText}>
            Total:{' '}
            {convertToCurrency(
              cart.reduce((acc, product) => acc + product.priceInCents, 0),
            )}
          </p>

          <button className={styles.checkoutButton}>Checkout</button>

          <button
            className={styles.clearCartButton}
            onClick={() => clearCart()}
          >
            Clear cart
          </button>
        </div>
      )}
    </div>
  )
}
