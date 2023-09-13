<template>
<section class="Offers-home custome-padding">
<div class="d-flex justify-content-between title mb-3">
  <h3>The Best Offers</h3>
  <nuxt-link>
    More Products <font-awesome-icon :icon="['fas', 'angle-right']" />
  </nuxt-link>
</div>
<div class="categories mb-5">
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
              slidesPerView: 2,
              slidesPerGroup: 2
            },
            '992': {
              slidesPerView: 5,
              slidesPerGroup: 5
            }
          }"
        >
          
          <SwiperSlide v-for="item in products" :key="item.id">
            <HomeTabsCardBox :item="item" :isoffer="true" />
          </SwiperSlide> 
        </Swiper>
  
</div>
</section>

</template>

<script setup>
  const { apiBase, api } = useRuntimeConfig();
  const Token = localStorage.getItem("mainToken");
  const products = ref([]);
  const { data,error,execute } = await useFetch(`${api.ProductOffers}?pageNumber=1&pageSize=10`, {
    baseURL: apiBase,
    headers: {
      'Authorization': `Bearer ${Token}`
    },
  });
  const handleMenuItems = (data) => {
  data.value.data.forEach((item) => {
      products.value.push({
        id: item.productId,
        offerId: item.id,
        nameAr: item.product?.nameAr,
        nameEn: item.product?.nameEn,
        descriptionAboutAr: item.product?.descriptionAboutAr,
        descriptionAboutEn: item.product?.descriptionAboutEn,
        code:item.code,
        price:item.newPrice,
        newPrice:item.price,
        productImageUrl:item.productImageUrl,
        productCategory:item.productCategory,
        discountRatio:item.discountRatio
      });
  });
  }
   onMounted(() => {
    if (data.value){
      handleMenuItems(data);
    }
    else execute()
    // console.log(products.value, products.value.length > 0)
  })
</script>
<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/variables";
@import "~/assets/styles/scss/theme/mixin";
.Offers-home {
  .title{
    a{
      background-color: #E1EBFF;
      border-color: #E1EBFF;
      color: #1C61E7;
      padding: 10px 20px;
      border-radius: 30px;
      font-size: 14px;
      transition: $transition;
      cursor: pointer;
      &:hover{
        background-color: #DBE3F9;
        border-color: #DBE3F9;
        color: #1C61E7;
      }
    }
  }
}
</style>
