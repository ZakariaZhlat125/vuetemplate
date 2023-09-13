<template>
  <section class="user-orders container">
    <div class="table-content table-responsive" id="cart-container" v-if="data">
         <table class="table" ref="DownloadComp">
        <thead>
          <tr>
            <th>{{ $t('Order-Code') }}</th>
            <th>{{ $t('Created-Date') }}</th>
            <th>{{ $t('Total-Price') }} </th>
            <th>{{ $t('Details') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(order,index) in data.data" :key="index">
            <td>{{ order.orderNumber ?? '----' }}</td>
            <td>
            {{ order.createdOn ?? '----' }}
            </td>
            <td>
              {{ order.totalPrice ?? '----' }}
            </td>
            <td>
            <NuxtLink :to="`/my-account/orders-details/${order.id}`">
              <font-awesome-icon :icon="['fas', 'link']" />
            </NuxtLink>
            </td>
          </tr>
        </tbody>
      </table> 
    </div>
    <div class="text-center">
    <v-pagination
      v-model="page"
      :length="data.totalPages"
    ></v-pagination>
  </div>
  </section>
</template>

<script setup>
  const { api , apiBase} = useRuntimeConfig()
  const user = useUserInfo().value
   const page = ref(1);
  const productNumberPerPage = ref(5);
  const { data, error, pending: dataPending, execute } = await useAsyncData(
    'orders',
    () => $fetch(`${api.ordersApi}?clientId=${user.clientId}`, {
      method: 'GET',
      baseURL: `${apiBase}`,
      params: {pageNumber: page.value, pageSize: productNumberPerPage.value},
      headers: {
        'Authorization': `Bearer ${useMainToken().value}`
      }
    } ), {
      watch: [page, productNumberPerPage],
    }
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
      color: $blue;
    }
    tbody td { 
      color: rgb(92, 92, 92);
 }
  }
  button.btn:focus:not(:focus-visible) {
    box-shadow: unset;
  }
</style>