<template>
  <div>
    <ElementsHeaderImage
      :src="`/images/Rectangle10.png`"
      :title="`${name == 'category' ? 'Categories' : 'Brands'}`"
    />
    <div class="product-page p-5">
      <!-- <v-alert
        v-if="showAlert"
        class="alert"
        type="info"
        title="Cart Shop"
        :text="`The product has been added successfully,You have ${CartStore.totalProduct} Products yet...`"
      ></v-alert> -->

      <div class="d-flex align-items-center">
        <h2 class="text-start mb-6 text-capitalize">Sort By: {{ itemname }}</h2>
        <!-- -->
        <div
          style="width: 150px; height: 150px; margin-inline-start: 25px"
          v-show="name == 'brand'"
        >
          <ElementsImage
            :classes="['responsive  img-resposive']"
            :src="
              apiBase +
              '/' +
              (products[0].brand ? products[0]?.brand?.imageUrl : 'null')
            "
            :width="`100%`"
            :height="`150px`"
          />
        </div>
      </div>
      <div class="row">
        <div
          class="col-3"
          v-if="String(name).toLocaleLowerCase() == 'category'"
        >
          <div class="accordion" id="accordionExample">
            <div class="accordion-item" v-for="category in mainCategory">
              <h2
                class="accordion-header"
                :id="`panelsStayOpen-${category.id}`"
              >
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#panelsStayOpen-collapse${category.id}`"
                  aria-expanded="true"
                  :aria-controls="`panelsStayOpen-collapse${category.id}`"
                >
                  {{ useTranslate(category, "name").slice(0, 15) + "..." }}
                </button>
              </h2>
              <div
                :id="`panelsStayOpen-collapse${category.id}`"
                class="accordion-collapse collapse"
                :aria-labelledby="`panelsStayOpen-${category.id}`"
              >
                <div class="accordion-body">
                  <template v-for="subCategory in subMainCategory">
                    <div
                      class="accordion-item"
                      v-if="subCategory.parentCategoryId == category.id"
                    >
                      <h2
                        class="accordion-header"
                        :id="`panelsStayOpen-sub${subCategory.id}`"
                      >
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          :data-bs-target="`#panelsStayOpen-subCategoryCollapse${subCategory.id}`"
                          aria-expanded="true"
                          :aria-controls="`panelsStayOpen-subCategoryCollapse${subCategory.id}`"
                        >
                          {{
                            useTranslate(subCategory, "name").slice(0, 15) +
                            "..."
                          }}
                        </button>
                      </h2>
                      <div
                        :id="`panelsStayOpen-subCategoryCollapse${subCategory.id}`"
                        class="accordion-collapse collapse"
                        :aria-labelledby="`panelsStayOpen-sub${subCategory.id}`"
                      >
                        <div class="accordion-body">
                          <template v-for="subCategoryChild in subMainCategory">
                            <div
                              class=""
                              v-if="
                                subCategoryChild.parentCategoryId ==
                                subCategory.id
                              "
                            >
                              <NuxtLink
                                :to="`/products/category/${
                                  subCategoryChild.id
                                }/${useTranslate(subCategoryChild, 'name')}`"
                              >
                                <h6
                                  class="accordion-header blue-hover mb-3"
                                  :title="
                                    useTranslate(subCategoryChild, 'name')
                                  "
                                  style="cursor: pointer"
                                >
                                  {{
                                    useTranslate(
                                      subCategoryChild,
                                      "name"
                                    ).slice(0, 15) + "..."
                                  }}
                                </h6>
                              </NuxtLink>
                            </div>
                          </template>
                        </div>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </div>
          <!-- <v-card v-for="item in mainCategory" :key="item.id" class="mx-auto">
            <v-card-actions>
              <v-btn variant="text">{{ useTranslate(item, "name").slice(0, 10) }}</v-btn>
              <v-spacer></v-spacer>
              <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  <v-card
                    v-for="sub in subMainCategory"
                    :key="sub.id"
                    v-show="item.parentCategoryId == sub.id"
                    class="mx-auto">
                    <v-card-actions>
                      <v-btn variant="text">
                        <NuxtLink
                          v-if="sub.sons.length == 0"
                          :to="`/products/category/${sub.id}/${useTranslate(sub, 'name')}`"
                          :title="useTranslate(sub, 'name')">
                          {{ useTranslate(sub, "name").slice(0, 15) + '...' }}
                        </NuxtLink>
                        <div v-else>
                          {{ useTranslate(sub, "name") }}
                        </div>
                      </v-btn>
                      <v-spacer></v-spacer>

                      <v-btn
                        :icon="show2 ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                        @click="show2 = !show2"
                      ></v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                      <div v-show="show2">
                        <v-divider></v-divider>

                        <v-card-text>
                          I'm a thing. But, like most politicians, he promised
                          more than he could deliver. You won't have time for
                          sleeping, soldier, not with all the bed making you'll
                          be doing. Then we'll go with that data file! Hey, you
                          add a one and two zeros to that or we walk! You're
                          going to do his laundry? I've got to find a way to
                          escape.
                        </v-card-text>
                      </div>
                    </v-expand-transition>
                  </v-card>
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card> -->
        </div>

        <div
          :class="`${
            String(name).toLocaleLowerCase() == 'category' ? 'col-9' : 'col-12'
          }`"
        >
          <div class="row">
            <div
              class="col-6 col-md-4 col-lg-4"
              v-for="item in products"
              :key="item.id"
            >
              <HomeTabsCardBox :item="item" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useCartStore } from "../../stores/cart";
const { apiBase, api } = useRuntimeConfig();
const { products, ProductCategories } = defineProps([
  "products",
  "ProductCategories",
]);
const CartStore = useCartStore();
const { name, itemname, id } = useRoute().params;
const shortCategories = ref([]);
const Categories = ref([]);
const subCategories = ref([]);
const show = ref(false);
const show2 = ref(false);
const mainCategory = ref([]);
const subMainCategory = ref([]);
const suChildMainCategory = ref([]);

const handleMenuItems = (ProductCategories) => {
  // handel ProductCategories
  ProductCategories.forEach((item) => {
    if (item.parentCategoryId == null) {
      shortCategories.value.push({
        id: item.id,
        nameAr: item.nameAr,
        nameEn: item.nameEn,
        parentCategoryId: item.parentCategoryId,
        sons: [],
      });
    }
    if (item.parentCategoryId > 0) {
      subCategories.value.push({
        id: item.id,
        nameAr: item.nameAr,
        nameEn: item.nameEn,
        parentCategoryId: item.parentCategoryId,
        sons: [],
      });
    }
    if (item.parentCategoryId != null) {
      Categories.value.push({
        id: item.id,
        nameAr: item.nameAr,
        nameEn: item.nameEn,
        parentCategoryId: item.parentCategoryId,
        sons: [],
      });
    }
  });
  subCategories.value.forEach((sub) => {
    Categories.value.forEach((Categories) => {
      if (Categories.id == sub.parentCategoryId) {
        Categories.sons.push(sub);
      }
    });
  });
};
const handleCategories = (categories) => {
  categories.map((e, i) => {
    if (!e.parentCategoryId) {
      mainCategory.value.push(e);
    } else {
      subMainCategory.value.push(e);
    }
  });
};

const navigateTONewCategory = async (item) => {
  // console.log('item , ' , item)
  // await navigateTo(`/products/category/${item.id}/${useTranslate(item, 'name' )}`)
};
const query = ref(1);
query.value = name;
function setquery(q) {
  query.value = q;
  refresh();
}
onMounted(() => {
  // handleMenuItems(ProductCategories);
  if (ProductCategories) handleCategories(ProductCategories);
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
      margin: 25px 10px;
      color: $blue;
      transition: $transition;
      &:hover {
        color: $green2;
        scale: 1.1;
      }
      &.not-active {
        opacity: 0.5;
      }
    }
  }
  .card-product {
    cursor: pointer;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    position: relative;
    overflow: hidden;
    height: 300px;
    text-align: center;
    margin: 20px 0;
    transform: scale(1.02,1.02);
    &:hover {
    box-shadow: 0px 10px 20px rgba(0,0,0,0.4);
  transform: scale(1.02,1.02);
  }
    .image {
      height: 70%;
    }
    img {
      margin-bottom: 25px;
      margin-top: 50px;
    }
    .slug {
      position: absolute;
      top: -2px;
      left: -2px;
      background-color: $blue;
      color: #fff;
      padding: 5px 20px;
      border-top-left-radius: 35px;
      border-bottom-right-radius: 35px;
    }
    .card-info {
      background-color: #abcee1;
      text-align: center;
      padding: 10px 30px;
      height: 30%;
      .discription {
        height: 20px;
        overflow: hidden;
      }
      h5 {
        color: #04669d;
        font-size: 1.1rem;
        margin: 0;
      }
      h8 {
        color: #64bccd;
        font-size: 0.8rem;
        margin: 0;
      }
      p {
        color: #fff;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: auto;
        font-size: 0.8rem;
      }
      .price {
        color: $red;
        margin: 0;
        font-size: 1rem;
      }
      .cart-shop {
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-radius: 10px;
        width: 70px;
        padding: 2px;
        color: #fff;
        &:hover {
          color: $blue;
        }
        .counter,
        svg {
          color: $blue;
        }
        svg {
          font-size: 14px;
          transition: $transition;
          &:hover {
            scale: 1.2;
          }
        }
        img {
          margin: 0;
          width: 20px;
          height: 20px;
        }
      }
    }
  }
  .grid-product {
    display: grid;
    padding: 20px;
    place-content: center;

    @media (max-width: 767.98px) {
      padding: 10px;
      .v-col-md-3 {
        display: grid;
        place-content: center;
      }
    }
    .image {
      height: 100%;
      @media (max-width: 767.98px) {
        width: 90px;
        height: 100px;
      }
      img {
        width: 100%;
        height: 100%;
        margin: 0;
      }
    }
    .card-info {
      background-color: transparent;
      display: grid;
      place-content: center;
      @media (max-width: 767.98px) {
        padding: 10px 0;
      }
      h5 {
        font-size: 20px;
        @media (max-width: 767.98px) {
          font-size: 16px;
        }
      }
      h8 {
        font-size: 18px;
        @media (max-width: 767.98px) {
          font-size: 14px;
        }
      }
      p {
        color: $blue;
        font-size: 18px;
        @media (max-width: 767.98px) {
          font-size: 16px;
        }
        width: 80%;
      }
      .price {
        font-size: 16px;
      }
      .cart-shop {
        width: 200px;
        padding: 10px;
        margin: auto;
        justify-content: center;
        img {
          margin: 5px;
        }
      }
    }
  }
}
</style>
