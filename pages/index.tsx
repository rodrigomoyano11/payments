import { Cart } from 'components/Cart/cart.component'
import { Header } from 'components/Header/header.component'
import { Product } from 'components/Product/product.component'
import { useEffect, useState } from 'react'
import { Product as ProductType } from 'types/entities/Product'
import { api } from 'utils/api/api.client'
import styles from '../styles/styles.module.css'

const Home = () => {
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    api.get<ProductType[]>('/products').then(({ data }) => {
      setProducts(data)
    })
  }, [])

  return (
    <>
      <Header></Header>

      <div className={styles.sections}>
        <section className={styles.productsSection}>
          <ul className={styles.products}>
            {products.map((product) => (
              <Product key={product.id} {...product} />
            ))}
          </ul>
        </section>

        <section className={styles.cartSection}>
          <Cart />
        </section>
      </div>
    </>
  )
}

export default Home
