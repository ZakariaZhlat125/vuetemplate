<template>
  <div class="photos">
    <div class="d-flex mt-5 justify-content-center align-items-start">
      <img
        src="/icons/fav.png"
        class="me-3"
        style="height: 40px; width: 40px"
        alt=""
      />
      <ElementsHeaderTitle :title="`Photos`" />
    </div>
    <!-- <ElementsHeaderTitle  :title="``" /> -->

    <div class="col-12 px-5 mb-5">
      <h5 class="page-route">
        <NuxtLink to="/" class="text-muted">
          {{ $i18n.locale == "ar" ? "الرئيسية" : "Home" }}
        </NuxtLink>
        /
        <span class="innerroute">{{
          $i18n.locale == "ar" ? "الصور" : "Photos"
        }}</span>
      </h5>
    </div>
    <v-row class="p-5 pt-2">
      <v-col
        v-for="(n, index) in Photos"
        :key="index"
        class="d-flex child-flex"
        cols="12"
        sm="6"
        md="4"
        @click="showDetails(index)"
      >
        <ElementsImage
          :classes="['responsive  img-resposive']"
          :src="apiBase + '/' + n.image1"
          :width="`100%`"
          :height="`350px`"
        />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-overlay v-model="overlay" class="align-center justify-center">
        <v-carousel class="carousel">
          <v-carousel-item
            :src="apiBase + '/' + Photos[show].image1"
          ></v-carousel-item>

          <v-carousel-item
            :src="apiBase + '/' + Photos[show].image2"
          ></v-carousel-item>

          <v-carousel-item
            :src="apiBase + '/' + Photos[show].image3"
          ></v-carousel-item>

          <v-carousel-item
            :src="apiBase + '/' + Photos[show].image4"
          ></v-carousel-item>
        </v-carousel>
      </v-overlay>
    </v-row>
  </div>
</template>
<script setup>
const { api, apiBase } = useRuntimeConfig();
const overlay = ref(false);
const show = ref();
const Photos = ref([]);
const query = `${api.BlocksGetByIdApi}?categoryId=2`;
const { data, error, execute } = await useGetSiteApi().GetAll(query);
// console.log(data.value)
if (error.value && error.value.statusCode == 401) {
  await useReauthorization().reAuthorize();
} else {
  Photos.value = data.value.items;
}
const showDetails = (index) => {
  overlay.value = true;
  show.value = index;
};
</script>
<style lang="scss">
@import "~/assets/styles/scss/theme/variables";
@import "~/assets/styles/scss/theme/mixin";
.carousel {
  width: 70vw;
}
.photos {
  overflow: hidden;
  position: relative;
  z-index: 2;
  a {
    cursor: pointer;
  }
  .uniq {
    width: 30%;
    position: absolute;
    top: 3%;
    right: 10%;
    z-index: -1;
  }
  img {
    width: 100%;
  }
}

.innerroute {
  color: $green;
  font-weight: bold;
}
</style>
