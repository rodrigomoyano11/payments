import React, { createContext, ReactNode, useContext, useState } from 'react'
import { Product } from 'types/entities/Product'

type CartContextType = {
  cart: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (product: Product) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
})

type Props = {
  children: ReactNode
}

export const CartProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<Product[]>([])

  const addToCart = (product: Product) => {
    setCart((prevState) => [...prevState, product])
  }

  const removeFromCart = (product: Product) => {
    setCart((prevState) => prevState.filter(({ id }) => id !== product.id))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
