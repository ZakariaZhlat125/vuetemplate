<template>
  <VForm
    id="registerForm"
    class="row register_form"
    :validation-schema="schema"
    :initial-values="initialValues"
    v-slot="{ meta: formMeta }"
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
          name="fullNameAr"
          id="fullNameAr"
          label="Full Name Ar"
          placeholder="Full Name Ar"
          astricts="true"
        />
      </div>
      <div class="col-sm-12 col-md-6">
        <ElementsFormVTextInput
          border_color="0e6b8a" color="0e6b8a"
          type="text"
          name="fullNameEn"
          id="fullNameEn"
          label="Full Name En"
          placeholder="Full Name En"
          astricts="true"
        />
      </div>
      <div class="col-sm-12 col-md-6 ">
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
      <div class="col-sm-12 col-md-6 ">
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
      <div class="col-sm-12 col-md-6 ">
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

      <div class="col-sm-12 col-md-6 ">
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

      <!-- <div class="col-sm-12 col-md-6 col-lg-4">
        <ElementsFormVSelect border_color="0e6b8a" astricts="true" color="0e6b8a" name="nationId" id="nationId" :items="countries.data" :placeholder="$t('Country')"/>
      </div> -->

    
      <hr>
      <div class="col-sm-12">
         <h5 style="color:#959595">Optional :</h5>
       </div>
      <div class="col-sm-12 col-md-6 ">
        <ElementsFormVTextInput border_color="0e6b8a" color="0e6b8a" type="date" name="birthDate"  id="birthDate" label="Date of birth" placeholder="Date of birth" />
      </div>

      <!-- <div class="col-sm-12 col-md-6 ">
        <ElementsFormVTextInput
          border_color="0e6b8a" color="0e6b8a"
          type="text"
          name="city"
          id="city"
          label="City"
          placeholder="City"
          autocomplete="false"
        />
      </div> -->

      <!-- <div class="col-sm-12 col-md-6 ">
        <ElementsFormVTextInput
          border_color="0e6b8a" color="0e6b8a"
          type="text"
          name="zipcode"
          id="zipcode"
          label="Zip Code"
          placeholder="Zip Code"
        />
      </div> -->
      <div class="radio-group col-sm-12 col-md-6 ">
        <label class=" text-start w-100 my-2">Sex : </label><br />
        <ElementsFormVRadioInput type="radio" name="sex" id="male" label="Male" value="male" />
        <ElementsFormVRadioInput type="radio" name="sex" id="female" label="Female" value="female" />                    
      </div>

      
      <!-- <div class="col-sm-12 col-md-6 ">
        <ElementsFormVSelect border_color="0e6b8a" color="0e6b8a" name="nationalityId" id="nationalityId" :items="cities.data" :placeholder="$t('Nationality')"/>
      </div> -->
    
      <div class="col-sm-12">
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

    <div class="col-md-12 mb-2 form-group">
      <button
        type="submit"
        value="Login"
        class="btn btn-main"
        style="width: 100%"
        :class="{ 'btn-primary': formMeta.valid }"
        :disabled="!formMeta.valid || isLoading"
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
const isLoading = ref(false);
const hasError = ref(false);
const errorMessage = ref("");


