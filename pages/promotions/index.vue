<template>
  <div class="promotions custome-padding">
   
      <span class="title">RECORDING EQUIPMENT & ACCESSORIES</span>
      <h4 class="mt-3 mb-5">
        Don't Miss Out on Our Latest Promotions
      </h4>
    <div class="content row">
      <div class="item col-12 col-sm-12 col-md-4 mb-5" v-for="(item,index) in 6" :key="index">
        <img class="responsive" src="https://sssaudio-visual.com/wp-content/uploads/2022/12/apple-shopping-event.jpg" alt="">
        <div class="info">
          <span>10 Nov - 28 Nov </span>
          <h3>Pre-Order Google Pixel 7 </h3>
          <button class="btn-main">
            Read More
          </button>
        </div>
      </div>
    </div>
  <div class="card">
      <h4 class="mt-3">
       Online Store Of Recording Equipment & Accessories Trading
    </h4>
    <div class="collapse" id="collapseExample">
    <div class="card card-body" style="color:#777777">
       

S S S Audio-Visual is always running promotions and sales to help you save money on your audio-visual needs. Here are some of our current promotions:

   <ul>
     <li>Free shipping on All orders .</li>
      <li>10% off all cameras and lenses.</li>
      <li>20% off all microphones and mixers.</li>
      <li>30% off all headphones and speakers.</li>
      <li>50% off all cables and accessories.</li>
   </ul>

These promotions are only available for a limited time, so don't miss out!

To take advantage of these promotions, simply add the qualifying products to your cart and the discount will be automatically applied at checkout.

We also offer a variety of other promotions throughout the year, so be sure to check back often to see what's new.

Here are some additional ways to save money on your audio-visual purchases:

    Sign up for our newsletter to receive exclusive discounts and promotions.
    Follow us on social media for the latest news and deals.
    Check our clearance section for great deals on discontinued products.
    Use our price match guarantee to ensure you're getting the best possible price.


      </div>
    </div>
    <p>
  <button class="btn btn-light mt-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Read More <font-awesome-icon :icon="['fas', 'angle-down']" />
  </button>
</p>

  </div>
  </div>
</template>

<script setup>
// const { api, apiBase } = useRuntimeConfig();
// const {
//   data: aboutData,
//   error,
//   pending,
//   execute,
// } = await useFetch(`${api.GetMenuDetail}/1`, {
//   baseURL: apiBase,
//   headers: {
//     Authorization: `Bearer ${useMainToken().value}`,
//   },
// });
// if (error.value && error.value.status == 401) {
//   await useReauthorization().reAuthorize();
// }
</script>

<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/variables";
@import "~/assets/styles/scss/theme/mixin";
.promotions {
  background-color: #f6f6f6;
  h4{
   @media (max-width: 700.98px) {
       font-size: 18px;
  }
  }
  
    .title {
      font-size: 13px;
      color: #a5a5a5;
    }
 .content{
   .item{
     position: relative;
     overflow: hidden;
     img{
       border-radius: 10px;
       transition: $transition;
     }
     .info{
       transition: $transition;
       color: #fff;
       position: absolute;
       bottom: -40px;
       left: 10%;
       button{
         margin-top: 20px;
         padding: 8px 20px;
         font-size: 13px;
       }
     }
     &:hover{
       .info{
         bottom: 5%;
       }
     }
   }
 }
 .card{
   border: none;
   border-radius: 10px;
   padding: 20px;
   .collapse:not(.show) {
     display: block !important;
    height: 74px !important;
    overflow: hidden!important;
    font-size: 15px!important;
    position: relative;
    &::before{
      content: "";
      width: 100%;
      height: 24px;
      background-color: rgba(255, 255, 255, 0.79);
      position: absolute;
      bottom: 0;
      z-index: 10;
    }
  }
 }
}
</style>
