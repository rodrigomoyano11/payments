import { Cart } from 'components/Cart/cart.component'
import { useCartContext } from 'contexts/cart.context'
import { useState } from 'react'
import styles from './header.module.css'

export const Header = () => {
  const [showCart, setShowCart] = useState(false)

  const { cart } = useCartContext()

  return (
    <>
      <header className={styles.header}>
        <h1>Payment Methods App</h1>
      </header>
    </>
  )
}
