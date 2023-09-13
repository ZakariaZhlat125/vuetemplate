<template>
  <VForm
    id="registerForm"
    class="row register_form"
    :validation-schema="schema"
    :initial-values="initialValues"
    v-slot="{ meta: form2Meta }"
    @submit="handleSubmit"
  >
    <div v-if="hasError" class="error-messages mb-3">
      <div class="alert alert-danger text-center">
        <ul class="list-unstyled mb-0">
          <li v-for="(error, index) in errorMessage" :key="index">
            {{ error }}
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
         <h5 style="color:#959595">Required :</h5>
       </div>
      <div class="col-sm-12 col-md-6">
        <ElementsFormVTextInput
          border_color="0e6b8a" color="0e6b8a"
          type="text"
          name="nameAr"
          id="nameAr"
          label="Arabic Name"
          placeholder="Arabic Name"
          astricts="true"
        />
      </div>
      <div class="col-sm-12 col-md-6">
        <ElementsFormVTextInput
          border_color="0e6b8a" color="0e6b8a"
          type="text"
          name="nameEn"
          id="nameEn"
          label="English Name"
          placeholder="English Name"
          astricts="true"
        />
      </div>
      <div class="col-sm-12 col-md-6">
        <ElementsFormVTextInput
          border_color="0e6b8a" color="0e6b8a"
          type="email"
          name="email"
          id="email"
          label="Email"
          placeholder="Email"
          astricts="true"
        />
      </div>
      <div class="col-sm-12 col-md-6">
        <ElementsFormVTextInput
          border_color="0e6b8a" color="0e6b8a"
          type="password"
          name="password"
          id="password"
          label="Password"
          placeholder="Password"
          autocomplete="false"
          :activePasswordEye="true"
          astricts="true"
        />
      </div>
      <div class="col-sm-12 col-md-6">
        <ElementsFormVTextInput
          border_color="0e6b8a" color="0e6b8a"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          label="Confirmed Password"
          placeholder="Confirmed Password"
          autocomplete="false"
          :activePasswordEye="true"
          astricts="true"
        />
      </div>

      <div class="col-sm-12 col-md-6">
        <ElementsFormVTextInput
          border_color="0e6b8a" color="0e6b8a"
          type="text"
          name="phone"
          astricts="true"
          id="phone"
          label="Phone"
          placeholder="Phone"
        />
      </div>

      <!-- <div class="col-sm-12 col-md-6">
        <ElementsFormVSelect border_color="0e6b8a" astricts="true" color="0e6b8a" name="nationId" id="nationId" :items="countries.data" :placeholder="$t('Country')"/>
      </div> -->

      
      <hr>

       <div class="col-sm-12">
         <h5 style="color:#959595">Optional :</h5>
       </div>
      <div class="col-sm-12 col-md-6">
        <ElementsFormVTextInput
          border_color="0e6b8a" color="0e6b8a"
          type="text"
          name="responsiblePersonNameAr"
          id="responsiblePersonNameAr"
          label="Responsible Person Name Ar"
          placeholder="Responsible Person Name Ar"
          autocomplete="false"
        />
      </div>
      <div class="col-sm-12 col-md-6">
        <ElementsFormVTextInput
          border_color="0e6b8a" color="0e6b8a"
          type="text"
          name="responsiblePersonNameEn"
          id="responsiblePersonNameEn"
          label="Responsible Person Name En"
          placeholder="Responsible Person Name En"
          autocomplete="false"
        />
      </div>
      <div class="col-sm-12 col-md-6">
        <ElementsFormVTextInput
          border_color="0e6b8a" color="0e6b8a"
          type="text"
          name="responsiblePersonMobile"
          id="responsiblePersonMobile"
          label="Responsible Person Mobile"
          placeholder="Responsible Person Mobile"
          autocomplete="false"
        />
      </div>

      <div class="col-sm-12 col-md-6">
        <ElementsFormVTextInput
          border_color="0e6b8a" color="0e6b8a"
          type="text"
          name="website"
          id="website"
          label="website"
          placeholder="website"
          autocomplete="false"
        />
      </div>
      
  
      <div class="col-sm-12 col-md-8">
        <ElementsFormVTextInput
          border_color="0e6b8a" color="0e6b8a"
          type="text"
          name="address"
          id="address"
          label="Address"
          placeholder="Address"
        />
      </div>
    </div>

    <div class="col-md-12 mb-2 mt-2 form-group">
      <button
        type="submit"
        value="Login"
        class="btn btn-main"
        style="width: 100%"
        :class="{ 'btn-primary': form2Meta.valid }"
        :disabled="!form2Meta.valid || isLoading"
      >
        <span v-if="!isLoading">{{ $t("sign-up") }}</span>
        <span v-else>{{ $t("loading...") }}</span>
      </button>
    </div>
    <!-- <NuxtLink to="/auth/login" >
      {{ $t("if you have account") }}</NuxtLink
    > -->
  </VForm>
