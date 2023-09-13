<template>
  <section class="user-orders container">
      <div class="d-flex mt-5 mb-5 justify-content-center align-items-start">
    <img src="/icons/fav.png" class="me-3" style="height: 40px; width: 40px;" alt="">
    <ElementsHeaderTitle :title=" $i18n.locale == 'ar' ?`تفاصيل الطلب`:`Order Details`" />
  </div>
    <div class="table-content table-responsive" id="cart-container" v-if="data">
         <table class="table" ref="DownloadComp">
        <thead>
            <tr>
            <th>{{$i18n.locale == 'ar' ? 'الصورة':'Image'}} </th>
            <th>{{$i18n.locale == 'ar' ? 'اسم المنتج':'Product Name'}}</th>
            <th>{{$i18n.locale == 'ar' ? 'الكمية':'Quantity'}}</th>
            <th>{{$i18n.locale == 'ar' ? 'طريقة الدفع':'Payment Way'}}</th>
            <th>{{$i18n.locale == 'ar' ? 'حالة الطلب':'Payment Status'}}</th>
            <th>{{$i18n.locale == 'ar' ? 'السعر الاجمالي':'Total Price'}}</th>
            <th>{{$i18n.locale == 'ar' ? 'تاريخ الطلب':'Created Date'}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in data" :key="order.id" v-show="order.shoppingCartId == id">
            <td v-if="order.product.productImageUrl"><img :src="apiBase + '/' + order.product.productImageUrl" alt="" width="65" height="40" /></td>
            <td v-if="!order.product.productImageUrl">----</td>
            <td>
                {{ useTranslate(order.product, 'name').slice(0, 20) ?? '----' }}
            </td>
            <td>
              {{ order.quantity ?? '----' }}
            </td>
            <td>
              {{ order.paymentType ?? '----' }}
            </td>
            <td>
              {{ order.status ?? '----' }}
            </td>
            <td>
              {{ order.totalPrice ?? '----' }}
            </td>
            <td>
              {{ useDate(order.createdOn) ?? '----' }}
            </td> 
          </tr>
        </tbody>
      </table> 
    </div>
  </section>
</template>

<script setup>
  const { api , apiBase} = useRuntimeConfig()
  const user = useUserInfo().value
const { id } = useRoute().params;
  const { data, error, pending: dataPending, execute } = await useAsyncData(
    'orders',
    () => $fetch(`${api.OrdersProductApi}/${id}`, {
      method: 'GET',
      baseURL: `${apiBase}`,
      headers: {
        'Authorization': `Bearer ${useMainToken().value}`
      }
    } )
  );

  if (error.value && error.value.statusCode == 401) {
    await useReauthorization().reAuthorize()
  }
  // Life cycle Hook
  onMounted(() => {
    if (!data.value){
        execute();
    } 
    
  })
</script>

<style lang="scss" scoped>
  @import '~/assets/styles/scss/theme/variables';
  @import '~/assets/styles/scss/theme/mixin';
  .table-responsive {
    // &::-webkit-scrollbar { height: 6px; }
    // &::-webkit-scrollbar-track { background: #2e2b2b; }
    // &::-webkit-scrollbar-thumb { background: $gold; border-radius: 10px; }
    // &::-webkit-scrollbar-thumb:hover { background: #555; }
    @include horizontal-scrollbar(6px, '#2e2b2b', $blue, '#555');
  }
  table.table {
    thead th,tbody td{
      height: 60px; 
      vertical-align: middle;
      white-space: nowrap; 
      text-align: center;
    }
    thead th{
      color: $DarkBlue;
    }
    tbody td { 
      color: rgb(92, 92, 92);
 }
  }
  button.btn:focus:not(:focus-visible) {
    box-shadow: unset;
  }
</style>