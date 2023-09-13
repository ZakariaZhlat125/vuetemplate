<template>
  <section class="product-details  custome-padding">
      <span>
        <nuxt-link class="link" to="/">Home</nuxt-link> /
        <span>{{$i18n.locale == 'ar' ? product.productCategoryNameAr:product.productCategoryNameEn}}</span> / {{$i18n.locale == 'ar' ? product.nameAr:product.nameEn}}
      </span>
      <div class="row">
         <div class="sli align-items-center" v-if="productImagesPending">
      <ElementsSpinner />
    </div>
    <div class="sli" v-else>
      <div class="selec">
         <img
          :src="`${apiBase+ '/' + product.productImageUrl}`"
          alt=""
          :class="[ind == 3 ? 'active' : '']"
          @click="ind = 3"
        />
        <img
          :src="`${apiBase+ '/' + item.imageUrl}`"
          alt=""
          :class="[ind == index ? 'active' : '']"
          v-for="(item, index) in images.data.slice(0,3)"
          :key="index"
          @click="ind = index"
        />
      </div>
      <div class="view">
        <div v-if="ind != 3" class="conta" :style="{ transform: `translateY(-${555 * ind}px)` }">
          <div v-for="(item, index) in images.data" :key="index">
            <img  :src="`${apiBase+ '/' + item.imageUrl}`" alt="" />
          </div>
        </div>
        <div class="conta" v-if="ind == 3" :style="{ transform: `translateY(-${0}px)` }">
          <div >
            <img 
          :src="`${apiBase+ '/' + product.productImageUrl}`"
        />
          </div>
        </div>
      </div>
    </div>
    <div class="sli sli-sm align-items-center" v-if="productImagesPending">
      <ElementsSpinner />
    </div>
    <div class="sli sli-sm" v-else>
      <div class="selec">
          <img
          :src="`${apiBase+ '/' + product.productImageUrl}`"
          alt=""
          :class="[ind == 3 ? 'active' : '']"
          @click="ind = 3"
        />
        <img
          alt=""
          :class="[ind == index ? 'active' : '']"
          v-for="(item, index) in images.data"
          :key="index"
          @click="ind = index"
          :src="`${apiBase+ '/' + item.imageUrl}`"
        />
      </div>
      <div class="view">
        <div v-if="ind != 3" class="conta" :style="{ transform: 'translateY(-' + 300 * ind + 'px)' }">
          <div v-for="(item, index) in images.data" :key="index">
            <img :src="`${apiBase+ '/' + item.imageUrl}`" alt="" />
          </div>
        </div>
        <div class="conta"  v-if="ind == 3"  :style="{ transform: 'translateY(-' + 0 + 'px)' }">
          <div v-for="(item, index) in images.data" :key="index">
          <img 
          :src="`${apiBase+ '/' + product.productImageUrl}`"
        />
          </div>
        </div>
      </div>
    </div>
        <div class="col-md-6 col-12">
          <h2>{{$i18n.locale == 'ar' ? product.nameAr:product.nameEn}} </h2>
          <div class="d-flex justify-content-between">
              <div>
                <font-awesome-icon :icon="['fas', 'star']" class="active" size="sm" style="color:#eabe12" />
              <font-awesome-icon :icon="['fas', 'star']" class="active" size="sm" style="color:#eabe12" />
              <font-awesome-icon :icon="['fas', 'star']" class="active" size="sm" style="color:#eabe12" />
              <font-awesome-icon :icon="['fas', 'star']" class="active" size="sm" style="color:#eabe12" />
              <font-awesome-icon :icon="['far', 'star']" class="not-active" size="sm" style="color:#eabe12" />
              </div>
              <div>
                <strong>SKU: </strong> <span>{{product.code}}</span>
              </div>
          </div>
          <div class="d-flex align-items-center">
            <span class="price" v-if="offerProduct">${{offerProduct.newPrice}}</span>
            <span class="price" v-else>${{product.price}}</span>
            <span class="stock">29 in stock</span>
          </div>
          <div class="row mt-5 align-items-center">
            <div class="counter col-2 col-sm-2">
              <span @click="DecreaseQuantity">-</span>
              <span class="value">{{quantity}}</span>
              <span @click="IncreaseQuantity">+</span>
            </div>
            <div class="col-5 col-sm-4">
              <ElementsAddToCart :isDetails="true" />
            </div>
            <div class="col-5 col-sm-4">
             <button class="Buy">Buy Now</button>
            </div>
          </div>
          <div class="mt-5">
            <p v-html="$i18n.locale == 'ar' ? product.descriptionAboutAr:product.descriptionAboutEn"></p>
          </div>
        </div>
      </div>
  
  </section>
