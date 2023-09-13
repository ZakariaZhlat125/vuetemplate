<template>
  <section>
    <div class="table-content table-responsive card mt-5" style="border:none" id="cart-container">
    <h4 class="p-3" style="color:#242424">Your Order</h4>
      <table class="table">
        <thead>
          <tr>
            <th>{{$i18n.locale == 'ar' ? 'الصورة':'image'}}</th>
            <th>{{$i18n.locale == 'ar' ? 'الاسم':'name'}}</th>
            <th>{{$i18n.locale == 'ar' ? 'الكمية':'quantity'}}</th>
            <th>{{$i18n.locale == 'ar' ? 'السعر':'price'}}</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(item, index) in cart.items" :key="index">
            <tr v-if="item">
              <td ><img :src="apiBase + '/' + item.photo" alt="" width="75" height="50" /></td>
              <td>
                <NuxtLink :to="`/product/${item.id}`">
                  <h6 :title="useTranslate(item.item, 'name')">{{ useTranslate(item.item, 'name').slice(0, 30) + '...' }}</h6>
                </NuxtLink>
              </td>
              <td>
                    <font-awesome-icon
                    @click="increaseQty(item.id)"
                    :icon="['fas', 'angle-up']" style="cursor: pointer;"
                  />
                  <span
                    class="m-2 quantity"
                    :id="`quantity_${item.id}`"
                    :data-qty="item.qty"
                    >{{ item.qty }}</span
                  >
                  <font-awesome-icon style="cursor: pointer;"
                    @click="decreaseQty(item.id)"
                    :icon="['fas', 'angle-down']"
                  />
              </td>
              <td>{{ currency.symbol?currency.symbol:'AED' + ' ' + item.qty * item.price }}</td>
            </tr>
          </template>
          <tr>
            <td class="py-3 text-center" colspan="1">
              <strong class="mb-0">{{$i18n.locale == 'ar' ? 'السعر الإجمالي':'Total Price'}}</strong>
            </td>
            <td colspan="1"></td>
            <td colspan="1"></td>
            <td class="py-3" ><strong class="mb-0">{{currency.symbol?currency.symbol:'AED'+ ' ' + cart.totalPrice }}</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
  const { cart, currency } = defineProps(['cart', 'currency'])
  const { apiBase } = useRuntimeConfig()
  console.log('cart : ', cart);
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
</script>


<style lang="scss" scoped>
@import '~/assets/styles/scss/theme/variables';
  @import '~/assets/styles/scss/theme/mixin';
  .table-responsive {
    @include horizontal-scrollbar(6px, '#2e2b2b', $blue, '#555');
  }

  table.table {
    color: 242424;
    thead th,
    tbody td { vertical-align: middle; white-space: nowrap; text-align: center; }
  }
</style>