<template>
<div class="pg-rgay">
  <div class="container p-5">
    <div
      class="row justify-content-center h-100 align-items-center align-self-center"
    >
      <div class="main col-lg-6 col-md-10 col-12 mt-4 animated slideInUp">
        <!-- <h1 class="title text-center mt-2 fw-bold text-uppercase">{{ $t('login') }}</h1> -->
        <div class="d-flex mt-4 justify-content-center align-items-center">
          <img src="/icons/fav.png" alt="" />
          <h2 class="ms-2 text-center title fw-bold">{{ $t("login") }}</h2>
        </div>
        <VForm
          id="loginForm"
          class="row login_form"
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
          <ElementsFormVTextInput
            border_color="0e6b8a"
            color="0e6b8a"
            astricts="true"
            type="email"
            name="email"
            id="email"
            :label="$t('email')"
            :placeholder="$t('email')"
          />
          <ElementsFormVTextInput
            border_color="0e6b8a"
            color="0e6b8a"
            astricts="true"
            type="password"
            name="password"
            id="password"
            :label="$t('password')"
            :placeholder="$t('password')"
            autocomplete="false"
            :activePasswordEye="true"
          />
        <div class="">
          <input type="checkbox">&nbsp; 
          <label for="RemRemember me">{{$i18n.locale == 'ar' ? 'تذكرني ':' Remember me'}}</label>
        </div>
          <div class="col-md-4 m-auto form-group">
            <button
              type="submit"
              value="Login"
              class="btn btn-main border-1 border-white"
              style="width: 100%"
              :class="{ 'btn-primary': formMeta.valid }"
              :disabled="!formMeta.valid || isLoading"
            >
              <span v-if="!isLoading">{{ $t("login") }}</span>
              <span v-else>{{ $t("loading...") }}</span>
            </button>
            
          </div>
          <NuxtLink to="/auth/register" class="text-center mt-2 title mb-3"
              >If you don’t have an account please {{ $t("sign-up") }}
            </NuxtLink>
             <NuxtLink to="/auth/Forgot" class="text-center mt-2 title mb-3">{{ $t('Forgot Password') }}
                  </NuxtLink>
        </VForm>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["not-authorize"],
});

import { object, string, ref as yupRef } from "yup";
import { configure, validate } from "vee-validate";
import { regex } from "@vee-validate/rules";

// validate.extend('regex', {
//     ...regex,
//     message: 'Password needs to contain 1 lower case, 1 upper case etc',
// })
// import { defineRule } from "vee-validate";
const { $awn } = useNuxtApp();
const cart = useCart();

const { apiBase, api } = useRuntimeConfig();
const isLoading = ref(false);
const hasError = ref(false);
const errorMessage = ref("");

// Handle Form Submit
const handleSubmit = async (values, actions) => {
  /*
      - Account One To Test : 
          - email : talal@gmail.com
          - password : Td12345678
    */
  isLoading.value = true;
  const { data, error } = await useFetch(`${api.AuthLoginApi}`, {
    baseURL: apiBase,
    method: "POST",
    body: values,
  });
  // console.log('response :', data.value.succeeded, data.value.data);
  if (data.value.succeeded) {
    isLoading.value = false;
    hasError.value = false;
    
    localStorage.setItem("token", data.value.data.token);
    localStorage.setItem("accountType", data.value.data.type);
    useToken().value = data.value.data.token;
    useAuth().value.isAuthenticated = true;
    useAccountType().value = data.value.data.type;
    const userInfoApi =
      data.value.data.type == "Person"
        ? api.PersonClientsApi
        : api.CompanyClientsApi;
    const { data: infoData, error: infoError } = await useGetSiteApi().GetAll(
      `${userInfoApi}/${data.value.data.id}`
    );
    if (infoData.value.succeeded) {
      localStorage.setItem('UserId', infoData.value.data.client.userId) 
    useUserId().value.UserId = infoData.value.data.client.userId
      localStorage.setItem("userInfo", JSON.stringify(infoData.value.data)); // storage the user info inside inside localstorage
      useUserInfo().value = infoData.value.data;
      useAuth().value.isAuthenticated = true; // make global isAuthenticated state true
      return useRouter().back();
      // actions.resetForm();
      // if (cart.value) {
      //   await navigateTo("/order");
      // } else {
      //   await navigateTo("/my-account");
      // }
    } else {
      isLoading.value = false;
      localStorage.removeItem("token");
      useToken().value = null;
      useAuth().value.isAuthenticated = false; // make global isAuthenticated state false
      $awn.alert("There is an error has been occur, please try again", {
        durations: { global: 5000 },
      });
    }
  } else {
    isLoading.value = false;
    hasError.value = true;
    errorMessage.value = data.value.messages;
    // remove valid class and set invalid to email input
    actions.evt.target[0].classList.remove("is-valid");
    actions.evt.target[0].classList.add("is-invalid");
    // remove valid class and set invalid to password input
    actions.evt.target[1].classList.remove("is-valid");
    actions.evt.target[1].classList.add("is-invalid");
  }
  if (error.value) {
    console.log(error.value);
    isLoading.value = false;
    $awn.alert("There is an error has been occur, please try again", {
      durations: { global: 5000 },
    });
  }
};
configure({
  validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
  validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
  validateOnInput: false, // controls if `input` events should trigger validation with `handleChange` handler
  validateOnModelUpdate: true, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
});
const schema = object({
  email: string()
    .required()
    .email()
    // .test(
    //   "email-is-taken",
    //   "Email is already taken",
    //   async (value) => !(await existingEmail(value))
    // )
    .label("Email Address"),
  password: string()
    .required()
    .min(4)
  
    .label("Your Password"),
});
const initialValues = { email: "", password: "" };
</script>

<style scoped lang="scss">
@import "~/assets/styles/scss/theme/variables";
@import "~/assets/styles/scss/theme/mixin";

.main {
  // box-shadow: 0 3px 10px $blue;
  border: 1px solid $blue;
  background-color: #fff;
  &:hover {
    // box-shadow: 0px 10px 20px $blue;
    transform: scale(1.02, 1.02);
  }
}

.title {
  color: $blue;
}
</style>
