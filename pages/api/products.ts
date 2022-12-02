import { NextApiHandler } from 'next'
import { Product } from 'types/entities/Product'
import { ProductsResponse } from 'types/responses/products'

type Responses = ProductsResponse[keyof ProductsResponse]

const products = new Map<number, Omit<Product, 'id'>>([
  [
    313,
    {
      name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      priceInCents: 10995,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
  ],
  [
    254,
    {
      name: 'Mens Casual Premium Slim Fit T-Shirts ',
      priceInCents: 5595,
      description:
        'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, solid color t-shirt, soft and comfortable fabric brings you a comfortable experience',
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    },
  ],
  [
    332,
    {
      name: 'Mens Cotton Jacket',
      priceInCents: 21995,
      description:
        'great outerwear for your everyday activities, the light shell is windproof and water-resistant. It is perfect for wearing to work or just going out for a walk',
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    },
  ],
  [
    874,
    {
      name: 'Mens Casual Slim Fit',
      priceInCents: 5395,
      description:
        'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, solid color t-shirt, soft and comfortable fabric brings you a comfortable experience',
      image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    },
  ],
  [
    523,
    {
      name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      priceInCents: 69500,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear your's as a symbol of wisdom and strength",
      image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    },
  ],
  [
    346,
    {
      name: 'Solid Gold Petite Micropave ',
      priceInCents: 16800,
      description: '18k Gold Petite Micropave ',
      image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
    },
  ],
  [
    702,
    {
      name: 'White Gold Plated Princess',
      priceInCents: 11200,
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
    },
  ],
  [
    894,
    {
      name: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
      priceInCents: 12900,
      description:
        'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
      image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
    },
  ],
  [
    249,
    {
      name: 'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',
      priceInCents: 6400,
      description: 'USB 3.0 and USB 2.0 Compatibility',
      image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
    },
  ],
  [
    103,
    {
      name: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
      priceInCents: 10900,
      description:
        'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5 inch hard drive)',
      image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
    },
  ],
  [
    161,
    {
      name: 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
      priceInCents: 10900,
      description: '3D NAND Flash are applied to deliver high transfer speeds',
      image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
    },
  ],
  [
    182,
    {
      name: 'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',
      priceInCents: 11400,
      description:
        "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      image: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',
    },
  ],
  [
    134,
    {
      name: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
      priceInCents: 59900,
      description: 'IPS Panel with 1920 x 1080 Full HD Resolution',
      image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
    },
  ],
  [
    814,
    {
      name: 'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor',
      priceInCents: 99900,
      description:
        '144Hz Refresh Rate; 1ms Response Time; FreeSync 2 with HDR; Quantum Dot Technology',
      image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
    },
  ],
  [
    215,
    {
      name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      priceInCents: 56200,
      description:
        'Note: Please check the size chart in our images to ensure your order / Color Disclaimer : Due to monitor settings, monitor pixel definitions, we cannot guarantee that the color you see on your screen as an exact color of the product. We strive to make our colors as accurate as possible.',
      image: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
    },
  ],
  [
    516,
    {
      name: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      priceInCents: 39900,
      description:
        'Note: Please carefully read the Size Chart we provided in the pictures (Not Amazon size chart)',
      image: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
    },
  ],
])

const handler: NextApiHandler<Responses> = (req, res) => {
  if (req.method === 'GET') {
    const productsWithIds = Array.from(products.entries()).map(
      ([id, product]) => ({ id, ...product }),
    )

    res.status(200).json(productsWithIds)
  }

  if (req.method === 'POST') {
    res.status(500).json({ message: 'Not implemented' })
  }
}

export default handler
