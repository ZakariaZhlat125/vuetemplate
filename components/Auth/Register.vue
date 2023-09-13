<template>
  <div class="container" style="margin:20px auto">
    <div class="row justify-content-center">
      <div class="col-lg-10 col-md-12 col-12 mt-3 bg-white">
        <h1 class="title text-center mt-2 mb-2 fw-bold text-uppercase">
          {{ $t("Singup") }}
        </h1>
        <!-- <div class="radio-group d-flex justify-content-center">
          <div class="form-check form-switch form-check-inline">
            <input
              type="radio"
              class="form-check-input"
              id="person"
              name="accountType"
              value="person"
              @change="chooseAccountType"
              checked
            />
            <label for="person" class="form-check-label">
                {{$i18n.locale == 'ar' ? 'بيع بالتجزئة':'Retail'}}
              </label>
          </div>
          <div class="form-check form-switch form-check-inline">
            <input
              type="radio"
              class="form-check-input"
              id="company"
              name="accountType"
              value="company"
              @change="chooseAccountType"
            />
            <label for="company" class="form-check-label">  {{$i18n.locale == 'ar' ? 'بالجملة':'Wholesale'}}</label>
          </div>
        </div> -->
        <div id="client" v-show="!loading">
          <AuthClientRegister :countries="countries" />
        </div>
        <div
          v-if="loading"
          class="d-flex justify-content-center align-items-center"
          style="height: 400px"
        >
          <div class="spinner-border text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <div id="Wholesale" class="visually-hidden" v-show="!loading">
          <AuthCompanyRegister :countries="countries" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { countries } = defineProps(["countries"]);
const isPersonAccountType = ref(true);
const loading = ref(false);
const chooseAccountType = async (e) => {
  loading.value = true;
  await new Promise((resolve) => setTimeout(resolve, 400));

  let client = document.getElementById("client");
  let Wholesale = document.getElementById("Wholesale");
  client.classList.toggle("visually-hidden");
  Wholesale.classList.toggle("visually-hidden");
  // isPersonAccountType.value = e.target.value == 'person' ? true : false;
  // await new Promise(resolve => setTimeout(resolve, 500));
  loading.value = false;
};
onMounted(() => {
  isPersonAccountType.value = true;
});
</script>

<style scoped lang="scss">
@import "~/assets/styles/scss/theme/variables";
@import "~/assets/styles/scss/theme/mixin";

.text-success {
  color: $blue !important;
}

.box {
  // box-shadow: 0 3px 10px $blue;
  margin: 2rem 0;
   border: 1px solid $blue;
  background-color: #fff;
  &:hover {
    // box-shadow: 0px 10px 20px $blue;
    transform: scale(1.02, 1.02);
  }
}

.form-check-input {
  border-color: $blue !important;
}

input {
  cursor: pointer;

  &:focus {
    box-shadow: none !important;
    outline: none;
  }
}

label {
  color: $blue;
  font-weight: bold;
  cursor: pointer;
}

.form-check-input:checked {
  background-color: $blue !important;
  border-color: $blue !important;
}

.title {
  color: $blue;
}
</style>
