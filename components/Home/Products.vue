<template>
  <section class="product-page">
    <div class="row responsive-padding">
      <h1><img width="50" src="/icons/fav.png" alt=""> Products</h1>
      <!-- <div class="p-5" v-if="pending">
        <ElementsSpinner />
      </div> -->
      <!-- <div class=""> -->
     <div>
          <Swiper
          class="swiper-overflow-visible"
          :modules="[SwiperAutoplay, SwiperNavigation]"
          navigation
          :space-between="15"
          :autoplay="{ delay: 5000 }"
          :pagination="{ clickable: true, bulletClass: '' }"
          :loop="false"
          :breakpoints="{
            '1':{
              slidesPerView: 1,
              slidesPerGroup: 1
            },
            '992': {
              slidesPerView: 4,
              slidesPerGroup: 4
            }
          }"
        >
          <!-- <SwiperSlide v-for="item in data.data" :key="item.id">
            <HomeTabsCardBox :item="item"/>
          </SwiperSlide> -->
          <SwiperSlide >
            discount-on-all-smart-appliances
          </SwiperSlide>
            <SwiperSlide >
            discount-on-all-smart-appliances
          </SwiperSlide>
            <SwiperSlide >
            discount-on-all-smart-appliances
          </SwiperSlide>
            <SwiperSlide >
            discount-on-all-smart-appliances
          </SwiperSlide>
            <SwiperSlide >
            discount-on-all-smart-appliances
          </SwiperSlide>
        </Swiper>
     </div>
      <!-- </div> -->
    </div>
  </section>
</template>

<script setup>
// const page = ref(1);
// const productNumberPerPage = ref(10);
// const productCategoryId = ref(0);
// const pending = ref(false);
// const { api , apiBase} = useRuntimeConfig()
//  const { data: ProductsCategory, pending:pendingProductsCategory,error:errorProductsCategory } = await useLazyFetch(`${api.ProductsCategoryApi}`, {
//     baseURL: apiBase,
    
//     headers: {
//       'Authorization': `Bearer ${useMainToken().value}`
//     },
//   });
//   if (errorProductsCategory.value && errorProductsCategory.value.status == 401) {
//     await useReauthorization().reAuthorize()
//   }
//      const changeCategoryId = async (id) => {
//       productCategoryId.value =id;
//       console.log(productCategoryId.value);
//       execute();
//   }
//    const { data, error, pending: dataPending, execute } = await useAsyncData(
//     'products',
//     () => $fetch(`${api.ProductsGetAllByBrandAndCategoryIdApi}/0/${productCategoryId.value}`, {
//       method: 'GET',
//       baseURL: `${apiBase}`,
//       params: {pageNumber: page.value, pageSize: productNumberPerPage.value},
//       headers: {
//         'Authorization': `Bearer ${useMainToken().value}`
//       }
//     } )
//   );
//     if (error.value && error.value.statusCode == 401) {
//     await useReauthorization().reAuthorize()
//   }
 
</script>

<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/variables";
@import "~/assets/styles/scss/theme/mixin";
.product-page {
  overflow: hidden;
  position: relative;
  .swiper {
    position: static;
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 20px;
    padding: 10px 15px;
    border: 1px solid $green2;
    border-radius: 50%;
  }
  .swiper-button-next {
    top: 60px;
    right: 60px;
    z-index: 1000;
  }
  .swiper-button-prev {
    top: 60px;
    right: 110px;
    left: auto;
    z-index: 1000;
  }
  h4 {
    color: $green2;
    font-family: PoppinsBold;
  }
  .card-product {
    .discription {
      height: 40px;
      overflow: hidden;
    }
    .old-price {
      position: absolute;
      top: -10px;
      text-decoration: line-through;
      font-size: 13px;
      color: $green;
    }
  }
  .truncate {
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
  }
  .product-page .card-product {
    min-height: 280px;
  }
}
</style>
