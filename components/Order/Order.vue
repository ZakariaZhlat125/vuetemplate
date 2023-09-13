<template>
  <section class="order main-black-background text-white py-5">

  <div class="container mb-5">
        <span class="text-black mb-5">
        <nuxt-link class="link" to="/">Home</nuxt-link> /
        <span>Shopping cart</span>/ <span>Checkout</span>
  </span>

      <div class="row">
        <div class="col-md-6">
            <VForm 
            id="orderForm" 
            class="row order_form"
            :validation-schema="accountType == 'Person' ? schema : companySchema"
            :initial-values="initialValues"
            v-slot="{ meta: formMeta }"
            @submit="handleSubmit" >
            <div>
              <div v-if="hasError" class="error-messages mb-3">
                <div class="alert alert-danger text-center">
                  <ul class="list-unstyled mb-0">
                    <li v-for="(error, index) in errorMessage" :key="index">{{ error }}</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- User Info -->
            <OrderUserInfo v-if="countries && accountType" :countries="countries" :countryId="user.countryId" :accountType="accountType" />

            <!-- Shipping & Insurance -->
            <!-- <OrderShippingInsurance v-if="productInfo && currency" :productInfo="productInfo" :currency="currency" @final-price="getEmitFinalPrice" :paymentMethods="paymentMethods" :bankInfo="bankInfo" @selected-payment="getEmitPayment" /> -->
            <div class="col-md-12 form-group mt-4">
              <button type="submit" value="Login" class="btn-main btn-block px-3" 
              :class="{ 'btn-primary': formMeta.valid }" 
              :disabled="!formMeta.valid || isLoading">
                <span v-if="!isLoading">{{ $t('order-now') }}</span>
                <span v-else>{{ $t('loading...') }}</span>
              </button>
            </div>
          </VForm>
          </div>
          <div class="col-md-6">
 
          <OrderProductInfoTable v-if="cart && currency" :cart="cart" :currency="currency" />

          </div>
      </div><!--.row-->

    </div><!--.container-->

  </section>
</template>

<script setup>
  import { object, string, ref as yupRef } from "yup"
  import { configure } from "vee-validate";
  const { countries } = defineProps(['countries'])
  const { $awn } = useNuxtApp();
  const Token = localStorage.getItem("mainToken");
  const { apiBase, api } = useRuntimeConfig();
  const user = useUserInfo().value;
  const accountType = useAccountType();
  const currency = useCurrency()
  const cart = useCart();
  const isLoading = ref(false);
  const hasError = ref(false);
  const errorMessage = ref('');
  const totalCardPrice = ref(0);
  const payment = ref('');
  const ids = ref([])
  const productIds = ref([])
  const productsPrices = ref([])
  const quantitys = ref([])
  const orderNumbers = ref([])
  const paymentTypes = ref([])
  const paymentStatuss = ref([])
  const statuss = ref([])
  const shoppingCartIds = ref([])
  const clintID = ref([])
  const clintType = ref([])
  const princedomNames = ref([])
  const countryIds = ref([])
  const addresses = ref([])

  const initialValues = {
    email: user.email, 
    fullNameEn: useTranslate(user, 'fullName'), 
    nameEn: useTranslate(user, 'name'), 
    addressEn: useTranslate(user, 'address'), 
    phone: user.phone, 
    officePhone: user.officePhone, 
    countryId: user.countryId,
    cities:user.cities,
    Coupon: "",
    // isEnsurance: productInfo.value.isEnsurance ? "true" : "false", 
    // paymentType: "transfer"
  };
