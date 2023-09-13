<template>
  <section id="nav_bar">
    <div class="top-menu">
      <SharedMenuTop />
      <!-- <SharedMenuTop /> -->
    </div>
    <div class="top-menu">
      <SharedMenuCenter :MenusHeader="MenusHeader" :class="BottomHeader ? 'sticky' : ''" />
    </div>
    <div class="overlay" v-if="isShow.show" @click="hideLogin"></div>
    <div class="login" :class="[isShow.show ? 'active' : '']">
      <div class="d-flex align-items-center justify-content-between p-3 top">
        <h5>Sign in</h5>
        <div class="close" @click="hideLogin">
          <font-awesome-icon :icon="['fas', 'xmark']" size="lg" /><span
            >Close</span
          >
        </div>
      </div>
      <VForm
        id="loginForm"
        class="login_form p-3"
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
        <label class="mb-3" for=""
          >Username or email address
          <span style="color: #e32635">*</span></label
        >
        <ElementsFormVTextInput
          astricts="true"
          type="email"
          name="email"
          id="email"
        />
        <label class="mb-3" for=""
          >Password <span style="color: #e32635">*</span></label
        >
        <ElementsFormVTextInput
          astricts="true"
          type="password"
          name="password"
          id="password"
          autocomplete="false"
          :activePasswordEye="true"
        />

        <div class="col-md-12 m-auto form-group">
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
        <div
          class="col-12 col-sm-12 d-flex align-items-center justify-content-between"
        >
          <div>
            <input type="checkbox" style="width: 15px; height: 15px" />&nbsp;
            <label for="RemRemember me">{{
              $i18n.locale == "ar" ? "تذكرني " : " Remember me"
            }}</label>
          </div>
          <NuxtLink to="/auth/Forgot" class="text-center mt-2 title mb-3"
            >Lost your password?
          </NuxtLink>
        </div>
        <hr />
        <div class="col-12 text-center">
          <font-awesome-icon
            style="font-size: 50px; opacity: 0.1"
            :icon="['far', 'user']"
          />
          <div class="mt-1">No account yet?</div>
          <div class="mt-5 Create-Account">
            <NuxtLink to="/auth/register" class="text-center mt-2 title mb-3"
              >Create an Account
            </NuxtLink>
          </div>
        </div>
      </VForm>
    </div>
  
  </section>
</template>
<script setup>
const user = ref("");
const isShow = useShowLogin().value;
const BottomHeader = ref(false);
const router = useRouter();
const { apiBase, api } = useRuntimeConfig();
const Token = localStorage.getItem("mainToken");

const { data:MenusHeader,error,execute } = await useFetch(`${api.GetMenuDetail}?categoryId=1`, {
  baseURL: apiBase,
  headers: {
    'Authorization': `Bearer ${Token}`
  },
});


const hideLogin = () => {
  useShowLogin().value.show = false;
};
const showLogin = () => {
  useShowLogin().value.show = true;
};
onMounted(() => {});

window.addEventListener("scroll", () => {
  var curr = window.pageYOffset;
  // You can style header-bg for style purpose

  if (curr >= 200) {
    BottomHeader.value = true;
  } else {
    BottomHeader.value = false;
  }
});
//  ***************************** for login ****************************
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
      // return useRouter().back();
      useShowLogin().value.show = false;
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
    setTimeout(() => {
      hasError.value = false;
    }, 3000);
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
watchEffect(() => {});
</script>

<style lang="scss">
@import "~/assets/styles/scss/theme/variables";
@import "~/assets/styles/scss/theme/mixin";
.sticky {
  position: fixed;
  @media (max-width: 767.98px) {
    position: absolute;
  }
  top: 0;
  width: 100%;
  z-index: 10000;
}
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.212);
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  cursor: pointer;
}
.login {
  padding: 0;
  position: fixed;
  width: 340px;
  height: 100%;
  top: 0;
  bottom: 0;
  right: -100%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(119, 119, 119, 0.12);
  background-color: #fff;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  &.active {
    right: 0;
  }
  .top {
    border-bottom: 1px solid #ddd;
    h5 {
      margin: 0;
    }
    .close {
      transition: $transition;
      cursor: pointer;
      &:hover {
        opacity: 0.6;
      }
      svg {
        margin-inline-end: 5px;
      }
    }
  }
  .login_form {
    label {
      color: #515151;
    }
    input {
      padding: 0 15px;
      max-width: 100%;
      width: 100%;
      height: 42px;
      border: 1px solid rgba(0, 0, 0, 0.1) !important;
      border-radius: 5px;
      background-color: rgb(255, 255, 255);
      box-shadow: none;
      color: #777777 !important;
      vertical-align: middle;
      font-size: 14px;
      transition: border-color 0.5s ease;
    }
    .Create-Account {
      a {
        font-size: 14px;
        position: relative;
        color: #333333;
        transition: $transition;
        &:hover {
          opacity: 0.5;
        }
        &::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          background-color: $blue;
          bottom: 0;
        }
      }
    }
  }
}
</style>
