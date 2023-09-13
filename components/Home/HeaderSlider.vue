<template>
  <section class="home-slider custome-padding">
  <div class="row">
    <div class="col-12 col-md-6">
      <Swiper v-if="TopHeader"
        style="direction: ltr !important"
        :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]"
        :slides-per-view="1"
        :loop="false"
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
          v-for="item in TopHeader" :key="item.id"
        >
          <NuxtLink :to="item.url"> 
            <ElementsImage
            :classes="['responsive']"
            :src="apiBase+'/'+item.imageDataUrl"
            :height="`100%`"
            :width="`100%`"
          />
          <div class="content-slide">
            <h4>{{ $i18n.locale == "ar" ? item.nameAr : item.nameEn }}</h4>
            <p>Shop great deals on MacBook, iPad, iPhone and more.</p>
            <button class="btn-main">
              Show Now
            </button>
          </div>
          </NuxtLink>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="col-12 col-md-6 mt-3">
      <div class="row" v-if="Top.length >0">
        <div class="col-12 col-sm-12 mb-5">
            <NuxtLink :to="Top[2].url" class="item d-block">
               <ElementsImage
            :classes="['responsive uniq-img-head']"
            :src="apiBase+'/'+Top[2].imageDataUrl"
            :height="`100%`"
            :width="`100%`"
          />
          <div class="content-slide">
            <h5 class="text-white">{{ $i18n.locale == "ar" ? Top[2].nameAr : Top[2].nameEn }}</h5>
           <ElementsTimercount 
                    :deadline="`2024-01-01 00:00`"
                    />	
            <button class="btn-main">
              Show Now
            </button>
          </div>
            </NuxtLink>
        </div>
        <div class="col-12 col-md-6 mb-3">
           <NuxtLink :to="Top[1].url" class="item d-block">
               <ElementsImage
            :classes="['responsive']"
            :src="apiBase+'/'+Top[1].imageDataUrl"
            :height="`100%`"
            :width="`100%`"
          />
           <div class="content-slide">
            <h5 class="text-white">{{ $i18n.locale == "ar" ? Top[1].nameAr : Top[1].nameEn }}</h5>
            <p>For PlayStation 5.</p>
            <button class="btn-main btn-white">
              View Details
            </button>
          </div>
            </NuxtLink>
          
        </div>
         <div class="col-12 col-md-6 mb-3">
          <NuxtLink :to="Top[0].url" class="item d-block">
               <ElementsImage
            :classes="['responsive']"
            :src="apiBase+'/'+Top[0].imageDataUrl"
            :height="`100%`"
            :width="`100%`"
          />
           <div class="content-slide">
            <h5 class="text-white">{{ $i18n.locale == "ar" ? Top[0].nameAr : Top[0].nameEn }}</h5>
            <p>Get photo paper as a gift</p>
            <button class="btn-main btn-white">
              View Details
            </button>
          </div>
            </NuxtLink>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script setup>
const { apiBase, api } = useRuntimeConfig();
const { TopHeader,Top } = defineProps(["TopHeader","Top"]);

</script>

<style lang="scss"  >
@import "~/assets/styles/scss/theme/variables";
@import "~/assets/styles/scss/theme/mixin";
.home-slider{
  a{
    color: #777;
  }
.uniq-img-head{
  @media (max-width: 700.98px) {
    height: 190px;
    object-fit: cover;
  }
}
  .swiper {
    height: 460px;
     @media (max-width: 700.98px) {
       height: 300px;
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

.item-slide {
  opacity: 0 !important;
  &.swiper-slide-active{
   opacity: 1!important;
  }
  position: relative;
  // padding: 20px 0;
    border-radius: 10px;
    overflow: hidden;
     &:nth-child(4){
       h4 {
      width: 60%;
    }
    p{
      font-size: 14px;
    }
    }
  // @media (max-width: 500.98px) {
  //   min-height: 200px;
  // }
  img {
    width: 100%;
    height: 100%;
    top: 0;
    z-index: -1;
  }

}
  .content-slide {
    position: absolute;
    background-color: transparent;
    z-index: 2;
    top: 10%;
    left: 80px;
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
    .item{
  position: relative;
  img{
    border-radius: 10px;
  }
  .content-slide {
    left: 20px;
    .btn-white{
  background-color: #fff !important;
  color: #333 !important;
}
  }
}
}

</style>