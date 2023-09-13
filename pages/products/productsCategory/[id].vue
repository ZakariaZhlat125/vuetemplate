<template>
  <div>
    <v-container class="product-page">
      <div class="row">
        <div class="col-12">
          <v-row>
            <v-col
              v-for="(item, index) in Products"
              :key="index"
              cols="12"
              sm="3"
            >
                <HomeTabsCardBox :item="item" />
            </v-col>
          </v-row>
        </div>
      </div>
    </v-container>
  </div>
</template>
<script setup>
const { api, apiBase } = useRuntimeConfig();
const Token = localStorage.getItem("mainToken");
const showAlert = ref(false);
const id = useRoute().params.id;
const { data:Products } = await useFetch(`${api.GetAllPagedByCategoryId}?ProductCategoryId=${id}`, {
  baseURL: apiBase,
  headers: {
    'Authorization': `Bearer ${Token}`
  },
});


onMounted(async () => {
  try {
    const response = await $fetch("https://fakestoreapi.com/products", {
      method: "GET",
    });

    Products.value = response;
    // console.log(Products.value);
  } catch (error) {
    console.error(error);
  }
});

</script>
<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/variables";
@import "~/assets/styles/scss/theme/mixin";
.product-page {
  .filter {
    .title {
      padding: 10px 20px;
      color: #fff;
      background: $blue;
    }
    .categories {
      li {
        border: 1px solid #ddd;
        cursor: pointer;
        transition: $transition;
        .v-input__details {
          display: none !important;
        }
      }
    }
  }
  .selcet-grid {
    svg {
      padding: 10px;
      cursor: pointer;
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.28);
      border-radius: 10px;
      margin: 10px 10px;
      color: $blue;
      transition: $transition;
      &:hover {
        color: $blue;
        scale: 1.1;
      }
      &.not-active {
        opacity: 0.5;
      }
    }
  }
  
}
</style>
