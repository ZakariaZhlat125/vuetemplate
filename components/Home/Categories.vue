<template>
<section class="categories-home custome-padding">
<h3>Popular Categories</h3>
<div class="categories mb-5">
     <Swiper
          
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
          
          <SwiperSlide v-for="(item,index) in ProductCategories.data" :key="index" v-show="item.parentCategoryId == null">
            <nuxt-link :to="`/products/${item.nameAr}/${item.id}`" class="item" >
           <img  :src="item.imageDataURL !=null? apiBase +'/'+item.imageDataURL:'/images/logo.png' " />
          
          <h5>{{$i18n.locale == 'ar' ? item.nameAr:item.nameEn}}</h5>
          <p>{{item.countProduct}} products</p>
            </nuxt-link>
          </SwiperSlide>
        </Swiper>
  
</div>
</section>

</template>

<script setup>
const { apiBase, api } = useRuntimeConfig();
const Token = localStorage.getItem("mainToken");

const { data:ProductCategories,error,execute } = await useFetch(`${api.ProductCategories}?pageNumber=1&pageSize=10000`, {
  baseURL: apiBase,
  headers: {
    'Authorization': `Bearer ${Token}`
  },
});
</script>
<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/variables";
@import "~/assets/styles/scss/theme/mixin";
.categories-home {
  .categories{
    //   display: flex;
    //   justify-content: space-between;
    //   flex-wrap: wrap;
      .item{
        //   width: calc((100% / 5) - 50px);
          display: grid;
          place-content: center;
          text-align: center;
          cursor: pointer;
          transition: $transition;
          img{
            object-fit: contain;
            width: 100%;
            height: 100%;
            margin: auto !important;
            transition: $transition;
          }
          &:hover{
              img{
                  transform: scale3d(1.1, 1.1, 1);
              }
          }
          h5{
              color: #333333;
              margin-top: 10px;
          }
          p{
              color: #777777;
          }
      }
  }
}
</style>
