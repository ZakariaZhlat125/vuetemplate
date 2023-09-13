<template>
  <div class="container my-5">
    <h6>Home /  FAQS</h6>
    <h1 class="mb-5"
      v-html="`${$i18n.locale == 'ar' ? 'مركز المساعدة': ' Help Centre'}`"
    ></h1>
    <div class="accordion" id="accordionExample">
      <div class="accordion-item" v-for="(item,index) in faqsData.items" :key="index">
        <h2 class="accordion-header">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="`#collapseOne${index}`"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
           &nbsp; &nbsp;{{$i18n.locale == 'ar'?item.name:item.englishName}}
          </button>
        </h2>
        <div
          :id="`collapseOne${index}`"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <p class="accordion-body"  v-html="
          `${
            $i18n.locale == 'ar'
              ? item.description1 == null ? 'Please Insert Data':item.description1
              : item.englishDescription1 == null ? 'Please Insert Data':item.englishDescription1
          }`
        ">
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const value = ref(1);
const Token = localStorage.getItem("mainToken");
const { reAuthorize } = useReauthorization();
const { api, apiBase } = useRuntimeConfig();

const {
  data: faqsData,
  error,
  pending,
  execute,
} = await useFetch(`${api.BlocksApi}?categoryId=8`, {
  baseURL: apiBase,
  headers: {
    Authorization: `Bearer ${Token}`,
  },
});
if (error.value && error.value.status == 401) {
  await useReauthorization().reAuthorize();
}
</script>

<style lang="scss" scoped>
.accordion-button {
  color: #444444;
  background-color: #f6f6f6;
  box-shadow: inset 0 -1px 0 rgba(0,0,0,.125);
  position: relative;
  &::after{
    content:'\2b';
    background-image: none;
    font-size: 25px;
    margin-left: 0;
    position: absolute;
    left: 10px;
    top: 23px;
    transform: rotate(-180deg);
  }
}

h1 {
  text-align: center;
}
</style>
