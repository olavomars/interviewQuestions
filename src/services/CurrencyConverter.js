import { currencyServices } from './rest.js'

const { fetchCurrencyData } = currencyServices

export class CurrencyConverter {
  #baseCurrency;

  constructor(baseCurrency) { this.#baseCurrency = baseCurrency.toLowerCase(); }


  async convertCurrency(value, currency) {
    const targetCurrency = currency.toLowerCase()
    const currencyData = await fetchCurrencyData(this.#baseCurrency)
    const relationValue = currencyData[this.#baseCurrency][targetCurrency]
    const convertedValue = (value * relationValue).toFixed(2)
    return convertedValue
  }
}

