<template>
 <section class="product-category custome-padding">
  <div class="row">
    <div class="col-12 col-sm-12 mb-5">
      <Swiper
        style="direction: ltr !important"
        :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination,SwiperNavigation]"
        :slides-per-view="1"
        :loop="false"
        navigation
        :pagination="{ clickable: true }"
        :effect="'creative'"
        :autoplay="{
          delay: 10000,
          disableOnInteraction: true,
        }"
        :creative-effect="{
          prev: {
            shadow: false,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }"
      >
        <SwiperSlide
          class="item-slide"
        >
          <ElementsImage
            :classes="['responsive']"
            :src="'https://sssaudio-visual.com/wp-content/uploads/2022/12/slide-3-opt.jpg'"
            :height="`100%`"
            :width="`100%`"
          />
        </SwiperSlide>
       <SwiperSlide
          class="item-slide"
        >
          <ElementsImage
            :classes="['responsive']"
            :src="'https://sssaudio-visual.com/wp-content/uploads/2022/12/slide-3-opt.jpg'"
            :height="`100%`"
            :width="`100%`"
          />
        </SwiperSlide>
         <SwiperSlide
          class="item-slide"
        >
          <ElementsImage
            :classes="['responsive']"
            :src="'https://sssaudio-visual.com/wp-content/uploads/2022/12/slide-3-opt.jpg'"
            :height="`100%`"
            :width="`100%`"
          />
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="col-12 col-sm-12 mt-5 mb-5">
      <h4 class="mb-5"><span v-for="item in ProductCategories.data" :key="item.id">{{ $i18n.locale == "ar" ? item.nameAr : item.nameEn }} &nbsp;</span></h4>
      <div class="row">
       <div class="col-12 col-sm-12 col-md-4" v-for="item in ProductCategories.data" :key="item.id">
         <div class="item-category">
                <img :src="apiBase+'/'+item.imageDataURL" alt="">
               <div class="info">
                   <NuxtLink><h5>{{ $i18n.locale == "ar" ? item.nameAr : item.nameEn }}</h5></NuxtLink> 
                    <ul>
                      <li v-for="son in SonCategories.data" :key="son.id" v-show="son.parentCategoryId == item.id"> <NuxtLink :to="`/products/productsCategory/${son.id}`">{{ $i18n.locale == "ar" ? son.nameAr : son.nameEn }}</NuxtLink> </li>
                      
                    </ul>
                </div>
            </div>
       </div>
     </div>
    </div>
     <div class="col-12 col-sm-12 mt-5 mb-5">
      <h4 class="mb-5">{{ $i18n.locale == "ar" ? ProductCategories.data[0].nameAr : ProductCategories.data[0].nameEn }}  {{ $i18n.locale == "ar" ? 'مختارة لك' : 'Selected for You' }}</h4>
      <div class="row ">
       <div class="col-12 col-sm-6 col-md-2">
         <div class="item-banner mb-5" v-for="item in product1.data" :key="item.id">
                <img src="/images/acer-prodesigner-pe320qk-1.jpg" alt="">
                <div class="info">
                    <h5>{{ $i18n.locale == "ar" ? item.nameAr : item.nameEn }}</h5>
                    <div
                      class="d-flex align-items-center justify-content-center mb-2"
                    >
                    <font-awesome-icon :icon="['fas', 'star']" class="active" size="xs" />
                    <font-awesome-icon :icon="['fas', 'star']" class="active" size="xs" />
                    <font-awesome-icon :icon="['fas', 'star']" class="active" size="xs" />
                    <font-awesome-icon :icon="['fas', 'star']" class="active" size="xs" />
                    <font-awesome-icon :icon="['far', 'star']" class="not-active" size="xs" />
                    </div>
                    <h5 class="price">{{item.price}}</h5>
                </div>
            </div>
       </div>
        <div class="col-12 col-sm-6 col-md-3" style="height:470px">
          <ElementsImage
            :classes="['responsive']"
            :src="'https://sssaudio-visual.com/wp-content/uploads/2022/12/hp-envy-34.jpg'"
            :height="`100%`"
            :width="`100%`"
          />
        </div>
        <div class="col-12 col-sm-6 col-md-7">
          <div class="row">
            <div class="col-12 col-md-4" v-for="item in product1.data" :key="item.id">
               <HomeTabsCardBox :item="item" />
            </div>
           
          </div>
        </div>
      
     </div>
    </div>
    <div class="col-12 col-sm-12 mt-5 mb-5">
      <h4 class="mb-5">{{ $i18n.locale == "ar" ? ProductCategories.data[1].nameAr : ProductCategories.data[1].nameEn }}</h4>
       <Swiper class="swiper-overflow-visible"
          
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
          
          <SwiperSlide v-for="item in product2.data" :key="item.id">
            <HomeTabsCardBox :item="item"/>
          </SwiperSlide> 
        </Swiper>
    </div>
     <div class="col-12 col-sm-12 mt-5 mb-5">
      <h4 class="mb-5">{{ $i18n.locale == "ar" ? ProductCategories.data[2].nameAr : ProductCategories.data[2].nameEn }}</h4>
       <Swiper class="swiper-overflow-visible"
          
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
          
          <SwiperSlide v-for="item in product3.data" :key="item.id">
            <HomeTabsCardBox :item="item"/>
          </SwiperSlide> 
        </Swiper>
    </div>
  </div>
  </section>
