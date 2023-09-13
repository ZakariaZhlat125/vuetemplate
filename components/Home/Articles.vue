<template>
<section class="Offers-home custome-padding">
<div class="d-flex justify-content-start title mb-3">
  <h3>Our Articles</h3>
</div>
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
              slidesPerView: 1,
              slidesPerGroup: 1
            },
            '992': {
              slidesPerView: 4,
              slidesPerGroup: 4
            }
          }"
        >
          
          <SwiperSlide v-for="item in data.items" :key="item.id">
            <v-card
    :loading="loading"
    class="mx-auto "
    max-width="374"
  >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      cover
      height="200"
      :src="apiBase+'/'+item.image1"
    ></v-img>

    <v-card-item>
       <v-card-subtitle>
        <span class="me-1">Hi-Fi,Sound / 13 Dec 2022</span>
      </v-card-subtitle>
      <v-card-title>{{$i18n.locale == 'ar'? item.name:item.englishName}}</v-card-title>
    </v-card-item>

    <v-card-text>
      <div style="color:#7d7d7d;height:80px;overflow: hidden;" v-html="$i18n.locale == 'ar'? item.description1:item.englishDescription1"></div>
    </v-card-text>

    <v-card-actions>
     <nuxt-link :to="`/Articles/${item.id}`">
        <span style="color:#45b2ef;font-size:14px;margin:0 0 0 5px">Continue reading</span>
     </nuxt-link>
    </v-card-actions>
  </v-card>
           
          </SwiperSlide> 
        </Swiper>
<!-- *********************************************************** -->
        <v-card
    class="mx-auto mt-5 p-2"
  >
    <v-card-title>
      Online Store Of Recording Equipment & Accessories Trading
    </v-card-title>

    <v-card-subtitle>
     S S S Audio-Visual is your one-stop shop for all your recording equipment and accessories needs. We offer a wide range of products from top brands, including cameras, microphones, mixers, headphones, speakers, cables, tripods, memory cards, filters, lenses, telescopes, and more. We are committed to providing our customers with the best possible products and services, and we offer a one-year warranty on all of our products. We also ship within the UAE for free.
    </v-card-subtitle>

    <v-card-actions>
      <v-btn class="mt-5"
        color="#3e3e3e"
        variant="tonal"
         @click="show = !show"
      >
        <span style="font-size:12px">Read More</span> &nbsp;  <font-awesome-icon :icon="['fas', 'angle-down']" />
      </v-btn>
     <v-spacer></v-spacer>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          This description is clear, concise, and informative. It accurately reflects the content of the website, and it is likely to appeal to potential customers. It also includes a call to action, encouraging people to visit the website to learn more.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  
</div>
</section>

</template>
<script>
  export default {
    data: () => ({
      loading: false,
      selection: 1,
      show: false,
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>
<script setup>
const { apiBase, api } = useRuntimeConfig();
const Token = localStorage.getItem("mainToken");

const { data,error,execute } = await useFetch(`${api.Blocks}?categoryId=7`, {
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
