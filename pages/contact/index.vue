<template>
  <div class="container">
    <h6 class="m-2">Home / {{ contactData.englishName }}</h6>
    <div class="row">
      <div class="col-lg-4 col-sm-6">
        <div class="card my-2" style="width: 100%; border-radius: 4%">
          <div class="card-body p-3">
            <h5 class="card-title">Email Address</h5>
            <p class="card-text">
              We Value Your Time - Get a Reply Within 24 Hours to Your Queries!
            </p>
            <span
              >Email :<a href="#" class="card-link"
                > info@sssaudio-visual.com</a
              ></span
            >
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-sm-6">
        <div class="card my-2" style="width: 100%; border-radius: 4%">
          <div class="card-body p-3">
            <h5 class="card-title">Dubai Store</h5>
            <p class="card-text">
              Visit Us Today and Experience the Best in Audio-Visual Technology
            </p>
            <span
              >Address:
              <a href="#" class="card-link"
                >2020 BUILDING , Algoz Third ,Dubai</a
              ></span
            >
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-sm-6">
        <div class="card my-2" style="width: 100%; border-radius: 4%">
          <div class="card-body p-3">
            <h5 class="card-title">Contact Number</h5>
            <p class="card-text">
              Get in touch with our friendly team today! Dial our Contact
              Number:
            </p>
            <span
              >Phone:<a href="#" class="card-link"> 0508737532</a></span
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-lg-9 col-sm-12 my-2 mb-5">
        <div class="card mt-1" style="width: 100%; border-radius: 4%">
          <div class="card-body p-3">
            <h3 class="m-2 card-title">Get in Touch</h3>
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
                       <div class="col-12 col-sm-12">
                    <ElementsFormVTextInput  border_color="aaaaaa"
            color="aaaaaa" type="text" name="name" id="name" :label="$t('name')" :placeholder="$t('name')"/>
                  </div>
                  <div class="col-12 col-sm-12">
                    <ElementsFormVTextInput  border_color="aaaaaa"
            color="aaaaaa" type="text" name="phone" id="phone" :label="$t('phone')" :placeholder="$t('phone')"/>
                  </div>
                  <div class="col-12 col-sm-12">
                    <ElementsFormVTextInput border_color="aaaaaa"
            color="aaaaaa" type="email" name="email" id="email" :label="$t('email')" :placeholder="$t('email')" />
                  </div>
               
                  <div class="col-12 col-sm-12">
                    <ElementsFormVTextArea  type="text" name="message" id="message" :label="$t('message')" :placeholder="$t('message')"  />
                  </div>
               <button type="submit" value="Login" class="btn btn-main btn-block px-3" style="width: 100%;" 
                  :class="{ 'btn-primary': formMeta.valid }" 
                  :disabled="!formMeta.valid || isLoading">
                    <span v-if="!isLoading">{{ $t('send') }}</span>
                    <span v-else>{{ $t('loading...') }}</span>
                  </button>
              </VForm>
           
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-12 my-2">
        <div
          class="card mt-1"
          style="width: 100%; height: auto; border-radius: 4%"
        >
          <h3 class="m-2 card-title">Need a Help?</h3>
          <div class="m-2">
            <img src="../../public/icons/phone.svg" />
            <span class="m-2">0508737532</span>
          </div>

          <div class="m-2">
            <img src="../../public/icons/telegram.svg" />
            <span class="m-2">Tel.: 0508737532</span>
          </div>

          <div class="m-2">
            <img src="../../public/icons/email.svg" />
            <span class="m-2">Email: info@sssaudio-visual.com</span>
          </div>

          <div class="m-2">
            <img src="../../public/icons/map-point.svg" />
            <span class="m-2">2020 BUILDING , Algoz Third , Dubai</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const value = ref(1);
const Token = localStorage.getItem("mainToken");
const { reAuthorize } = useReauthorization();
 import { object, string, ref as yupRef } from "yup";
  import { configure } from "vee-validate";  
  const { $awn } = useNuxtApp()
  const { apiBase, api } = useRuntimeConfig()
  const isLoading = ref(false);
  const hasError = ref(false);
  const errorMessage = ref('');
    const handleSubmit = async (values, actions) => {
    isLoading.value = true;
    const { data, error, execute } = await useHttpForUserApi().post(api.PostContactUS, values);
    // return;
    if (data.value) {
      if (data.value.hasErrors) {
        isLoading.value = false
        hasError.value = true
        errorMessage.value = data.value.validationErrors        
      } else {
        isLoading.value = false
        hasError.value = false
        $awn.success("Mail has successfully been sent");
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
    name: string().required().label("Your name"),
    phone: string().label("Your Phone Number"),    
    email: string().required().email().label("Email Address"),
    message: string().required().label("Your message"),
  });
  const initialValues = { 
    name: '',
    phone: '',
    email: '',
    message: '',
  };
const {
  data: contactData,
  error,
  pending,
  execute,
} = await useFetch(`/api/v1/Menus/2`, {
  baseURL: apiBase,
  headers: {
    Authorization: `Bearer ${Token}`,
  },
});
if (error.value && error.value.status == 401) {
  await useReauthorization().reAuthorize();
}
</script>

<style lang="scss">
.cont {
  background-color: rgb(246, 246, 246);
}
</style>
