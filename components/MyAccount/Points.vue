<template>
  <section class="user-orders container">
    <div class="table-content table-responsive" id="cart-container">
      <table class="table" ref="DownloadComp">
        <thead>
          <tr>
            <th>{{$t('Points')}}</th>
            <th>{{$t('Balance')}}</th>
            <th>{{$t('Expiry-Date')}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items.data" :key="item.id">
            <td>
               <strong style="color:#14aabb">+ {{ item.points }}</strong> 
            </td>
            <td>
             {{ item.balance }}{{" AED" }}
            </td> 
             <td>
             {{ item.expiryPeriodInMonth }} Month
            </td> 
          </tr>
        </tbody>
      </table>      
    </div>
  </section>
</template>
<script setup>
  const { items } = defineProps(['items'])
    const currency = useCurrency().value;

  onMounted(() => {
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