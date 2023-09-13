<template>
  <div class="cart-shop custome-padding">
    <span >
        <nuxt-link class="link" to="/">Home</nuxt-link> /
        <span>Shopping cart</span> 
  </span>
    <div v-if="cart.totalQty > 0" class="mt-5">
  <div class="row">
    <div class="col-md-8 card">
          <div class="row pt-3">
        <div class="col-md-12">
          <div class="container">
          
            <div class="row" style="color: #000">
              <div class="col-md-6 text-center yabel">{{$i18n.locale == 'ar' ? 'الاسم':'Product'}}</div>
              <div class="col-md-2 text-center yabel">{{$i18n.locale == 'ar' ? 'السعر':'price'}}</div>
              <div class="col-md-2 text-center yabel">{{$i18n.locale == 'ar' ? 'الكمية':'quantity'}}</div>
              <div class="col-md-2 text-center yabel">{{$i18n.locale == 'ar' ? 'خيارات':'Actions'}}</div>
            </div>
            <hr>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="container mb-5">
            <template v-for="(item, index) in cart.items" :key="index">
              <div class="row" v-if="item">
                <div class="col-md-2 text-center">
                  <v-avatar class="ma-3" size="100" rounded="0">
                    <v-img :src="apiBase + '/' + item.item.productImageUrl"></v-img>
                  </v-avatar>
                </div>
                <div class="col-md-4 d-flex align-items-center text-center gray-color">
                   {{$i18n.locale == 'ar' ? item.item.nameAr:item.item.nameEn}}
                </div>
                <div
                  class="col-md-2 d-flex align-items-center  justify-content-center gray-color"
                >
                  {{  currency.symbol?currency.symbol:'AED' +' '+ item.price }}
                </div>
                <div
                  class="col-md-2 d-flex align-items-center justify-content-center"
                  style="display: grid"
                >
                  <font-awesome-icon
                    @click="increaseQty(item.id)"
                    :icon="['fas', 'angle-up']"
                  />
                  <span
                    class="m-2 quantity"
                    :id="`quantity_${item.id}`"
                    :data-qty="item.qty"
                    >{{ item.qty }}</span
                  >
                  <font-awesome-icon
                    @click="decreaseQty(item.id)"
                    :icon="['fas', 'angle-down']"
                  />
                </div>
                <div
                  class="col-md-2 d-flex align-items-center justify-content-center"
                >
                  <font-awesome-icon
                    @click="removeFromCart(item.id)"
                    class="m-1"
                    :icon="['fass', 'trash']"
                    style="color: #a91b1a"
                  />
                </div>

                <!-- <hr :class="index + 1 == CartStore.formatedCart.length ? 'd-none' : '' "> -->
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card p-3">
        <h4 class="mb-5">Cart Totals</h4>
        <div class="d-flex justify-content-between align-items-center">
          <strong>{{$i18n.locale == 'ar' ? 'السعر الاجمالي :':'Total Price :'}}</strong>
          <span style="color:#45b2ef;font-size:20px">{{ currency.symbol?currency.symbol:'AED' +' '+ cart.totalPrice }}</span>
        </div>
        <NuxtLink  v-if="isAuth.isAuthenticated" to="/order">
                <button class="Check">{{ $t('Proceed-to-checkout') }}</button>
              </NuxtLink>
               <NuxtLink  v-else to="/auth/login">
                <button class="Check">{{ $t('Proceed-to-checkout') }}</button>
              </NuxtLink>
      </div>
    </div>
  </div>
    </div>
    <div v-else style="height: calc(100vh - 350px);">
      <h5 class="text-center mb-5 mt-5">
        <v-icon
          size="x-large"
          color="blue-darken-2"
          icon="mdi-cart-off"
        ></v-icon>
      </h5>
      <NuxtLink to="/" class="d-flex"
        ><button class="btn-main mx-auto">Fill Your Cart</button></NuxtLink
      >
    </div>
  </div>
</template>

<script setup>
const isAuth = useAuth().value;
const { apiBase } = useRuntimeConfig();
const currency = useCurrency();
const cart = useCart();
console.log('a', cart.value)

const increaseQty = (id) => {
  const quantityElm = document.getElementById(`quantity_${id}`);
  // Check If the Quantity Is Positive Number Or Not
  if (new RegExp("^[1-9]+[0-9]*$").test(quantityElm.dataset.qty)) {
    console.log(
      "out : ",
      typeof +quantityElm.dataset.qty,
      typeof +quantityElm.dataset.qty
    );
    let quantity = parseInt(quantityElm.dataset.qty) + 1;
    quantityElm.setAttribute("data-qty", quantity);
    quantityElm.textContent = quantity;
    useShoppingCartComposable().updateQty(id, quantity);
  }
};

const decreaseQty = (id) => {
  const quantityElm = document.getElementById(`quantity_${id}`);
  // Check If the Quantity Is Positive Number Or Not
  if (
    parseInt(quantityElm.dataset.qty) > 1 &&
    new RegExp("^[1-9]+[0-9]*$").test(quantityElm.dataset.qty)
  ) {
    console.log("in :", quantityElm.dataset.qty);
    let quantity = parseInt(quantityElm.dataset.qty) - 1;
    quantityElm.setAttribute("data-qty", quantity);
    quantityElm.textContent = quantity;
    useShoppingCartComposable().updateQty(id, quantity);
  }
};

const removeFromCart = (id) => {
  useShoppingCartComposable().removeItemFromCart(id);
};

const emptyCart = () => {
  if (localStorage.getItem("cart")) {
    localStorage.removeItem("cart");
    useCart().value.items = new Array();
    useCart().value.totalPrice = 0;
    useCart().value.totalQty = 0;
  }
};
</script>

<style lang="scss" >
@import "~/assets/styles/scss/theme/variables";
@import "~/assets/styles/scss/theme/mixin";
.cart-shop {
  .card{
    border: none;
  }
  .Check{
    margin-top: 25px;
    background-color: $blue;
    color: #fff ;
    padding: 8px 50px;
    text-align: center;
    border: none;
    transition: 0.5s;
    transition: $transition;
    border-radius: 5px;
    width: 100%;
    &:hover{
    background-color: $blue;
    opacity: .7;
    }
  }
  .gray-color{
    color:#585858
  }
  .yabel{
    color: #242424;
    font-weight: bold;
    font-size: 16px;
  }
  .quantity {
    color:#585858;
    font-weight: bold;
  }
  svg {
    cursor: pointer;
    color: $blue;
  }
  .coast {
    color: $red;
    font-size: 18px;
  }
  
}
</style>