</template>

<script setup>
  const { api, apiBase } = useRuntimeConfig();
  const { product, images, productImagesPending } = defineProps(['product', 'images', 'productImagesPending']);
  const currency = useCurrency().value;
  const ind = ref(3);
  const quantity = ref(1);
  const offerProduct = ref(false);
  const Token = localStorage.getItem("mainToken");

const { id , offerid, idprod} = useRoute().params;
if(offerid){
  const { data, error, execute } = await useFetch(`${api.OfferApi}/${offerid}`, {
  baseURL: apiBase,
  headers: {
    'Authorization': `Bearer ${Token}`
  },
});
   onMounted(() => {
    if (!data.value) execute()
    offerProduct.value = data.value.data
  })
}

const IncreaseQuantity = async()=>{
  quantity.value = quantity.value+1;
 
}
const DecreaseQuantity = async()=>{
  if(quantity.value != 1){
  quantity.value = quantity.value-1;
  }
  
}

</script>

<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/variables";
@import "~/assets/styles/scss/theme/mixin";
.product-details {
  background-color: #fff;
// ***************************** right style *****************************
  .price{
  color: $blue;
  font-weight: 600;
  font-size: 34px;
  margin-inline-end: 25px;
  }
  .stock{
    border: 1px solid #6ba331;
    padding: 8px 15px;
    border-radius: 5px;
  }
  .counter{
  margin-inline-end: 20px;
  span{
    padding: 10px;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    margin: 0 2px;
    transition: $transition;
    cursor: pointer;
    &:hover{
      background: $blue;
      color: #fff;
    }
  }
  .value{
    cursor: auto;
    &:hover{
      background: #fff;
      color: #212529;
    }
  }
  }
  .Buy{
    background-color: #6ba331;
    color: #fff;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    transition: $transition;
    padding: 7px 15px;
    &:hover{
      opacity: .7;
    }
  }
// ***************************** left style *****************************

  .sli {
    display: flex;
    width: 40%;
    padding: 20px;
    justify-content: space-around;
    /* Small devices (landscape phones, 576px and up) */
    @media (max-width: 767.98px) {
      width: 100%;
      padding: 10px;
    }
    /* Extra small devices (portrait phones, less than 576px) */
    @media (max-width: 575.98px) {
      display: none;
    }
    .selec {
      display: flex;
      flex-direction: column;
      width: 30%;
      img {
        width: 85px;
        height: 75px;
        margin: 0 0 10px;
        padding: 5px;
        opacity: .6;
        cursor: pointer;
        border-radius: 3px;
        &.active {
          opacity: 1;
        }
      }
    }
    .view {
      height: 320px;
      overflow: hidden;
      width: 70%;
      .conta {
        display: flex;
        flex-direction: column;
        transform: translateY(0px);
        transition: 0.5s;
        div {
          height: 555px;
          img {
            height: 60%;
          }
        }
      }
    }
  }
  .sli-sm {
    display: none;
    /* Extra small devices (portrait phones, less than 576px) */
    @media (max-width: 575.98px) {
      display: flex;
    }
    .selec {
      width: 30%;
      align-items: center;
      img {
        width: 70px;
        height: 50px
      }
    }
    .view {
      width: 70%;
      height: 300px;
      .conta {
        div {
          height: 300px;
          img {
            height: 75%;
          }
        }
      }
    }
  }



}


</style>