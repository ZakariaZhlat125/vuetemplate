<template>
  <main>
    <Order v-if="countries" :countries="countries.data" />
  </main>
</template>

<script setup>
  definePageMeta({
    middleware: 'auth-product-exists'
  })
  const { api } = useRuntimeConfig()
  // Fetch The Data
  const { data: countries, error, execute } = await useGetSiteApi().GetAll(`${api.CountriesGetAllApi}`)
  // const { data: paymentMethods, error: paymentError, execute: paymentExecute } = await useGetSiteApi().GetAll(`${api.PaymentMethodsGetAllApi}`)

  if (error.value && error.value.statusCode == 401) {
    await useReauthorization().reAuthorize()
  }
  

  onMounted(() => {
    // Reexecute fetch data on mounted
    if (!countries.value) execute()
    // if (!paymentMethods.value) paymentExecute()
  })
</script>