<template>
  <div class="footer">
    <div class="footer-links custome-padding">
      <div class="row">
        <div class="col-md-3 col-12">
          <h5>Where to Find Us</h5>
          <h6>2020 BUILDING ,</h6>
          <ul>
            <li><p>Algoz Third , Dubai</p></li>
            <li>
              <strong>TEL: &nbsp;</strong>
              <p> 0508737532</p>
            </li>
            <li>
              <strong>Email: &nbsp;</strong>
              <p> info@sssav.ae</p>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-12">
          <ul>
            <h5>About Us</h5>
            <li v-for="item in MenusFooter.slice(0, 4)" :key="item.id">
              <nuxt-link :to="item.pageUrl">{{ item.englishName }}</nuxt-link>
            </li>
            <li><nuxt-link :to="`/`">Blog</nuxt-link></li>
          </ul>
        </div>
        <div class="col-md-3 col-12">
          <ul>
            <h5>Let's Help</h5>
            <li v-for="item in MenusFooter.slice(4, 6)" :key="item.id">
              <nuxt-link :to="item.pageUrl">{{ item.englishName }}</nuxt-link>
            </li>
            <li><nuxt-link to="/">Payment method</nuxt-link></li>
            <li><nuxt-link to="/">Tracking</nuxt-link></li>
            <li><nuxt-link to="/">Promotions</nuxt-link></li>
          </ul>
        </div>
        <div class="col-md-3 col-12">
          <ul>
            <h5>Quick Shop</h5>
            <li><nuxt-link to="/">Audio</nuxt-link></li>
            <li><nuxt-link to="/">Recording Equipments</nuxt-link></li>
            <li><nuxt-link to="/">Visual Optics</nuxt-link></li>
            <li><nuxt-link to="/">Video</nuxt-link></li>
            <li><nuxt-link to="/">Cameras</nuxt-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom custome-padding">
      <div class="row" style="width:100%">
        <div class="col-12 col-md-6">
          <p>
            © 2023 <strong>S S S AUDIO-VISUAL</strong> | All rights reserved
          </p>
        </div>
        <div class="col-12 col-md-6 text-end">
          <img src="/images/payments.png" alt="" />
        </div>
      </div>
    </div>
    <div class="menu-mobile">
      <v-layout class="overflow-visible" style="height: 56px">
        <v-bottom-navigation v-model="value" color="#45b2ef" horizontal>
          <v-btn class="item-icon">
            <font-awesome-icon :icon="['fas', 'code-compare']" size="xl" />
            Compare
            <span>0</span>
          </v-btn>

          <v-btn class="item-icon">
            <font-awesome-icon :icon="['far', 'heart']" size="xl" />
            Wishlist
            <span>0</span>
          </v-btn>

          <v-btn class="item-icon">
            <font-awesome-icon :icon="['fas', 'cart-shopping']" size="xl" />
            Cart
            <span>0</span>
          </v-btn>
          <v-btn>
            <font-awesome-icon
              :icon="['fas', 'bars']"
              size="xl"
              style="cursor: pointer"
            />
            Menu
          </v-btn>
        </v-bottom-navigation>
      </v-layout>
    </div>
  </div>
</template>

<script setup>
const value = ref(1);
const Token = localStorage.getItem("mainToken");
const { reAuthorize } = useReauthorization();
const { api , apiBase} = useRuntimeConfig();
const { data:MenusFooter,error,execute } = await useFetch(`${api.MenusGetAllApi}`, {
  baseURL: apiBase,

  headers: {
    'Authorization': `Bearer ${Token}`
  },
});
   if (!MenusFooter.value){
  if (error.value && error.value.status == 401) {
      localStorage.removeItem('mainToken');
    setTimeout(() => {
     useRouter().go('/');
    }, 1000);
    }
 }
// onMounted(() => {

// });

</script>
<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/variables";
@import "~/assets/styles/scss/theme/mixin";
.footer {
  background-color: #fff;
  .footer-links {
    @media (max-width: 767.98px) {
      text-align: center;
    }
    h6 {
      position: relative;
      margin-bottom: 20px;
      &::before {
        content: "";
        position: absolute;
        background-color: $blue;
        width: 13%;
        height: 2px;
        bottom: -10px;
        left: 0;
        @media (max-width: 767.98px) {
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
    ul {
      li {
        display: flex;
        align-items: center;
        line-height: 2;
        @media (max-width: 767.98px) {
          justify-content: center;
        }
        p {
          margin: 0;
          color: #9b9b9b;
        }
        a {
          color: #9b9b9b;
          transition: $transition;
          font-weight: 300;
          font-size: 15px;
          &:hover {
            color: $blue;
          }
        }
      }
    }
  }
  .footer-bottom {
    display: flex;
    justify-content: space-between;
    padding-bottom: 80px;
    @media (max-width: 767.98px) {
      p {
        font-size: 12px;
        margin-bottom: 10px;
      }
      * {
        text-align: center;
        margin: auto;
      }
    }
  }
  .menu-mobile {
    display: none;
  }
  .menu-mobile {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    .item-icon {
      position: relative;
      span {
        position: absolute;
        width: 18px;
        height: 18px;
        background-color: #45b2ef;
        color: #fff;
        top: 1px;
        right: 15px;
        display: grid;
        place-content: center;
        border-radius: 50%;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.17);
        font-size: 11px;
      }
      &:hover {
        svg {
          color: rgba(51, 51, 51, 0.7) !important;
        }
      }
      svg {
        font-size: 20px;
        transition: $transition;
      }
      &:nth-child(4) {
        background-color: #45b2ef;
        svg {
          font-size: 20px;
          color: #fff;
        }
      }
    }
  }
  @media screen and (min-width: 1200px) {
    .menu-mobile {
      display: none;
    }
  }
}
</style>
