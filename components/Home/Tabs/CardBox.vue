<template>
  <NuxtLink v-if="item" :to="isoffer? `/products/${item.id}/offer/${item.offerId}` : `/products/${item.id}`"
            @mouseover="show =true" @mouseleave="show=false">
  <div
                  class="card-product"
                  >
                    <div class="actions-btn" :class="[show?'active':'']">
                    <v-tooltip
                      v-model="show1"
                      location="start"
                    >
                      <template v-slot:activator="{ props }">
                        <v-btn
                          icon
                          v-bind="props"
                        >
                          <font-awesome-icon :icon="['fas', 'code-compare']" />
                        </v-btn>
                      </template>
                      <span>compare</span>
                    </v-tooltip>
                      <v-tooltip
                      v-model="show2"
                      location="start"
                    >
                      <template v-slot:activator="{ props }">
                        <v-btn
                          icon
                          v-bind="props"
                        >
                          <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                        </v-btn>
                      </template>
                      <span>Quick View</span>
                    </v-tooltip>
                      <v-tooltip
                      v-model="show3"
                      location="start"
                    >
                      <template v-slot:activator="{ props }">
                        <v-btn
                          icon
                          v-bind="props"
                        >
                          <font-awesome-icon :icon="['far', 'heart']" />
                        </v-btn>
                      </template>
                      <span>Add to Wishlist</span>
                    </v-tooltip>
                      
                    </div>
                    <div class="image">
                      <ElementsImage
                        :classes="['custom-image']"
                        :src="apiBase+'/'+item.productImageUrl"
                        :width="`70`"
                        :height="`100`"
                      /></div
                  >
                  <div class="card-info">
                    <div class="slug" v-if="isoffer">
                      Hot
                    </div>
                    <div class="discount" v-if="item.isRecent">
                      New
                    </div>
                    <h5 class="truncate text-start">
                    {{$i18n.locale == 'ar' ? item.nameAr:item.nameEn}} 
                      </h5>
                      <p v-if="isoffer" class="truncate text-start">{{$i18n.locale == 'ar' ? item.productCategory.nameAr:item.productCategory.nameEn}}</p>
                      <p v-else class="truncate text-start">{{$i18n.locale == 'ar' ? item.productCategoryNameAr:item.productCategoryNameEn}}</p>
                    <div
                      class="d-flex align-items-center justify-content-start mt-2"
                    >
                    <font-awesome-icon :icon="['fas', 'star']" class="active" size="sm" />
                    <font-awesome-icon :icon="['fas', 'star']" class="active" size="sm" />
                    <font-awesome-icon :icon="['fas', 'star']" class="active" size="sm" />
                    <font-awesome-icon :icon="['fas', 'star']" class="active" size="sm" />
                    <font-awesome-icon :icon="['far', 'star']" class="not-active" size="sm" />
                    </div>
                    <div class="d-flex align-items-center justify-content-start mt-2">
                     
                      <div  v-if="item.isStack" class="text-black" style="margin-inline-start:5px"> <font-awesome-icon  class="color" :icon="['fas', 'check']" /> In Stock</div>
                      <div v-else style="color:#b50808">
                        Out of stock
                      </div>
                    </div>
                    <div class="color text-start">
                      $ {{item.price}}
                    </div>
                    <button class="btn-main"  @click.prevent="addToCart(item,item.price,0)">
                      Add to basket
                    </button>
                    <div class="text-start d-flex">
                     <span class="text-black">SKU: </span> <p style="margin-inline-start:5px"> {{item.code}} </p>
                    </div>
                    <div v-if="show" :class="show?'custome-prop':''">
                      <hr >
                    <div class="text-start d-flex">
                     <span class="text-black">Brand: </span> <p style="margin-inline-start:5px"> Asus </p>
                    </div>
                    <div class="text-start d-flex">
                     <span class="text-black">Color: </span> <p style="margin-inline-start:5px"> Silver </p>
                    </div>
                    </div>
                     <!-- <div
                      class="d-flex align-items-center justify-content-around mt-2"
                    >
                      <ElementsAddToCart  v-if="isAuth.isAuthenticated" :product="item" :price="accountType == 'Company' ? item.wholesalePrice :item.retailPrice" :qty="0" :isDetails="false" />
                  </div> -->
                  </div>
                </div>
                </NuxtLink>
</template>

<script setup>
const { apiBase } = useRuntimeConfig();
const { item,isoffer } = defineProps(['item',"isoffer"])
const addToCart = (item,pri,qt) => {
  useShoppingCartComposable().addToCart(item,pri,qt);
};
const isAuth = useAuth().value;
const currency = useCurrency().value;
const accountType = useAccountType()
const show = ref(false);
const show1 = ref(false);
const show2 = ref(false);
const show3 = ref(false);
const showAlertfun = () => {
  showAlert.value = true;
  setTimeout(() => {
    showAlert.value = false;
  }, 3000);
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/variables";
@import "~/assets/styles/scss/theme/mixin";
 .card-product {
   position: relative;
   overflow: hidden;
   .actions-btn{
     position: absolute;
     width: 50px;
     height: 135px;
     display: grid;
     right: -100%;
     place-content: center;
     border-radius: 10px;
     transition: $transition;
     .v-btn{
       margin-bottom: 5px;
     }
     svg{
       color: #777777;
       font-size: 22px;
      transition: $transition;
      &:hover{
        opacity: .6;
      }
     }
     &.active{
       right: 20px;
     }
   }
   .color{
    color: $blue;
   }
   padding: 20px 10px;
    cursor: pointer;
    // box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    background-color: #fff;
    border-radius: 10px;
    position: relative;
    // height: 300px;
    // text-align: center;
    // margin: 20px 0;
    transition: $transition;
    &:hover {
      box-shadow: 0px 10px 20px #9b9b9b44;
      // transform: scale(1.02, 1.02);
    }
    svg{
      &.active{
        color: #eabe12;
      }
        &.not-active{
        color: #bbbbbb;
      }
    }
  
    .image {
      padding: 5px;
      img{
        object-fit: contain;
      }
      height: 200px;
      .custom-image {
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
    }
    .slug {
      position: absolute;
      top: 20px;
      left: 20px;
      background-color: $red;
      color: #fff;
      width: 45px;
      height: 25px;
      border-top-left-radius: 35px;
      border-radius: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
    }
        .discount {
    position: absolute;
    top: 20px;
    left: 20px;
    background-color: $green;
    color: #fff;
    width: 45px;
    height: 25px;
    border-top-left-radius: 35px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }
    .card-info {
      // background-color: $green;
      text-align: center;
      // height: 30%;
      .discription {
        height: 20px;
        overflow: hidden;
      }
      h5 {
        color: $green2;
        font-size: 1.1rem;
        margin: 0;
      }
      p {
        color: #a8a8a8;
      }
      .old-price{
        margin: 0;
        font-size: 1rem;
        text-decoration: line-through;
      }
      .price {
        color: $blue;
        margin: 0;
        font-size: 1.5rem;
        font-weight: bold;
      }
     .btn-main{
       font-size: 14px;
       border-radius: 10px;
       padding: 0;
       width: 100%;
       height: 42px;
       margin: 10px 0;
     }
    }
    .custome-prop{
      background-color: #fff;
      position: absolute;
      width: 100%;
      bottom: -80px;
      left: 0;
      border-radius: 10px;
      div{
      padding: 0 10px;
      }

    }
  }
.truncate {
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
}
</style>
