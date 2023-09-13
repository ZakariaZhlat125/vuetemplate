export const useDefaultCurrency = () => {
  const { apiBase, api } = useRuntimeConfig()

  const getCurrency = async () => useLazyFetch(`${api.CurrencyGetDefaultApi}`, {
    key: `${api.CurrencyGetDefaultApi}`,
    baseURL: apiBase,
    headers: {
      'Authorization': `Bearer ${useMainToken().value}`
    },
    onRequest({ request, options }) {
      // Set the request headers
      options.headers.Authorization = `Bearer ${useMainToken().value}`
    },
    onResponse({ request, response, options }) {
      // Process the response data
      if (response._data.succeeded && response._data.data) {
        localStorage.removeItem('defaultCurrency')
        localStorage.setItem('defaultCurrency', JSON.stringify(response._data.data))
        useCurrency().value = response._data.data;
      }
      return response._data
    }
  })

  return {
    getCurrency
  }
}