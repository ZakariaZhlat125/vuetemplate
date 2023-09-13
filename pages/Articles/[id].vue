<template>
  <div class="content-wrapper">
    <section class="nav">
      <span>
        <nuxt-link class="link" to="/">Home</nuxt-link> /
        <span
          v-html="
            `${$i18n.locale == 'ar' ? data.name : data.englishName}`
          "
        ></span>
      </span>
    </section>
    <div class="content">
      <div>
          <div>
              <img :src="apiBase+'/'+data.image1" alt="">
          </div>
        <div
          v-html="
            `${
              $i18n.locale == 'ar'
                ? data.description1
                : data.englishDescription1
            }`
          "
        ></div>
      </div>
    
    </div>
  </div>
</template>

<script setup>
const { apiBase, api } = useRuntimeConfig();
const Token = localStorage.getItem("mainToken");
const { id } = useRoute().params;
const { data,error,execute } = await useFetch(`${api.Blocks}/${id}`, {
  baseURL: apiBase,
  headers: {
    'Authorization': `Bearer ${Token}`
  },
});
</script>

<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/variables";
@import "~/assets/styles/scss/theme/mixin";
.content-wrapper {
  background-color: rgb(246, 246, 246);
  padding-bottom: 120px;
  padding-left: 60px;
  max-width: 90rem;
  margin: 0 auto;
  @media (max-width: 1024px) {
    padding-left: 0;
  }
  .nav {
    background-color: rgb(249, 249, 249);
    padding: 10px 20px;
    font-size: 14px;
    .link {
      color: rgba(128, 128, 128, 0.5);
      transition: 0.3s;
      &:hover {
        color: #000;
      }
    }
  }
  .content {
    background-color: rgb(249, 249, 249);
    margin-top: 30px;
    padding: 30px 10px;
    width: 75%;
    img{
        width: 100%;
        margin-bottom: 25px;
    }
  }
}
</style>
