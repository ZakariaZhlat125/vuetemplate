<template>
<div></div>
    <!-- <section class="About" v-if="data">
        <div class="row responsive-padding">
            <div class="col-12 col-sm-12 d-flex justify-content-center">
               <img src="/icons/Asset18.png" alt="">
            </div>
            <div class="col-12 col-sm-12 d-flex justify-content-center">
                <h1>{{ $i18n.locale == 'ar' ? 'من نحن ':'About Us'}}</h1>
            </div>
             <div class="col-12 col-sm-12 d-flex justify-content-center">
              <p
          v-html="
            `${
              $i18n.locale == 'ar'
                ? data.description1
                : data.englishDescription1
            }`
          "
        ></p>
      </div>
      <div class="col-12 col-sm-12 d-flex justify-content-center">
        <NuxtLink to="/about-maidan">
          <button class="btn-main">
            {{ $i18n.locale == "ar" ? "قراءة المزيد" : "Read More" }}
          </button>
        </NuxtLink>
      </div>
    </div>
  </section> -->
</template>

<script setup>
// const { api, apiBase } = useRuntimeConfig();
// const { data, error, pending, execute } = await useFetch(`/api/v1/Menus/1`, {
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
.About {
  p {
    width: 90%;
    font-size: 2em;
    @media screen and (max-width: 700px) {
      font-size: 1em;
    }
  }
}
</style>
