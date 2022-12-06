import {
  PayPalScriptProvider,
  ScriptProviderProps
} from '@paypal/react-paypal-js'
import { CartProvider } from 'contexts/cart.context'
import { AppProps } from 'next/app'
import '/styles/globals.css'

const paypalOptions: ScriptProviderProps['options'] = {
  'client-id':
    'AVRSkl1pk88KuFS2IRMXkueb63MmBxsu55qeGJNum2UMWTRlm_BGRjMAdi0yjwE_dj75cxpHM5W_06_j',
  currency: 'USD',
  intent: 'capture',
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <PayPalScriptProvider options={paypalOptions}>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </PayPalScriptProvider>
  )
}

export default App
