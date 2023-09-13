<template>
  <section class="banner custome-padding">
    <div class="row">
      <div class="col-12 col-md-9 mb-3">
        <div class="row">
          <div class="col-12 col-md-6 mb-3 item">
            <img src="/images/apple-shopping-event-full-img-opt.png" alt="" />
          </div>
          <div class="col-12 col-md-6 mb-3 item">
            <h1>Microsoft Accessories</h1>
            <p>
              Personalize your Surface Pro with Microsoft branded accessories.
              In the presence of many colors for every taste.
            </p>
            <div class="d-flex flex-wrap">
              <button class="btn-main">
                <img
                  src="https://sssaudio-visual.com/wp-content/uploads/2023/01/keyboard.svg"
                  alt=""
                />
                Keyboards
              </button>
              <button class="btn-main">
                <img
                  src="https://sssaudio-visual.com/wp-content/uploads/2023/01/pen.svg"
                  alt=""
                />
                Surface pen
              </button>
              <button class="btn-main">
                <img
                  src="https://sssaudio-visual.com/wp-content/uploads/2023/01/wirelss-mouse.svg"
                  alt=""
                />
                Mices
              </button>
              <button class="btn-main">
                <img
                  src="https://sssaudio-visual.com/wp-content/uploads/2023/01/headphone.svg"
                  alt=""
                />
                Headphones
              </button>
            </div>
          </div>
          <div class="col-12 col-sm-12 mb-3">
            <div class="row" v-if="Bottom.length >0">
              <div class="col-12 col-md-4 mb-2">
                <NuxtLink :to="Bottom[0].url" class="item-left">
                  <ElementsImage
                    :classes="['responsive']"
                    :src="apiBase+'/'+Bottom[0].imageDataUrl"
                    :height="`100%`"
                    :width="`100%`"
                  />
                  <div class="content-slide">
                    <h5 class="text-white">{{ $i18n.locale == "ar" ? Bottom[0].nameAr : Bottom[0].nameEn }}</h5>
                    <p>Discount up to 30%</p>
                    <button class="btn-main btn-white">View Details</button>
                  </div>
                </NuxtLink> 
              </div>
              <div class="col-12 col-md-4 mb-2">
                <NuxtLink :to="Bottom[1].url" class="item-left">
                  <ElementsImage
                    :classes="['responsive']"
                    :src="apiBase+'/'+Bottom[1].imageDataUrl"
                    :height="`100%`"
                    :width="`100%`"
                  />
                  <div class="content-slide">
                    <h5 class="text-white">{{ $i18n.locale == "ar" ? Bottom[1].nameAr : Bottom[1].nameEn }}</h5>
                    <p>Personal printer</p>
                    <button class="btn-main btn-white">View Details</button>
                  </div>
                </NuxtLink>
              </div>
              <div class="col-12 col-md-4 mb-2">
                <NuxtLink :to="Bottom[2].url"  class="item-left">
                  <ElementsImage
                    :classes="['responsive']"
                    :src="apiBase+'/'+Bottom[2].imageDataUrl"
                    :height="`100%`"
                    :width="`100%`"
                  />
                  <div class="content-slide">
                    <h5 class="text-white">{{ $i18n.locale == "ar" ? Bottom[2].nameAr : Bottom[2].nameEn }}</h5>
                    <p>Long-awaited novelty</p>
                    <button class="btn-main btn-white">View Details</button>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-3">
        <HomeTabsCardBox :item="data.data" />
      </div>
    </div>
  </section>
</template>

<script setup>
const { apiBase, api } = useRuntimeConfig();
const Token = localStorage.getItem("mainToken");
const { Bottom } = defineProps(["Bottom"]);

const { data,error,execute } = await useFetch(`${api.AllProducts}/13`, {
  baseURL: apiBase,
  headers: {
    'Authorization': `Bearer ${Token}`
  },
});
</script>

<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/variables";
@import "~/assets/styles/scss/theme/mixin";
.banner {
  img {
    width: 100%;
  }
  .item {
    display: grid;
    place-content: center;
    background-color: #fff;
    border-radius: 10px;
    button {
      background-color: #f3f3f3;
      color: #3e3e3e;
      padding: 0;
      width: auto;
      height: 38px;
      padding: 5px 10px;
      font-size: 12px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-inline-end: 20px;
      margin-bottom: 10px;
      img {
        width: 20px;
        height: 15px;
      }
    }
  }
  .item-banner {
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    img {
      width: 50%;
    }
    .info {
      display: grid;
      place-content: center;
      text-align: center;
      width: 50%;
      h5 {
        font-size: 16px;
      }
      .price {
        color: $blue;
      }
      svg {
        &.active {
          color: #eabe12;
        }
        &.not-active {
          color: #bbbbbb;
        }
      }
    }
  }
  .item-left {
    position: relative;
      border-radius: 10px;
      overflow: hidden;
      display: block;
    .content-slide {
      position: absolute;
      background-color: transparent;
      z-index: 2;
      top: 30px;
      left: 20px;
      h4 {
        color: #fff;
        font-weight: 500;
        font-size: 35px;
        // @media (max-width: 767.98px) {
        //   font-size: 1rem;
        // }
      }

      p {
        color: #dcd2dc;
      }
      button {
        padding: 5px 20px;
        font-size: 13px;
        height: 38px;
        font-weight: 600;
        border-radius: 7px;
      }
      .btn-white {
        background-color: #fff !important;
        color: #333 !important;
      }
    }
  }

  //   @media (max-width: 600.98px) {

  //   }
}
</style>