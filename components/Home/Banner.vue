<template>
    <section class="banner custome-padding" style="background-image: url('https://sssaudio-visual.com/wp-content/uploads/2023/01/apple-shopping-event-full-bg-opt.jpg');">
        <div class="row">
            <div class="col-12 col-md-6 mb-3">
                <img src="/images/apple-shopping-event-full-img-opt.png" alt="">
            </div>
            <div class="col-12 col-md-6 mb-3 item">
                <h1>Apple Shopping Event</h1>
                <p>Hurry and get discounts on all Apple devices up to 20%</p>
                 <ElementsTimercount 
                    :deadline="`2024-01-01 00:00`"
                    />	
                    <div class="d-felx justify-cntnet-start">
                        <button class="btn-main">
                        Go Shopping
                        <font-awesome-icon :icon="['fas', 'angle-right']" />
                    </button>
                    </div>

            </div>
            <div class="col-12 col-sm-12">
                  <Swiper
          
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
              slidesPerView: 5,
              slidesPerGroup: 5
            }
          }"
        >
          
          <SwiperSlide v-for="item in 5" :key="item.id">
            <!-- <HomeTabsCardBox :item="item"/> -->
            <div class="item-banner">
                <img src="/images/acer-prodesigner-pe320qk-1.jpg" alt="">
                <div class="info">
                    <h5>Acer</h5>
                    <div
                      class="d-flex align-items-center justify-content-center mb-2"
                    >
                    <font-awesome-icon :icon="['fas', 'star']" class="active" size="xs" />
                    <font-awesome-icon :icon="['fas', 'star']" class="active" size="xs" />
                    <font-awesome-icon :icon="['fas', 'star']" class="active" size="xs" />
                    <font-awesome-icon :icon="['fas', 'star']" class="active" size="xs" />
                    <font-awesome-icon :icon="['far', 'star']" class="not-active" size="xs" />
                    </div>
                    <h5 class="price">$300.00</h5>
                </div>
            </div>
          </SwiperSlide> 
        </Swiper>
            </div>
        </div>
    </section>
</template>

<script setup>
// const { api , apiBase} = useRuntimeConfig()
//   const { data: album } = await useLazyFetch(`/api/Blocks?categoryId=2`, {
//     baseURL: apiBase,
//     headers: {
//       'Authorization': `Bearer ${useMainToken().value}`
//     },
//   });
//  const { data: video } = await useLazyFetch(`/api/Blocks/4`, {
//     baseURL: apiBase,
//     headers: {
//       'Authorization': `Bearer ${useMainToken().value}`
//     },
//   });
</script>

<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/variables";
@import "~/assets/styles/scss/theme/mixin";
.banner{
    img{
        width: 100%;
    }
 .item{
     display: grid;
     place-content: center;
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
//   @media (max-width: 600.98px) {

//   }
  
  
   
}
</style>