// console.log('user', user);
  configure({
    validateOnBlur: true,
    validateOnChange: true,
    validateOnInput: false,
    validateOnModelUpdate: true
  })
  
  const schema = object({
    email: string().required().email().label('Email Address'),
    fullNameEn: string().required().min(3).label('Your Name'),
    phone: string().required(),
    addressEn: string().required().min(3)
  });
  const companySchema = object({
    email: string().required().email().label('Email Address'),
    nameEn: string().required().min(3).label('Your Name'),
    officePhone: string().required(),
    addressEn: string().required().min(3)
  });
 
  const handleSubmit = async (values, actions) => {
   
 
    isLoading.value = true
    const finalOrderData = new Object();
      finalOrderData.id = 0
      finalOrderData.orderNumber = '0'
      finalOrderData.totalPrice = cart.value.totalPrice
      finalOrderData.clientId = user.clientId
      finalOrderData.clientType = accountType.value
      finalOrderData.codeCoupon = values.Coupon
      finalOrderData.clientTypeSupplier ="string"
      finalOrderData.status ="string"
      finalOrderData.createdOn ="2023-09-03T09:18:19.786Z"
      finalOrderData.recieverFullName ="string"
      finalOrderData.recieverPhone ="string"
      finalOrderData.recieverAddress ="string"
      finalOrderData.locationReciever ="string"
      finalOrderData.deliveryDate ="2023-09-03T09:18:19.786Z"
      finalOrderData.isConfirm =true
      const { data: finalOrder} = await useHttpForUserApi().post(api.DeliveryOrders, finalOrderData)
      console.log('finalOrder' , finalOrder.value) 
     
     if (finalOrder.value.succeeded) {
    console.log(`succeeded`)

  cart.value.items.forEach((e, i) => {
      if (e) {
        console.log('e : ', e)
         $fetch(api.DeliveryOrderProducts, {
          baseURL: apiBase,
          method: 'POST',
          body:{
     "id": 0,
    "quantity" :e.qty,
    "unitPrice" : e.price,
    "totalPrice" : e.qty * e.price,
    "orderType" : "string",
    "deliveryOrderId" : finalOrder.value.data,
    "productOrServiceId": 0,
    "productCategoryId" : e.item.productCategoryId,
    "companyId" :e.item.companyId,
    "companyKind" : "string",
    "orderNumber" : "string",
    "indexRow" : 0
  },
   headers: {
    'Authorization': `Bearer ${Token}`
  },
   
        });
      }
    })
        const { data: SendEmailOrder} = await useFetch(`${api.SendEmailOrder}/${finalOrder.value.data}`,{
          baseURL: apiBase,
          method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${Token}`
              },
        })
         if (SendEmailOrder.value.succeeded) {
        $awn.success('Your Order Was Successfully Created')
        resetCart();
        await navigateTo(`/user-account`)
      } else {
        throwErrorMessage('There is an error has been occur, please try again')
      }
    } else {
      throwErrorMessage('There is an error has been occur, please try again')
    }
  }

  const setUserInfo = (data) => {
    if (accountType.value == 'Person') {
      initialValues.fullNameEn = useTranslate(data, 'fullName');
    } else {
      initialValues.nameEn = useTranslate(data, 'name');
    }
    initialValues.email = data.email;
    initialValues.addressEn = useTranslate(data, 'address');
    if (accountType.value == 'Person') {
      initialValues.phone = data.phone;
    } else {
      initialValues.officePhone = data.officePhone;
    }
    initialValues.countryId = data.countryId; 
  }

  const getEmitFinalPrice = (event) => {
    totalCardPrice.value = event
  }

  // const getEmitPayment = (event) => {
  //   payment.value = event
  //   console.log(payment.value)
  // }
  
  const resetCart = () => {
    localStorage.removeItem('cart');
    useCart().value.items = new Array()
    useCart().value.totalPrice = 0
    useCart().value.totalQty = 0    
  }

  const throwErrorMessage = (message) => {
    isLoading.value = false
    $awn.alert(message, { durations: { global: 5000 } }) 
  }

  onMounted(() => {  
    setUserInfo(user);
  })
</script>

<style lang="scss" scoped>
h2,h4{
  color: #242424;
}
</style>