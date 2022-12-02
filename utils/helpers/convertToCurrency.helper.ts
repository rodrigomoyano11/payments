export const convertToCurrency = (priceInCents: number) => {
  const currencyOptions = {
    style: 'currency',
    currency: 'USD',
  }
  const intl = new Intl.NumberFormat('en-US', currencyOptions)

  return intl.format(priceInCents / 100)
}
