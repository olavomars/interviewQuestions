const fetchCurrencyData = async (currency) => {
  try {
    const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json()
    return data

  } catch (error) {
    throw new Error(error)
  }
}


export const currencyServices = { fetchCurrencyData }
