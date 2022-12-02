import { CartProvider } from 'contexts/cart.context'
import { AppProps } from 'next/app'
import '/styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => (
  <CartProvider>
    <Component {...pageProps} />
  </CartProvider>
)

export default App
