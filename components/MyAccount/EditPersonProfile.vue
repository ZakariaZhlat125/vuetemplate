<template>
  <main class="main-black-background">
    <section class="col-lg-8 login_box_area mx-auto">
      <div class="container">
        <div class="row">          
          <div class="col-12 col-md-11 col-lg-10 col-xl-9 mx-auto">
            <div class="login_form_inner">
              <h3 class="fs-3 mb-3">{{$t('Edit-Profile')}}</h3>
              <VForm
                id="loginForm"
                class="row register_form px-3"
                :validation-schema="schema"
                :initial-values="initialValues"
                v-slot="{ meta: formMeta }"
                @submit="handleSubmit" >
                <div v-if="hasError" class="error-messages mb-3">
                  <div class="alert alert-danger text-center">
                    <ul class="list-unstyled mb-0">
                      <li v-for="(error, index) in errorMessage" :key="index">
                        <p class="mb-1" v-for="(msg, j) in error.errors" :key="`error_${j}`">{{ error.field + ' ' + msg }}</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- <div class="row"> -->
                  <div class="col-12 col-sm-6">
                    <ElementsFormVTextInput  border_color="0e6b8a"
            color="0e6b8a" type="text" name="fullNameAr" id="fullNameAr" :label="$t('firstName')" :placeholder="$t('arabicName')"/>
                  </div>
                  <div class="col-12 col-sm-6">
                    <ElementsFormVTextInput  border_color="0e6b8a"
            color="0e6b8a" type="text" name="fullNameEn" id="fullNameEn" :label="$t('lastName')" :placeholder="$t('englishName')"/>
                  </div>
                  <div class="col-12 col-sm-6">
                    <ElementsFormVTextInput border_color="0e6b8a"
            color="0e6b8a" type="email" name="email" id="email" :label="$t('email')" :placeholder="$t('email')" />
                  </div>
               
                  <div class="col-12 col-sm-6">
                    <ElementsFormVTextInput border_color="0e6b8a"
            color="0e6b8a" type="number" name="phone" id="phone" :label="$t('phone')" :placeholder="$t('phone')"  />
                  </div>
                <div class="col-md-12 form-group mt-4">
                  <button type="submit" value="Login" class="btn btn-main btn-block px-3" style="width: 100%;" 
                  :class="{ 'btn-primary': formMeta.valid }" 
                  :disabled="!formMeta.valid || isLoading">
                    <span v-if="!isLoading">{{ $t('save') }}</span>
                    <span v-else>{{ $t('loading...') }}</span>
                  </button>
                </div>
              </VForm>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
  import { object, string, ref as yupRef } from "yup";
  import { configure } from "vee-validate";  
  const { countries} = defineProps(['countries'])
  const { $awn } = useNuxtApp()
  const { apiBase, api } = useRuntimeConfig()
  const userInfo = useUserInfo().value;
  console.log( userInfo);
  const isLoading = ref(false);
  const hasError = ref(false);
  const errorMessage = ref('');
  const month = ref((new Date(userInfo.birthDate).getMonth() + 1) < 10 ? `0${(new Date(userInfo.birthDate).getMonth() + 1)}` : (new Date(userInfo.birthDate).getMonth() + 1));

  // Handle Form Submit
  const handleSubmit = async (values, actions) => {
    isLoading.value = true;
    values.id = userInfo.id;
    values.clientId = userInfo.clientId;
    const { data, error, execute } = await useHttpForUserApi().put(api.UpdateProfile, values);
    // return;
    if (data.value) {
      if (data.value.hasErrors) {
        isLoading.value = false
        hasError.value = true
        errorMessage.value = data.value.validationErrors        
      } else {
        isLoading.value = false
        hasError.value = false
        localStorage.setItem('userInfo', JSON.stringify(data.value.result))     // storage the user info inside inside localstorage
        useUserInfo().value = data.value.result
        await navigateTo('/my-account');
      }
    }
    if (error.value && error.value.statusCode == 401) {
      await useReauthorization().reAuthorize()
      if (!data.value) execute()
    } else if (error.value && error.value.statusCode != 401) {
      isLoading.value = false
      console.log(error.value);
      $awn.alert('Server Error, Please communicate with the administration to solve the problem', { durations: { global: 6000 } })
    }
  };
  configure({
    validateOnBlur: true,         // controls if `blur` events should trigger validation with `handleChange` handler
    validateOnChange: true,       // controls if `change` events should trigger validation with `handleChange` handler
    validateOnInput: false,       // controls if `input` events should trigger validation with `handleChange` handler
    validateOnModelUpdate: true,  // controls if `update:modelValue` events should trigger validation with `handleChange` handler
  });
  const schema = object({
    fullNameAr: string().required().min(3).label("Your Arabic Name"),
    fullNameEn: string().required().min(3).label("Your English Name"),
    phone: string().nullable().min(3).label("Your Phone Number"),    
    email: string().required().email().label("Email Address"),
  });
  const initialValues = { 
    fullNameAr: userInfo.fullNameAr,
    fullNameEn: userInfo.fullNameEn,
    email: userInfo.email,
    phone: userInfo.phone,
  };

</script>

<style lang="scss">
  @import '~/assets/styles/scss/theme/variables';
  @import '~/assets/styles/scss/theme/mixin';

  .login_box_area {
    padding: 100px 0;
    @include sm-mobile { padding: 50px 0; }
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
          color: $blue;
          margin-bottom: 15px; 
        }
        p {
          max-width: 380px;
          margin: 0px auto 25px;
          color: $blue; 
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
      padding-top: 115px; 
      padding-bottom: 100px; 
       background-color:#fff;
      @include tablet {
        padding-top: 80px;
        padding-bottom: 65px;
      }
      @include sm-mobile {
        padding-top: 50px;
        padding-bottom: 50px;
      }
      h3 {
        color: $blue;
        text-transform: uppercase;
        font-size: 18px;
        margin-bottom: 30px; 
      }
      .register_form {
        margin: auto;
        a {
          font-size: 14px;
          color: #777777;
          font-family: "Roboto", sans-serif;
          margin-top: 20px;
          display: block; 
        }
         .form-check-input:checked {
        background-color: $DarkBlue;
        border-color: $DarkBlue;
      }
      }
    }
    
    .btn-custom {
      &:hover:before { left: 700px; opacity: 0.3; }
    }
  }

</style>