</template>
<script>
  export default {
    data: () => ({ 

    }),
    computed: {
    
    },
  }
</script>
<script setup>
const isAuth = useAuth().value;
const currency = useCurrency();
const id = useRoute().params.id
const category = useRoute().params.category
const showAlert = ref(false)
const { api , apiBase} = useRuntimeConfig()
const Token = localStorage.getItem("mainToken");
const { data:ProductCategories } = await useFetch(`${api.GetAllPagedByParentCategory}?parentcategoryid=${id}&pageNumber=1&pageSize=10000`, {
  baseURL: apiBase,
  headers: {
    'Authorization': `Bearer ${Token}`
  },
});
const { data:SonCategories } = await useFetch(`${api.ProductCategories}?pageNumber=1&pageSize=10000`, {
  baseURL: apiBase,
  headers: {
    'Authorization': `Bearer ${Token}`
  },
});
const { data:product1 } = await useFetch(`${api.GetAllPagedByCategoryId}?ProductCategoryId=${ProductCategories.value.data[0].id}`, {
  baseURL: apiBase,
  headers: {
    'Authorization': `Bearer ${Token}`
  },
});
const { data:product2 } = await useFetch(`${api.GetAllPagedByCategoryId}?ProductCategoryId=${ProductCategories.value.data[1].id}`, {
  baseURL: apiBase,
  headers: {
    'Authorization': `Bearer ${Token}`
  },
});
const { data:product3 } = await useFetch(`${api.GetAllPagedByCategoryId}?ProductCategoryId=${ProductCategories.value.data[2].id}`, {
  baseURL: apiBase,
  headers: {
    'Authorization': `Bearer ${Token}`
  },
});
</script>

<style lang="scss"  >
@import "~/assets/styles/scss/theme/variables";
@import "~/assets/styles/scss/theme/mixin";
.product-category{
  .swiper {
     @media (max-width: 700.98px) {
       height: 150px;
  }
  .item-slide {
  opacity: 0 !important;
  &.swiper-slide-active{
   opacity: 1!important;
  }
  position: relative;
  // padding: 20px 0;
    border-radius: 10px;
    overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    top: 0;
    z-index: -1;
  }

}
    .swiper-pagination{
      width: 60px;
      height: 24px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #fff;
      border-radius: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      .swiper-pagination-bullet{
        width: 10px;
        height: 10px;
      }
      .swiper-pagination-bullet-active {
        opacity: var(--swiper-pagination-bullet-opacity, 1);
        background: var(--swiper-pagination-color,#000);
      }
    }
  }
   .item-category{
     background-color: #fff;
     padding: 10px;
     border-radius: 10px;
     display: flex;
     height: 100%;
     img{
         width: 35%;
     }
     .info{
         display: grid;
         place-content: center;
         text-align: start;
         width: 65%;
          h5{
             font-size: 16px;
         }
         ul{
           li{
             font-size: 14px;
             line-height: 2;
             a{
               cursor: pointer;
                opacity: .6;
               transition: $transition;
               color: #848484;
               &:hover{
                 color: $blue;
               }
             }
           }
         }
        
     }
 }
  .item-banner{
     background-color: #fff;
     padding: 10px;
     border-radius: 10px;
     display: flex;
     img{
         width: 50%;
     }
     .info{
         display: grid;
         place-content: center;
         text-align: center;
         width: 50%;
         h5{
             font-size: 16px;
         }
         .price{
             color: $blue;
         }
           svg{
      &.active{
        color: #eabe12;
      }
        &.not-active{
        color: #bbbbbb;
      }
    }
     }
 }
}

</style>