</template>

<script setup>
import { object, string, number, ref as yupRef } from "yup";
import { configure } from "vee-validate";
import * as rules from "@vee-validate/rules";
const { countries } = defineProps(["countries"]);
// console.log(countries)
const { $awn } = useNuxtApp();
const { apiBase, api } = useRuntimeConfig();
const cart = useCart();
const isLoading = ref(false);
const hasError = ref(false);
const errorMessage = ref("");
// const countryName = ref("");
// const countryid = ref(2);
//  const { data: cities } = await useFetch(`${api.cityIdApi}`,
//     {
//       baseURL: apiBase,
//       method: "GET",
//         headers: {
//       'Authorization': `Bearer ${useMainToken().value}`
//     },
//     }
//   );
// Handle Form Submit
const handleSubmit = async (values, actions) => {
  
  isLoading.value = true;
  actions.evt.target[2].classList.add('is-valid');
  actions.evt.target[2].classList.remove('is-invalid');
  actions.evt.target[5].classList.add('is-valid');
  actions.evt.target[5].classList.remove('is-invalid');
  const RegisterEmailData = {
    firstName: values.nameAr,
    lastName: values.nameAr,
    email: values.email,
    userName: values.email,
    password: values.password,
    confirmPassword: values.confirmPassword,
    phoneNumber: values.phone,
    activateUser: true,
    autoConfirmEmail: true
  };
  const { data: hashUserIdData, error: hashUserIdError } = await useFetch(
    api.RegisterNewEmail,
    {
      baseURL: apiBase,
      method: "POST",
      body: RegisterEmailData,
    }
  );
  // console.log("hashUserId : ", hashUserIdData.value);

  if (hashUserIdData.value) {
    if(!hashUserIdData.value.succeeded){
      isLoading.value = false
      hasError.value = true
      // console.log(data.value.messages)
      errorMessage.value = hashUserIdData.value.messages
      hashUserIdData.value.messages.forEach((mes) => {
        if(mes.includes('Email')){
            actions.evt.target[2].classList.remove('is-valid');
            actions.evt.target[2].classList.add('is-invalid');
        }
        if(mes.includes('Username')){
            actions.evt.target[2].classList.remove('is-valid');
            actions.evt.target[2].classList.add('is-invalid');
            errorMessage.value = []
            errorMessage.value.push('Email Has Already Taken')
        }
        if(mes.includes('Phone')){
            actions.evt.target[5].classList.remove('is-valid');
            actions.evt.target[5].classList.add('is-invalid');
        }
      })
    }else {
      const AddCompanyValue = {
        nameAr: values.nameAr,
        nameEn: values.nameEn,
        email: values.email,
        userId: hashUserIdData.value.data,
        // nationId: values.nationId,
        phone: values.phone,
        status: "Accepted",
             "id": 0,
  "clientId": 1,
  "commericalNameAr": "11",
  "commericalNameEn": "11",
  "descriptionAr": "11",
  "descriptionEn": "11",
  "countryId": 1,
  "princedomId": 1,
  "officePhone": values.phone,
  "fax": "1",
  "mailBox": "1",
  "address": "1",
  "website": values.website,
  "location": "1",
  
  "establishmentDate": "2023-07-24T21:09:16.837Z",
  "legalForm": "11",
  "licenseNumber": "11",
  "licenseIssuingDate": "2023-07-24T21:09:16.837Z",
  "licenseEndDate": "2023-07-24T21:09:16.837Z",
  
  "responsiblePersonNameAr": values.responsiblePersonNameAr,
  "responsiblePersonNameEn": values.responsiblePersonNameEn,
  "responsiblePersonMobile": values.responsiblePersonMobile,
  "additionalInfo": "1",
 
  "isActivityTypesChanged": false,
  "isActivitiesChanged": false,
      };
      if(values.responsiblePersonNameAr != '') AddCompanyValue.responsiblePersonNameAr = values.responsiblePersonNameAr
      if(values.responsiblePersonNameEn != '') AddCompanyValue.responsiblePersonNameEn = values.responsiblePersonNameEn
      if(values.responsiblePersonMobile != '') AddCompanyValue.responsiblePersonMobile = values.responsiblePersonMobile
      if(values.website != '') AddCompanyValue.website = values.website
      if(values.address != '') AddCompanyValue.address = values.address
      
      const { data: AddCompanyData, error: AddCompanyDataError } = await useFetch(`${api.CompanyClientsApi}`, {
        baseURL: apiBase,
        method: 'POST',
        body: AddCompanyValue,
        headers: {
            'Authorization': `Bearer ${useMainToken().value}`
        }
      })
      // console.log('AddCompanyData',AddCompanyData.value)
      if(AddCompanyData.value){
        const loginValue = { email: values.email, password: values.password }
        const { data: loginData, error: loginError } = await useFetch(`${api.AuthLoginApi}`, {
            baseURL: apiBase,
            method: 'POST',
            body: loginValue
        })
        // console.log('aa',loginData.value)
        if (loginData.value.succeeded) {
          
            // localStorage.setItem('UserId', data.value.data) 
            // useUserId().value.UserId = data.value.data
            localStorage.setItem('token', loginData.value.data.token)  // storage the token in localstorage
            useAuth().value.isAuthenticated = true                // make global isAuthenticated state true  
            useToken().value = loginData.value.data.token             // store token in the store
            localStorage.setItem('accountType', loginData.value.data.type)  // storage the Account Type in localstorage
            useAccountType().value = loginData.value.data.type
            // Get All User Info
            const {data: UserInfo} = await useGetSiteApi().GetById(`${api.CompanyClientsApi}/`, loginData.value.data.id)
            $awn.success('welcome, you can now benefit from our services', { durations: { global: 5000 } })
            localStorage.setItem('userInfo', JSON.stringify(UserInfo.value.data))
            useUserInfo().value = UserInfo.value.data
            return navigateTo('/')
          
            
        }
      }
      

     
    }
  }
  if (hashUserIdError.value) {
    throwErrorMessage("There is an error has been occur, please try again");
  }
};
configure({
  validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
  validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
  validateOnInput: false, // controls if `input` events should trigger validation with `handleChange` handler
  validateOnModelUpdate: true, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
});
const regxPass = ref(!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/);
const schema = object({
  nameAr: string().required().min(3).label("Your Arabic Name"),
  nameEn: string().required().min(3).label("Your English Name"),
  phone: string().required().min(3).label("Your Phone Number"),
  // nationId: number().required().label('Your Country'),
  email: string().required().email().label("Email Address"),
  password: string().required().min(4).label("Your Password"),
  confirmPassword: string()
    .required()
    .oneOf([yupRef("password")], "Passwords do not match") // Cross-Field Validation
    
    .label("Your Confirmation Password"),
  // name: string().required().min(3).label("Your Name"),
  // fullNameEn: string().required().min(3).label("Your Name"),
  // mobile: string().required().min(3).label("Your Phone Number"),
  // licenseNumber: string().nullable().min(3).label("Your license Number"),
  // licenseIssuarDate: string().nullable().label("Your License Issuar Date"),
  // licenseEndData: string().nullable().label("Your license End Date"),
  // address: string().nullable().min(3).label("Your Address In Arabic"),
  // addressEn: string().nullable().min(3).label("Your Address In English"),
  // website: string().nullable().min(3).label("Your website"),
  // activityTypeName: string().nullable().min(3).label("Your Activity Type Name"),
  // phone: string().nullable().min(3).label("Your phone"),
  // officePhone: number().nullable().label("Your office Phone"),
  // userName: string().nullable().min(3).label("Your Username"),
  // email: string().required().email().label("Email Address"),
  // password: string().required().test(regxPass.value).min(8).label("Your Password"),
  // password: string()
  //   .required()
  //   .min(8)
  //   .test(
  //     "password-not-valid",
  //     "Password must contain at least one capital letter and lowercase letter",
  //     async (value) => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(value)
  //   )
  //   .label("Your Password"),
  // confirmPassword: string()
  //   .required()
  //   .oneOf([yupRef("password")], "Passwords do not match") // Cross-Field Validation
  //   .test(
  //     "password-not-valid",
  //     "Password must contain at least one capital letter and lowercase letter",
  //     async (value) => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(value)
  //   )
  //   .label("Your Confirmation Password"),
});
const initialValues = {
  nameAr: "",
  nameEn: "",
  email: "",
  website: "",
  address: "",
  // nationId: null,
 
  password: "",
  confirmPassword: "",
};

const throwErrorMessage = (message) => {
  isLoading.value = false;
  $awn.alert(message, { durations: { global: 5000 } });
};
</script>

<style scoped lang="scss">
@import "~/assets/styles/scss/theme/variables";
@import "~/assets/styles/scss/theme/mixin";

</style>
