<template>
<section class="Offers-home custome-padding">
<div class="row">
    <div class="col-md-3 mb-5" v-if="Mid.length >0">
        <NuxtLink :to="Mid[0].url" class="item d-block">
        <img :src="apiBase+'/'+Mid[0].imageDataUrl" />
           <div class="content-slide">
            <p>{{ $i18n.locale == "ar" ? Mid[0].nameAr : Mid[0].nameEn }}</p>
            <h5 class="text-white">Nothing Phone 1 </h5>
            <button class="btn-main btn-white">
              Buy Now
            </button>
          </div>
            </NuxtLink>
    </div>
    <div class="col-md-9">
        <div class="d-flex justify-content-between title mb-3">
  <h3>latest arrivals</h3>
  <nuxt-link>
    More Products <font-awesome-icon :icon="['fas', 'angle-right']" />
  </nuxt-link>
</div>
<div class="categories mb-5" v-if="RecentProducts">
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
              slidesPerView: 4,
              slidesPerGroup: 4
            }
          }"
        >
          
          <SwiperSlide v-for="p in RecentProducts.data" :key="p.id">
            <HomeTabsCardBox :item="p" />
          </SwiperSlide> 
        </Swiper>
  
</div>
    </div>
</div>
</section>

</template>

<script setup>
const { apiBase, api } = useRuntimeConfig();
const Token = localStorage.getItem("mainToken");
const { Mid } = defineProps(["Mid"]);

const { data:RecentProducts,error,execute } = await useFetch(`${api.GetAllRecentProducts}?pageNumber=1&pageSize=8`, {
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
  .categories{
    overflow: hidden;
    padding-bottom: 100px;
  }
  .item{
      position: relative;
      height: 445px;
      img{
          height: 100%;
          width: 100%;
          border-radius: 10px;
          transition: $transition;
          &:hover {
        transform: scale(1.09);
        }
      }
        .content-slide {
    position: absolute;
    background-color: transparent;
    z-index: 2;
    top: 20px;
    left:50%;
    transform: translateX(-50%);
    text-align: center;
    h4 {
      color:#fff;
      font-weight: 500;
      font-size: 35px;
      // @media (max-width: 767.98px) {
      //   font-size: 1rem;
      // }
    
    }
   
    p{
      color: #dcd2dc;
    }
    button{
      padding: 5px 20px;
      font-size: 13px;
      height: 38px;
      font-weight: 600;
      border-radius: 7px;
    }
  
  }
  }
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
