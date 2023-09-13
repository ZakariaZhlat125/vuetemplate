<template>
<div class="d-flex mt-5 justify-content-center align-items-start">
    <ElementsHeaderTitle  :title="`${$t('My-Account')}`" />
  </div>
  <div class="mt-5" style="min-height: calc(100vh - 270px);">
    <ul class="nav nav-pills d-flex justify-content-center nav-pills-mobile  mb-5 " id="pills-tab" role="tablist">
        <li class="nav-item active" role="presentation">
          <button data-index="profile" class="nav-link py-3 active" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="true">
            <span class=" fs-sm-4">{{ $t('My-Profile') }}</span>
          </button>
        </li>
      <li class="nav-item" role="presentation">
          <button data-index="orders" class="nav-link py-3 " id="v-pills-orders-tab" data-bs-toggle="pill" data-bs-target="#v-pills-orders" type="button" role="tab" aria-controls="v-pills-orders" aria-selected="true">
            <span class=" fs-sm-4">{{ $t('Orders') }}</span>
          </button>
        </li>
          <li class="nav-item" role="presentation">
          <button data-index="Points" class="nav-link py-3 " id="v-pills-Points-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Points" type="button" role="tab" aria-controls="v-pills-Points" aria-selected="true">
            <span class=" fs-sm-4">{{ $t('Reward-Points') }}</span>
          </button>
        </li>
      <li class="nav-item" role="presentation">
          <button data-index="RFQ" class="nav-link py-3 " id="v-pills-RFQ-tab" data-bs-toggle="pill" data-bs-target="#v-pills-RFQ" type="button" role="tab" aria-controls="v-pills-RFQ" aria-selected="true">
            <span class=" fs-sm-4">{{ $t('Change-Password') }}</span>
          </button>
        </li>
    
    </ul>
     <div class="container-fluid" style="min-height: 450px;">
      <div class="tab-content" id="pills-tabContent">
       <div class="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
           <MyAccountProfile />
        </div>
        
        <div class="tab-pane fade show " id="v-pills-orders" role="tabpanel" aria-labelledby="v-pills-orders-tab">
          <MyAccountUserOrder  />
        </div>
        <div class="tab-pane fade show" id="v-pills-Points" role="tabpanel" aria-labelledby="v-pills-Points-tab">
            <MyAccountPoints v-if="points" :items="points" />
            <!-- <MyAccountUserOrder  /> -->
            <div v-else class="text-dark text-center shadow-sm p-3 pt-5 mb-5 bg-body rounded">There isn't any Points to display yet</div>
          </div>
        <div class="tab-pane fade show " id="v-pills-RFQ" role="tabpanel" aria-labelledby="v-pills-RFQ-tab">
            <MyAccountChangePassword />
        </div>
       
    </div>
    </div> 
  </div>
</template>

<script setup>
  const accountType = useAccountType();
  const { api ,apiBase} = useRuntimeConfig();
    const { data:points, error:errorpoints, execute:executepoints} = await useLazyFetch(`${api.PointsGetAllForClientApi}`, {
    baseURL: apiBase,
    
    headers: {
      'Authorization': `Bearer ${useMainToken().value}`
    },
  });
</script>

<style lang="scss" scoped>
 @import '~/assets/styles/scss/theme/variables';
  @import '~/assets/styles/scss/theme/mixin';

  .nav-pills {
    // background-color: $green2;

    .nav-link {
      background-color: #efefef;
      color: $blue;
      border-radius: 0 !important;
      margin: 0 0.5rem;

      &.active {
        background-color:$blue !important;
        color: white !important;
      }

      
      &:hover {
        background-color: $blue !important;
        color: white !important;
      }
    }
  }
</style>