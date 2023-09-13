<template>
<section class="Offers-home custome-padding">
<div class="d-flex justify-content-between title mb-3">
  <h3>Home Appliance</h3>
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
          
          <SwiperSlide v-for="p in AllProducts.data" :key="p.id">
            <HomeTabsCardBox :item="p" />
          </SwiperSlide> 
        </Swiper>
  
</div>
</section>

</template>

<script setup>
const { apiBase, api } = useRuntimeConfig();
const Token = localStorage.getItem("mainToken");

const { data:AllProducts,error,execute } = await useFetch(`${api.AllProducts}/GetAllPaged?pageNumber=1&pageSize=10`, {
  baseURL: apiBase,
  headers: {
    'Authorization': `Bearer ${Token}`
  },
});
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
