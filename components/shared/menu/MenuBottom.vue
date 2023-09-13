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
                >{{ $i18n.locale == "ar" ? item.name : item.englishName }}
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
                <NuxtLink class="mx-2 d-block text-black" to="/user-account"
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
        <li>
          <NuxtLink :to="`/products/Accessories of audio/1`">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 3C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3H4ZM4 5H20V16H4V5Z"
                fill="black"
              />
              <path
                d="M1 19C0.447715 19 0 19.4477 0 20C0 20.5523 0.447715 21 1 21H23C23.5523 21 24 20.5523 24 20C24 19.4477 23.5523 19 23 19H1Z"
                fill="black"
              />
            </svg>
            <span :class="[show ? 'active' : '']">Accessories of audio</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="`/products/Recording equipment/1`">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M13.6665 6C13.6665 5.44772 13.2188 5 12.6665 5C12.1142 5 11.6665 5.44772 11.6665 6V8C11.6665 8.55228 12.1142 9 12.6665 9C13.2188 9 13.6665 8.55228 13.6665 8V6Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.6665 1C8.80051 1 5.6665 4.13401 5.6665 8V16C5.6665 19.866 8.80051 23 12.6665 23C16.5325 23 19.6665 19.866 19.6665 16V8C19.6665 4.13401 16.5325 1 12.6665 1ZM7.6665 8C7.6665 5.23858 9.90508 3 12.6665 3C15.4279 3 17.6665 5.23858 17.6665 8V16C17.6665 18.7614 15.4279 21 12.6665 21C9.90508 21 7.6665 18.7614 7.6665 16V8Z"
                fill="black"
              />
            </svg>
            <span :class="[show ? 'active' : '']">Recording equipment</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="`/products/Visual optics/1`">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M9.3335 2C9.3335 1.44772 8.88578 1 8.3335 1C7.78121 1 7.3335 1.44772 7.3335 2V3C7.3335 3.55228 7.78121 4 8.3335 4C8.88578 4 9.3335 3.55228 9.3335 3V2Z"
                fill="black"
              />
              <path
                d="M13.3335 2C13.3335 1.44772 12.8858 1 12.3335 1C11.7812 1 11.3335 1.44772 11.3335 2V3C11.3335 3.55228 11.7812 4 12.3335 4C12.8858 4 13.3335 3.55228 13.3335 3V2Z"
                fill="black"
              />
              <path
                d="M17.3335 2C17.3335 1.44772 16.8858 1 16.3335 1C15.7812 1 15.3335 1.44772 15.3335 2V3C15.3335 3.55228 15.7812 4 16.3335 4C16.8858 4 17.3335 3.55228 17.3335 3V2Z"
                fill="black"
              />
              <path
                d="M2.3335 7C1.78121 7 1.3335 7.44772 1.3335 8C1.3335 8.55228 1.78121 9 2.3335 9H3.3335C3.88578 9 4.3335 8.55228 4.3335 8C4.3335 7.44772 3.88578 7 3.3335 7H2.3335Z"
                fill="black"
              />
              <path
                d="M21.3335 7C20.7812 7 20.3335 7.44772 20.3335 8C20.3335 8.55228 20.7812 9 21.3335 9H22.3335C22.8858 9 23.3335 8.55228 23.3335 8C23.3335 7.44772 22.8858 7 22.3335 7H21.3335Z"
                fill="black"
              />
              <path
                d="M2.3335 11C1.78121 11 1.3335 11.4477 1.3335 12C1.3335 12.5523 1.78121 13 2.3335 13H3.3335C3.88578 13 4.3335 12.5523 4.3335 12C4.3335 11.4477 3.88578 11 3.3335 11H2.3335Z"
                fill="black"
              />
              <path
                d="M21.3335 11C20.7812 11 20.3335 11.4477 20.3335 12C20.3335 12.5523 20.7812 13 21.3335 13H22.3335C22.8858 13 23.3335 12.5523 23.3335 12C23.3335 11.4477 22.8858 11 22.3335 11H21.3335Z"
                fill="black"
              />
              <path
                d="M2.3335 15C1.78121 15 1.3335 15.4477 1.3335 16C1.3335 16.5523 1.78121 17 2.3335 17H3.3335C3.88578 17 4.3335 16.5523 4.3335 16C4.3335 15.4477 3.88578 15 3.3335 15H2.3335Z"
                fill="black"
              />
              <path
                d="M21.3335 15C20.7812 15 20.3335 15.4477 20.3335 16C20.3335 16.5523 20.7812 17 21.3335 17H22.3335C22.8858 17 23.3335 16.5523 23.3335 16C23.3335 15.4477 22.8858 15 22.3335 15H21.3335Z"
                fill="black"
              />
              <path
                d="M9.3335 21C9.3335 20.4477 8.88578 20 8.3335 20C7.78121 20 7.3335 20.4477 7.3335 21V22C7.3335 22.5523 7.78121 23 8.3335 23C8.88578 23 9.3335 22.5523 9.3335 22V21Z"
                fill="black"
              />
              <path
                d="M13.3335 21C13.3335 20.4477 12.8858 20 12.3335 20C11.7812 20 11.3335 20.4477 11.3335 21V22C11.3335 22.5523 11.7812 23 12.3335 23C12.8858 23 13.3335 22.5523 13.3335 22V21Z"
                fill="black"
              />
              <path
                d="M17.3335 21C17.3335 20.4477 16.8858 20 16.3335 20C15.7812 20 15.3335 20.4477 15.3335 21V22C15.3335 22.5523 15.7812 23 16.3335 23C16.8858 23 17.3335 22.5523 17.3335 22V21Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.3335 5C6.22893 5 5.3335 5.89543 5.3335 7V17C5.3335 18.1046 6.22893 19 7.3335 19H17.3335C18.4381 19 19.3335 18.1046 19.3335 17V7C19.3335 5.89543 18.4381 5 17.3335 5H7.3335ZM7.3335 7H17.3335V17H7.3335V7Z"
                fill="black"
              />
            </svg>
            <span :class="[show ? 'active' : '']">Visual optics</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="`/products/Accessories of video/1`">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.3335 13C8.3335 10.2386 10.5721 8 13.3335 8C16.0949 8 18.3335 10.2386 18.3335 13C18.3335 15.7614 16.0949 18 13.3335 18C10.5721 18 8.3335 15.7614 8.3335 13ZM13.3335 10C11.6766 10 10.3335 11.3431 10.3335 13C10.3335 14.6569 11.6766 16 13.3335 16C14.9904 16 16.3335 14.6569 16.3335 13C16.3335 11.3431 14.9904 10 13.3335 10Z"
                fill="black"
              />
              <path
                d="M6.3335 11C6.88578 11 7.3335 10.5523 7.3335 10C7.3335 9.44772 6.88578 9 6.3335 9C5.78121 9 5.3335 9.44772 5.3335 10C5.3335 10.5523 5.78121 11 6.3335 11Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.90771 4.3359C9.46411 3.5013 10.4008 3 11.4039 3H15.2631C16.2662 3 17.2029 3.5013 17.7593 4.3359L18.5718 5.5547C18.7573 5.8329 19.0695 6 19.4039 6H21.3335C22.4381 6 23.3335 6.89543 23.3335 8V19C23.3335 20.1046 22.4381 21 21.3335 21H3.3335C2.22893 21 1.3335 20.1046 1.3335 19V8C1.3335 6.89543 2.22893 6 3.3335 6H7.26313C7.59748 6 7.90971 5.8329 8.09518 5.5547L8.90771 4.3359ZM11.4039 5C11.0695 5 10.7573 5.1671 10.5718 5.4453L9.75928 6.6641C9.20288 7.4987 8.26619 8 7.26313 8H3.3335V19H21.3335V8H19.4039C18.4008 8 17.4641 7.4987 16.9077 6.6641L16.0952 5.4453C15.9097 5.1671 15.5975 5 15.2631 5H11.4039Z"
                fill="black"
              />
            </svg>
            <span :class="[show ? 'active' : '']">Accessories of video</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="`/products/Cameras/1`">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 4C6.44772 4 6 4.44772 6 5C6 5.55228 6.44772 6 7 6H11C11.5523 6 12 5.55228 12 5C12 4.44772 11.5523 4 11 4H7Z"
                fill="black"
              />
              <path
                d="M16 4C15.4477 4 15 4.44772 15 5C15 5.55228 15.4477 6 16 6H17C17.5523 6 18 5.55228 18 5C18 4.44772 17.5523 4 17 4H16Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 8C8.68629 8 6 10.6863 6 14C6 17.3137 8.68629 20 12 20C15.3137 20 18 17.3137 18 14C18 10.6863 15.3137 8 12 8ZM8 14C8 11.7909 9.79086 10 12 10C14.2091 10 16 11.7909 16 14C16 16.2091 14.2091 18 12 18C9.79086 18 8 16.2091 8 14Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 1C3.89543 1 3 1.89543 3 3V21C3 22.1046 3.89543 23 5 23H19C20.1046 23 21 22.1046 21 21V3C21 1.89543 20.1046 1 19 1H5ZM5 3L19 3V21H5V3Z"
                fill="black"
              />
            </svg>
            <span :class="[show ? 'active' : '']">Cameras</span>
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
const { MenusHeader ,ProductCategories} = defineProps(["MenusHeader,ProductCategories"]);
const show = ref(false);
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
