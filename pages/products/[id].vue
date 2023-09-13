<template>
  <section class="product-details">
    <ProductsDetails v-if="ProductId && productImages" :product="ProductId.data" :images="productImages" :productImagesPending="productImagesPending" />
  </section>
</template>

<script setup>
  const { api, apiBase } = useRuntimeConfig();
  const { id } = useRoute().params;
const Token = localStorage.getItem("mainToken");
const { data:ProductId,error,execute } = await useFetch(`${api.AllProducts}/${id}`, {
  baseURL: apiBase,
  headers: {
    'Authorization': `Bearer ${Token}`
  },
});
  const { 
    data: productImages, 
    error: productImagesError, 
    pending: productImagesPending, 
    execute: productImagesExecute } = await useLazyFetch(`${api.ProductImagesByProductIdApi}${id}`, {
    baseURL: apiBase,
    headers: {
      'Authorization': `Bearer ${useMainToken().value}`
    },
  });
  
 

</script>