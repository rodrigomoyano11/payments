import { Product } from 'types/entities/Product'

type ProductsRequest = {
  getProducts: GetProducts
  postProduct: PostProduct
}

type GetProducts = never

type PostProduct = never

export type { ProductsRequest }
