<template>
  <section class="user-info card mt-5" style="border:none">
    <div class="row">
      <div class="col-12">
        <h4 class=" mt-5">Billing Details</h4>
      </div>
      <div class="col-12" v-if="accountType == 'Person'">
        <ElementsFormVTextInput border_color="242424"
            color="242424" type="text" name="fullNameEn" id="fullNameEn" :label="$i18n.locale == 'ar' ? 'الاسم':'name'" :placeholder="$t('name')" astricts="true" />
      </div>
      <div class="col-12" v-if="accountType == 'Company'">
        <ElementsFormVTextInput border_color="242424"
            color="242424" type="text" name="nameEn" id="nameEn" :label="$i18n.locale == 'ar' ? 'اسم الشركة':'Company Name'" placeholder="Company Name" astricts="true"/>
      </div>
      <div class="col-12">
        <ElementsFormVTextInput border_color="242424"
            color="242424" type="email" name="email" id="email" :label="$t('email')" :placeholder="$t('email')" astricts="true" />
      </div>
      <div class="col-12">
        <ElementsFormVTextInput border_color="242424"
            color="242424" type="text" name="addressEn" id="addressEn" :label="$t('address')" :placeholder="$t('address')" astricts="true"/>
      </div>
      <div class="col-12" v-if="accountType == 'Person'">
        <ElementsFormVTextInput border_color="242424"
            color="242424" type="number" name="phone" id="phone" :label="$t('phone')" :placeholder="$t('phone')" astricts="true" />
      </div>
      <div class="col-12" v-if="accountType == 'Company'">
        <ElementsFormVTextInput border_color="242424"
            color="242424" type="number" name="officePhone" id="officePhone" label="Office Phone" placeholder="Office Phone" astricts="true" />
      </div>
      <div class="col-12">
          <div class="form-floating mb-3">
        <VField v-model="countryid"
        style="color:#242424"
        name="countryId" 
        class="form-control just-bottom-border"
        id="countryId"
        as="select">
        <option value="" disabled selected>{{ $t("Select-Countries") }}</option>
        <option v-for="item in countries" :key="item.id" :value="item.id" :selected="countryId == item.id">{{ useTranslate(item, 'name') }}</option>
      </VField>
      </div>
      </div>
      <div class="col-12">
            <div class="form-floating mb-3" v-if="countryid == 2" >
            <VField 
        style="color:#242424"
        name="cities" 
        class="form-control just-bottom-border"
        id="cities"
        as="select">
        <option value="" disabled selected>{{ $t("Select-Cities") }}</option>
        <option  v-for="item in cities.data" :key="item.id" :value="$i18n.locale == 'ar' ? item.ar_title:item.en_title" 
        >{{ $i18n.locale == 'ar' ? item.ar_title:item.en_title}}</option>
      </VField>
        </div>
           <ElementsFormVTextInput border_color="242424" v-else
            color="242424" type="text" name="cities" id="cities" :label="$i18n.locale == 'ar' ? 'المدن':'Cities'" />
      </div>
      <VForm 
            id="orderForm" 
            class="row order_form"
            @submit="checkCoupon" >
      <div class="col-12 Coupon-contain">
        <ElementsFormVTextInput border_color="242424" color="242424"  type="text" name="Coupon" id="Coupon" :label="$i18n.locale == 'ar' ? 'الكوبون':'Coupon'" :placeholder="$i18n.locale == 'ar' ? 'الكوبون':'Coupon'" />
      <button type="submit"  class="btn-main btn-block px-3" >
                <span>{{ $t('check') }}</span>
              </button>
      </div>
        </VForm>
    </div>
  </section>
</template>
<script setup>
  const { countries, countryId, accountType } = defineProps(['countries', 'countryId', 'accountType'])
  // const countryName = ref([]);
  const countryid = ref([]);
  const selectCountryId = ref(null)
  const isLoaded = ref(false);
  const { apiBase, api } = useRuntimeConfig();
  const { $awn } = useNuxtApp();
  
  const getLoaded = (event) => {
    isLoaded.value = event
  }
  const checkCoupon = async (values) => {
   console.log(values);
  
  const { data: check } = await useFetch(`${api.CheckCouponsApi}/${values.Coupon}`,
    {
      baseURL: apiBase,
      method: "GET",
        headers: {
      'Authorization': `Bearer ${useMainToken().value}`
    },
    }
  );
  if(check.value.data == true){
      $awn.success('Coupon is vaild')
    }
    else{
      $awn.alert('Coupon Not Found!');
    }
  }
  //  const setcountry = (Name,id) => {
  //   countryName.value = Name;
  //   countryid.value = id;
  //   console.log('countryName :',countryName.value);
  //   console.log('countryid :',countryid.value);

  // }
 const { data: cities } = await useFetch(`${api.cityIdApi}`,
    {
      baseURL: apiBase,
      method: "GET",
        headers: {
      'Authorization': `Bearer ${useMainToken().value}`
    },
    }
  );
</script>
<style>
.form-label.rtl{
  left: 0 !important;
  right: auto !important;
}
</style>
<style lang="scss" scoped>

.Coupon-contain{
  position: relative;
  button{
    position: absolute;
    top: 9px;
    right: 0px;
    background-color: #fff;
    color: #14aabb;
    border: none;
    &:hover{
      color: #242424;
    }
  }
}
h4{
  color: #242424;
}
.user-info label {
  color: #aaa !important;
}
.user-info .form-floating label {
  color: #faaaff !important;
}
.user-info .form-control {
  height: 54px;
  border: none;
  border-bottom: 1px solid #aaa;
  border-radius: 0px;
  outline: none;
  box-shadow: none;
  background-color: transparent;
  color: #242424;
}
</style>