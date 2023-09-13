<template>
  <section class="shipping-warranty">
    <div class="row">
      <div class="col-12">
      <h4 class="text-gold mt-5">{{ $t('shipping-warranty') }}</h4>
    </div>
    <div class="col-lg-6">
      <div class="radio-group my-3">
        <ElementsFormVRadioInput type="radio" name="isShipping" id="with_shipping" :label="`Complete pick up and delivery services ( ${'UAD'} ${productInfo.shippingPrice} )`" value="true" @change="getShippingStatus" />
        <ElementsFormVRadioInput type="radio" name="isShipping" id="without_shipping" :label="`Drop off and pick up from our office`" value="false" @change="getShippingStatus" />
      </div>
    </div>
    <div class="col-lg-6">
      <div class="radio-group my-3">
        <!-- <ElementsFormVRadioInput type="radio" name="isEnsurance" id="with_warranty" :label="$t('with-warranty') + ` ( ${'UAD'} ${productInfo.insurancePrice} )`" value="true" @change="getInsuranceStatus" />
        <ElementsFormVRadioInput type="radio" name="isEnsurance" id="without_warranty" :label="$t('without-warranty')" value="false" @change="getInsuranceStatus" /> -->
        <ElementsFormVRadioInput type="radio" name="isEnsurance" id="with_warranty" :label="`With Card Care ( ${'UAD'} ${productInfo.insurancePrice} )`" value="true" @change="getInsuranceStatus" />
        <ElementsFormVRadioInput type="radio" name="isEnsurance" id="without_warranty" :label="`Without Card Care`" value="false" @change="getInsuranceStatus" />
      </div>
    </div>
    <div class="col-md-6">
      <h4 class="text-gold mt-5">{{ $t('payment') }}</h4>
    </div>
    <div class="col-md-6 d-none d-md-block">
      <h4 class="text-gold mt-5">{{ $t('total-price') }}</h4>
    </div>
    <div class="col-md-6">
      <div class="radio-group my-3" v-if="paymentMethods">
        <ElementsFormVRadioInput v-for="payment in paymentMethods" :key="payment.id" type="radio" name="paymentType" :id="payment.nameEn" :label="payment.nameEn" :value="String(payment.nameEn).toLowerCase()" @change="getSelectedPayment($event, payment)" />
        <!-- <ElementsFormVRadioInput type="radio" name="paymentType" id="online" :label="$t('online')" value="online" /> -->
      </div>
      <div class="" v-if="isCachSelected && bankInfo" v-html="useTranslate(bankInfo.result, 'content')"></div>
      <!-- <div class="" v-if="isCachSelected">
        <ul class="list-unstyled bright-white">
          <li><b class="text-medium-gold">The bank : </b>RAKBank</li>
          <li><b class="text-medium-gold">Account name : </b>Luxmetallic Prepaid cards Management Services</li>
          <li><b class="text-medium-gold">Account number : </b>8353114799901</li>
          <li><b class="text-medium-gold">IBAN : </b>AE600400008353114799901</li>
          <li><b class="text-medium-gold">Swift code : </b>NRAKAEAK</li>
        </ul>        
      </div> -->
    </div>
    <div class="col-md-6 d-block d-md-none">
      <h4 class="text-gold mt-5">{{ $t('total-price') }}</h4>
    </div>
    <div class="col-md-6">
      <div class="row pt-3">
        <div class="col-8">
          <h6>{{ $t('card-price') }} :</h6>
        </div>
        <div class="col-4">
          <span v-if="productInfo.productPriceDetails.cardPrice != 0">{{ 'UAD' + ' ' + productInfo.productPriceDetails.cardPrice }}</span>
          <span v-if="productInfo.productPriceDetails.cardPrice == 0">{{ 'UAD' + ' ' + productInfo.productPriceDetails.metalPrice }}</span>
        </div>
        <hr/>
        <div class="col-8" v-if="productInfo.isCustom">
          <h6>Custom Card Design :</h6>
        </div>
        <div class="col-4" v-if="productInfo.isCustom">
          <span>{{ 'UAD' + ' ' + productInfo.productPriceDetails.customCardDesign }}</span>
        </div>
        <hr v-if="productInfo.isCustom"/>
        <div class="col-8" v-if="!productInfo.isCustom">
          <h6>Remove Brand :</h6>
        </div>
        <div class="col-4" v-if="!productInfo.isCustom">
          <span>{{ 'UAD' + ' ' + productInfo.productPriceDetails.removeBrandPrice }}</span>
        </div>
        <hr v-if="!productInfo.isCustom"/>
        <div class="col-8" v-if="isShippingSelected">
          <h6>{{ $t('shipping-price') }}:</h6>
        </div>
        <div class="col-4" v-if="isShippingSelected">
          <span>{{ 'UAD' + ' ' + productInfo.shippingPrice }}</span>
        </div>
        <hr v-if="isShippingSelected" />        
        <div class="col-8" v-show="isInsuranceSelected">
          <h6>Card Care Price:</h6>
        </div>
        <div class="col-4" v-show="isInsuranceSelected">
          <span>{{ 'UAD' + ' ' + productInfo.insurancePrice }}</span>
        </div>
        <hr v-show="isInsuranceSelected" />

        <div class="col-8">
          <h5>{{ $t('final-price') }}:</h5>
        </div>
        <div class="col-4">
          <span>{{ 'UAD' + ' ' + finalPrice }}</span>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script setup>
  const emit = defineEmits(['finalPrice', 'selectedPayment'])
  const { productInfo, currency, paymentMethods, bankInfo } = defineProps(['productInfo', 'currency', 'paymentMethods', 'bankInfo'])
  // const { productInfo, currency, paymentMethods } = defineProps(['productInfo', 'currency', 'paymentMethods'])
  const isShippingSelected = ref(false)
  const isInsuranceSelected = ref(false)
  const shippingPrice = ref(0)
  const insurancePrice = ref(0)
  const finalPrice = ref(0)
  const isCachSelected = ref(true);

const getSelectedPayment = (e, payment) => {
  const selectedPayment = payment ?? paymentMethods[0]
  isCachSelected.value = selectedPayment.id == 1 ?? false
  emit('selectedPayment', selectedPayment)
}


const getShippingStatus = (e) => {
  isShippingSelected.value = e.target.value == 'true' ? true : false
  shippingPrice.value = isShippingSelected.value ? productInfo.shippingPrice : 0;
  calcFinalPrice();
}

  const getInsuranceStatus = (e) => {
    isInsuranceSelected.value = e.target.value == 'true' ? true : false
    insurancePrice.value = isInsuranceSelected.value ? productInfo.insurancePrice : 0;
    calcFinalPrice();
  }

  const calcFinalPrice = () => {
    finalPrice.value = productInfo.totalPrice + shippingPrice.value + insurancePrice.value;
    emit('finalPrice', finalPrice.value)
  }

  onMounted(() => {
    isInsuranceSelected.value = productInfo.isEnsurance
    insurancePrice.value = isInsuranceSelected.value ? productInfo.insurancePrice : 0;
    calcFinalPrice();
    getSelectedPayment()
  })
</script>