// Handle Form Submit
const handleSubmit = async (values, actions) => {
//   console.log('values', values);
//   return;
  isLoading.value = true
  actions.evt.target[2].classList.add('is-valid');
  actions.evt.target[2].classList.remove('is-invalid');
  actions.evt.target[5].classList.add('is-valid');
  actions.evt.target[5].classList.remove('is-invalid');
  const RegisterEmailData = {
    firstName: values.fullNameEn,
    lastName: values.fullNameEn,
    email: values.email,
    userName: values.email,
    password: values.password,
    confirmPassword: values.confirmPassword,
    phoneNumber: values.phone,
    activateUser: true,
    autoConfirmEmail: true
  }
  const { data, error } = await useFetch(api.RegisterNewEmail, {
    baseURL: apiBase,
    method: 'POST',
    body: RegisterEmailData,
    headers: {
      'Authorization': `Bearer ${useMainToken().value}`
    }
  })
//   console.log('register success ', data.value, error.value);

  if (data.value) {
    if (!data.value.succeeded) {  
      isLoading.value = false
      hasError.value = true
      // console.log(data.value.messages)
      errorMessage.value = data.value.messages
      data.value.messages.forEach((mes) => {
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
    } else {
      hasError.value = false                                // hide error message box
      const AddPersonValue = {
        email: values.email,
        userId: data.value.data,
        fullNameAr: values.fullNameAr,
        fullNameEn: values.fullNameEn, 
        // nationId: values.nationId,
        phone: values.phone,
        status: 'Accepted'
      }
      if(values.sex != '') AddPersonValue.sex = values.sex
      if(values.address != '') AddPersonValue.address = values.address
      if(values.birthDate != '') AddPersonValue.birthDate = values.birthDate
      const { data: AddPersonData, error: AddPersonDataError } = await useFetch(`${api.PersonClientsApi}`, {
        baseURL: apiBase,
        method: 'POST',
        body: AddPersonValue,
        headers: {
            'Authorization': `Bearer ${useMainToken().value}`
        }
      })
      // console.log('AddPersonData',AddPersonData.value)
      if(AddPersonData.value){
        const loginValue = { email: values.email, password: values.password }
        const { data: loginData, error: loginError } = await useFetch(`${api.AuthLoginApi}`, {
            baseURL: apiBase,
            method: 'POST',
            body: loginValue
        })
        // console.log('aa',loginData.value)
        if (loginData.value.succeeded) {
          
            localStorage.setItem('UserId', data.value.data) 
            useUserId().value.UserId = data.value.data
            localStorage.setItem('token', loginData.value.data.token)  // storage the token in localstorage
            useAuth().value.isAuthenticated = true                // make global isAuthenticated state true  
            useToken().value = loginData.value.data.token             // store token in the store
            localStorage.setItem('accountType', loginData.value.data.type)  // storage the Account Type in localstorage
            useAccountType().value = loginData.value.data.type
            // Get All User Info
            const {data: UserInfo} = await useGetSiteApi().GetById(`${api.PersonClientsApi}/`, loginData.value.data.id)
            $awn.success('welcome, you can now benefit from our services', { durations: { global: 5000 } })
            localStorage.setItem('userInfo', JSON.stringify(UserInfo.value.data))
            useUserInfo().value = UserInfo.value.data
            return navigateTo('/')
            
            
        }
      }
    }
  }
  if (error.value) {
    isLoading.value = false
    // console.log(error);
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
  fullNameAr: string().required().min(3).label("Your Arabic Name"),
  fullNameEn: string().required().min(3).label("Your English Name"),
  phone: string().required().min(3).label("Your Phone Number"),
  // nationId: number().required().label('Your Country'),
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
  email: string().required().email().label("Email Address"),
  password: string().required().min(4).label("Your Password"),
  // password: string()
  //   .required()
  //   .min(4)
  //   .test(
  //     "password-not-valid",
  //     "Password must contain at least one capital letter and lowercase letter",
  //     async (value) => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(value)
  //   )
  //   .label("Your Password"),
  confirmPassword: string()
    .required()
    .oneOf([yupRef("password")], "Passwords do not match") // Cross-Field Validation
    
    .label("Your Confirmation Password"),
});
const initialValues = {
  fullNameAr: "",
  fullNameEn: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  birthDate:"",
  // nationId: null,

  sex: "",
  address: "",
  
};

const throwErrorMessage = (message) => {
  isLoading.value = false;
  $awn.alert(message, { durations: { global: 5000 } });
};
</script>

<style scoped lang="scss">
@import "~/assets/styles/scss/theme/variables";
@import "~/assets/styles/scss/theme/mixin";
label {
  color: $blue;
}
</style>
