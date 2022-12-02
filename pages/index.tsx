import { Cart } from 'components/Cart/cart.component'
import { Header } from 'components/Header/header.component'
import { Product } from 'components/Product/product.component'
import { useEffect, useState } from 'react'
import { Product as ProductType } from 'types/entities/Product'
import { api } from 'utils/api/api.client'
import styles from '/styles/home.module.css'

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

      <section className={styles.productsSection}>
        <h1 className={styles.title}>Products</h1>

        <ul className={styles.products}>
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </ul>

        <Cart></Cart>
      </section>
    </>
  )
}

export default Home
