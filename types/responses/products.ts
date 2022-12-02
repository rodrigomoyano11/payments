import { Product } from 'types/entities/Product'

type ProductsResponse = {
  getProducts: GetProducts
  postProduct: PostProduct
}

type GetProducts = Product[]

type PostProduct = { message: string }

export type { ProductsResponse }
