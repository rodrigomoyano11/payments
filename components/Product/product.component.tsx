import { useCartContext } from 'contexts/cart.context'
import Image from 'next/image'

import { useState } from 'react'
import { Product as ProductType } from 'types/entities/Product'
import { convertToCurrency } from 'utils/helpers/convertToCurrency.helper'
import styles from './product.module.css'

type Props = ProductType

export const Product = (props: Props) => {
  const { id, description, name, image, priceInCents } = props

  const product = { id, description, name, image, priceInCents }

  const { addToCart, removeFromCart, cart } = useCartContext()

  const handleAddToCart = () => {
    addToCart(product)
  }

  const handleRemoveFromCart = () => {
    removeFromCart(product)
  }

  const productIsInCart = cart.some(({ id }) => id === product.id)

  return (
    <li className={styles.product}>
      <Image
        src={image}
        alt={name}
        className={styles.image}
        width={120}
        height={120}
      />
      <div className={styles.productInfo}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{description}</p>

        <div className={styles.actions}>
          <p className={styles.price}>{convertToCurrency(priceInCents)}</p>

          {productIsInCart ? (
            <button className={styles.button} onClick={handleRemoveFromCart}>
              Remove from cart
            </button>
          ) : (
            <button className={styles.button} onClick={handleAddToCart}>
              Add to cart
            </button>
          )}
        </div>
      </div>
    </li>
  )
}
