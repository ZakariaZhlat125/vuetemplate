<template>
<div class="pg-rgay">
  <main class="main">
    <section class="col-lg-8 login_box_area mx-auto">
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
            <div class="login_form_inner shadow-sm mb-5 bg-body rounded">
              <h3 class="mb-3">{{ $t('Forgot Password') }}</h3>            
              <VForm
                id="loginForm"
                class="row login_form"
                :validation-schema="schema"
                :initial-values="initialValues"
                v-slot="{ meta: formMeta }"
                @submit="handleSubmit" >
                <div v-if="hasError" class="error-messages mb-3">
                  <div class="alert alert-danger text-center">
                    <ul class="list-unstyled mb-0">
                      <li v-for="(error, index) in errorMessage" :key="index">{{ error }}</li>
                    </ul>
                  </div>
                </div>
                <ElementsFormVTextInput  border_color="0e6b8a"
            color="0e6b8a"  astricts="true" type="email" name="email" id="email" :label="$t('email')" :placeholder="$t('email')" />
                <div class="col-md-12 form-group">
                  <button type="submit" value="Login" class="btn btn-main border-1 border-white" style="width: 100%;"
                  :class="{ 'btn-primary': formMeta.valid }" 
                  :disabled="!formMeta.valid || isLoading">
                    <span v-if="!isLoading">{{ $t('Send') }}</span>
                    <span v-else>{{ $t('loading...') }}</span>
                  </button>              
                  <NuxtLink to="/auth/register" class="text-dark">If  you  don’t have  an account  please {{ $t('sign-up') }}
                  </NuxtLink>
                  
                </div>
              </VForm>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>
</template>

<script setup>
  definePageMeta({
    middleware: ['not-authorize']
  })

  import { object, string, ref as yupRef } from "yup";
  import { configure, validate } from "vee-validate";  
  import { regex } from '@vee-validate/rules';


  // validate.extend('regex', {
  //     ...regex,
  //     message: 'Password needs to contain 1 lower case, 1 upper case etc',
  // })
  // import { defineRule } from "vee-validate";
  const { $awn } = useNuxtApp()
  const cart = useCart()

  const { apiBase, api } = useRuntimeConfig()
  const isLoading = ref(false);
  const hasError = ref(false);
  const errorMessage = ref('');

  // Handle Form Submit
  const handleSubmit = async (values, actions) => {
    /*
      - Account One To Test : 
          - email : talal@gmail.com
          - password : Td12345678
    */
    isLoading.value = true
    const { data, error } = await useFetch(`/api/identity/user/forgot-password`, {
      baseURL: apiBase,
      method: 'POST',
      body: values
    })
    // console.log('response :', data.value.succeeded, data.value.data);
    if (data.value.succeeded) {
        isLoading.value = false
        hasError.value = false                                
       await navigateTo('/auth/resestPassword')
    } else {
      isLoading.value = false
      hasError.value = true
      errorMessage.value = data.value.messages
    }
    if (error.value) {
      console.log(error.value);
      isLoading.value = false
      $awn.alert('There is an error has been occur, please try again', { durations: { global: 5000 } })
    }
  };
  configure({
    validateOnBlur: true,         // controls if `blur` events should trigger validation with `handleChange` handler
    validateOnChange: true,       // controls if `change` events should trigger validation with `handleChange` handler
    validateOnInput: false,       // controls if `input` events should trigger validation with `handleChange` handler
    validateOnModelUpdate: true,  // controls if `update:modelValue` events should trigger validation with `handleChange` handler
  });
  const schema = object({
    email: string()
      .required()
      .email()
      .label("Email Address"),
   
  });
  const initialValues = { email: ""};
</script>

<style lang="scss">
  @import '~/assets/styles/scss/theme/variables';
  @import '~/assets/styles/scss/theme/mixin';
  .main-login-background {
    background-color: #fafbfd;
    margin-bottom: -3rem;
  }
  .login_box_area {
    padding: 100px 0;
    @include sm-mobile {
      padding: 50px 0;
    }
    .login_box_img {
      margin-right: -30px;
      position: relative; 
      img { width: 100%; }
      &:before {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        content: "";
        background: #000;
        opacity: .5; 
      }
      .hover {
        position: absolute;
        top: 50%;
        left: 0px;
        text-align: center;
        width: 100%;
        transform: translateY(-50%); 
        h4 {
          font-size: 24px;
          color: #000;
          margin-bottom: 15px; 
        }
        p {
          max-width: 380px;
          margin: 0px auto 25px;
          color: #000; 
        }
        .primary-btn {
          border-radius: 0px;
          line-height: 38px;
          text-transform: uppercase; 
          &:hover:before { left: 260px; }
        }
      }
    }
    .login_form_inner {
      // box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.07);
      box-shadow: 0px 10px 30px 0px rgb(250 250 250 / 7%);
      height: 100%;
      text-align: center;
      padding-top: 80px; 
      padding-bottom: 70px; 
      background-color: rgb(208, 208, 208);
      box-shadow: 0px 10px 20px #0000006b;
      @include tablet {
        padding-top: 80px;
        padding-bottom: 65px;
      }
      @include sm-mobile {
        padding-top: 65px;
        padding-bottom: 50px;
      }
      h1 {
        color: #000;
        text-transform: uppercase;
        margin-bottom: 30px; 
      }
      .login_form {
        max-width: 385px;
        margin: auto;
        a {
          font-size: 14px;
          color: #777777;
          font-family: "Roboto", sans-serif;
          margin-top: 20px;
          display: block; 
        }
        .error-messages {
          .alert {
            position: static;
            top: unset;
            left: unset;
            transform: unset;
            z-index: unset;
          }
        }
      }
    }
  }

</style>