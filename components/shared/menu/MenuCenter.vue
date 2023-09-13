<template>
  <div>
    <div class="menu-center">
      <div class="row">
        <div
          class="col-md-7 d-flex align-items-center"
          style="padding-inline-start: 30px"
        >
          <div class="Categories-btn" @click="show = true">
            <span class="icon">
              <font-awesome-icon :icon="['fas', 'bars']"
            /></span>
            <span> All Categories</span>
          </div>
          <ul>
            <li v-for="item in MenusHeader.items" :key="item.id">
              <NuxtLink :to="item.pageUrl"
                >
               
                {{ $i18n.locale == "ar" ? item.name : item.englishName }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="col-md-5 d-flex align-items-center justify-content-end">
          <div
            class="item-icon"
            title="Login"
            @click="showLogin"
            v-if="!isAuth.isAuthenticated"
          >
            <font-awesome-icon :icon="['far', 'user']" />
          </div>
          <!-- <div class="item-icon" title="LogOut" @click="logout" v-else>
            <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
          </div> -->
          <div class="item-icon drop" v-else>
            <div class="drop-link">
              <font-awesome-icon :icon="['fas', 'caret-down']" />
            </div>
            <div class="drop-menu">
              <div class="drop-item mb-1 d-flex align-items-center">
                <font-awesome-icon :icon="['fas', 'user']" />
                <NuxtLink class="mx-2 d-block text-black" to="/my-account"
                  >My Account</NuxtLink
                >
              </div>
              <div @click="logout" class="drop-item d-flex align-items-center">
                <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
                <p class="mb-0 mx-2 text-black">Logout</p>
              </div>
            </div>
          </div>
          <div class="item-icon" title="Compare">
            <font-awesome-icon :icon="['fas', 'code-compare']" />
            <span>0</span>
          </div>
          <div class="item-icon" title="WishList">
            <font-awesome-icon :icon="['far', 'heart']" />
            <span>0</span>
          </div>
          <div class="item-icon" title="Cart Shopping">
            <NuxtLink to="/cart">
            <font-awesome-icon :icon="['fas', 'cart-shopping']" />
            <span>{{cart.totalQty}}</span>
            </NuxtLink>
          </div>
          <div>{{ currency.symbol?currency.symbol:'AED' +' '+ cart.totalPrice }}</div>
        </div>
      </div>
    </div>
    <div class="overlay" v-if="show" @mouseover="show = false"></div>
    <div
      class="menu-bottom"
      :class="[show ? 'active' : '']"
      @mouseover="show = true"
    >
      <div class="Categories-btn">
        <span class="icon"> <font-awesome-icon :icon="['fas', 'bars']" /></span>
        <span v-if="show" :class="[show ? 'active' : '']"> All Categories</span>
      </div>
      <ul class="Categories">
        <li v-for="item in Categories" :key="item.id">
          <NuxtLink :to="`/products/${item.nameAr}/${item.id}`">
           <img width="20" :src="apiBase+'/'+item.iconDataURL" alt="" style="margin-inline-end:5px">
            <span :class="[show ? 'active' : '']">{{ $i18n.locale == "ar" ? item.nameAr : item.nameEn }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="nav-center-mob">
      <div class="row">
        <div class="col-12 d-flex align-items-center justify-content-center">
          <div class="search">
            <div class="search-box">
              <input
                type="text"
                class="input-search"
                :placeholder="
                  $i18n.locale == 'ar'
                    ? 'ابحث بجميع المنتجات'
                    : 'Search For Products'
                "
              />
              <button class="btn-search">
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const currency = useCurrency();
const cart = useCart();
const isAuth = useAuth().value;
const { MenusHeader } = defineProps(["MenusHeader"]);
const show = ref(false);
const Categories = ref([]);
const { api , apiBase} = useRuntimeConfig()
const Token = localStorage.getItem("mainToken");

const showLogin = () => {
  useShowLogin().value.show = true;
};
const logout = async () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userInfo");
  localStorage.removeItem("accountType");
  if (localStorage.getItem("cart")) {
    localStorage.removeItem("cart");
    useCart().value.items = new Array();
    useCart().value.totalPrice = 0;
    useCart().value.totalQty = 0;
  }
  useAuth().value.isAuthenticated = false;
  await navigateTo("/");
};

const showDropdown = ref(false);
const { data:ProductCategories } = await useFetch(`${api.ProductCategories}?pageNumber=1&pageSize=10000`, {
  baseURL: apiBase,
  headers: {
    'Authorization': `Bearer ${Token}`
  },
});
const handleCategories = (ProductCategories) => {
  if(ProductCategories.value){
      ProductCategories.value.data.forEach((item) => {
      if (item.parentCategoryId == null) {
        Categories.value.push({
          id: item.id,
          nameAr: item.nameAr,
          nameEn: item.nameEn,
          parentCategoryId: item.parentCategoryId,
          iconDataURL: item.iconDataURL,
        });
      }
    });
  }
};

onMounted(() => {
   if(ProductCategories.value){
handleCategories(ProductCategories)
 } 

});
</script>

<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/variables";
@import "~/assets/styles/scss/theme/mixin";
.nav-center-mob {
  background-color: $blue2;
  display: none;
  padding: 10px 20px;
  @media (max-width: 1025.98px) {
    display: block;
  }
  .search {
    background-color: #fff;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px;
    color: #93999a;
    border: 1px solid #ddd;
    border-radius: 30px;
    span {
      border-inline-end: 1px solid #93999a;
      padding: 0 20px;
    }
    .search-box {
      width: fit-content;
      height: fit-content;
      position: relative;
      display: flex;
      flex: 1;
      .input-search {
        height: 40px;
        width: 100%;
        border-style: none;
        padding: 10px;
        font-size: 18px;
        letter-spacing: 2px;
        outline: none;
        transition: all 0.5s ease-in-out;
        &::placeholder {
          font-size: 14px;
          letter-spacing: 2px;
          font-weight: 500;
          color: #93999a;
        }
        &:focus {
          width: 100;
          border-radius: 0px;
          background-color: transparent;
          border-bottom: 1px solid rgba(255, 255, 255, 0.5);
          transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
        }
      }
      .btn-search {
        width: 45px;
        height: 40px;
        border-style: none;
        font-size: 18px;
        font-weight: bold;
        outline: none;
        cursor: pointer;
        border-radius: 50%;
        color: #fff;
        background-color: #45b2ef;
        pointer-events: painted;
        &:focus ~ .input-search {
          width: 100%;
          border-radius: 0px;
          background-color: transparent;
          border-bottom: 1px solid rgba(255, 255, 255, 0.5);
          transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
        }
      }
    }
  }
}
.menu-center {
  background-color: $blue2;
  padding: 10px 10px 10px 60px;
  @media (max-width: 1025.98px) {
    display: none;
  }
  .Categories-btn {
    display: flex;
    align-items: center;
    border-radius: 42px;
    height: 42px;
    width: 150px;
    padding: 0 2px;
    background-color: #fff;
    transition: $transition;
    cursor: pointer;
    color: #333333;
    font-size: 14px;
    &:hover {
      color: rgba(51, 51, 51, 0.7);
    }
    .icon {
      background-color: #2761e7;
      color: #fff;
      padding: 3px 10px;
      border-radius: 50%;
      font-size: 20px;
      margin-inline-end: 10px;
    }
  }
  ul {
    display: flex;
    flex: 1;
    justify-content: space-around;
    li {
      padding: 10px;
      transition: $transition;
      cursor: pointer;
      border-radius: 30px;
      &:hover {
        background-color: #bddff9;
        a {
          color: #5abaf1 !important;
        }
      }
      a {
        font-size: 14px;
        color: #333333;
        transition: $transition;
      }
    }
  }
  .item-icon {
    background-color: #fff;
    border-radius: 50%;
    width: 42px;
    height: 42px;
    margin: 0 10px;
    cursor: pointer;
    transition: $transition;
    color: #333333;
    display: grid;
    place-content: center;
    position: relative;
    span {
      position: absolute;
      width: 18px;
      height: 18px;
      background-color: #fff;
      color: $blue;
      top: -7px;
      right: 0;
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
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.212);
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}
.menu-bottom {
  @media (max-width: 1025.98px) {
    display: none;
  }
  padding: 10px;
  position: fixed;
  width: 62px;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(119, 119, 119, 0.12);
  background-color: #fff;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  &.active {
    width: 275px;
  }
  .Categories-btn {
    display: flex;
    align-items: center;
    border-radius: 42px;
    padding: 0 5px;
    background-color: #45b2ef;
    transition: $transition;
    cursor: pointer;
    color: #fff;
    padding: 0 13px;
    height: 42px;
    .icon {
      background-color: #45b2ef;
      margin-inline-end: 10px;
      font-size: 19px;
    }
  }
  .Categories {
    padding: 10px 8px;
    li {
      height: 45px;
      display: flex;
      align-items: center;
      cursor: pointer;
      &:hover {
        span {
          color: $blue;
        }
      }
      a {
        display: flex;
        align-items: center;
        color: #444546;
        svg {
          margin-inline-end: 10px;
        }
        span {
          display: none;
          transition: $transition;
          &.active {
            display: inline-block;
          }
        }
      }
    }
  }
}
.drop {
  position: relative;
  &:hover .drop-menu {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
  }
  .drop-link {
    position: absolute;
    top: 9px;
    left: 15px;
  }
  .drop-menu {
    opacity: 0;
    transform: translateY(10px);
    visibility: hidden;
    transition: 0.3s;
    position: absolute;
    top: 45px;
    left: 0;
    z-index: 10;
    background-color: white;
    width: 160px;
    border-radius: 5px;
    border: 1px solid #eee;
    box-shadow: 1px 0px 8px rgba(0, 0, 0, 0.15);
    .drop-item {
      padding: 10px;
      transition: 0.3s;
      &:hover {
        background-color: #eee;
      }
    }
  }
}
</style>
