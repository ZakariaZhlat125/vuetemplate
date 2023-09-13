<template>
  <div class="page-wrapper">
    <div class="content">
      <div class="row">
        <div class="col-12 col-lg-9">
          <section class="hero">
            <div class="hero row align-center">
              <div class="text col-12 col-md-7">
                <h2
                  v-html="$i18n.locale === 'ar' ? data.name : data.englishName"
                  class="text-white"
                ></h2>
                <p class="text-white">
                  Free delivery available on all orders. Choose a specific
                  delivery date & time that suits you for an additional fee.
                </p>
              </div>
              <div class="image col-12 col-md-5">
                <img
                  src="/stores/delivery-return-img.jpg"
                  alt="delivery-return"
                />
              </div>
            </div>
          </section>
          <section>
            <div
              v-html="
                `${
                  $i18n.locale == 'ar'
                    ? data.description1
                    : data.englishDescription1
                }`
              "
            ></div>
          </section>
        </div>
        <div class="col-12 col-lg-3">
          <section class="contact">
            <DeliveryContactInfo />
          </section>
        </div>
      </div>
      <!-- <div class="row">
        <div class="col-12 col-lg-9">
          <section class="hero">
            <DeliveryHero />
          </section>
          <section class="options">
            <DeliveryOptions />
            <DeliveryOptionsStandardList />
          </section>
          <section class="exchange">
            <DeliveryExchange />
          </section>
          <section class="faqs">
            <DeliveryFAQs />
          </section>
        </div>
        <div class="col-12 col-lg-3">
          <section class="contact">
            <DeliveryContactInfo />
          </section>
        </div>
      </div> -->
      <!-- <div>
        <section class="details">
          <DeliveryAdditionalDetails />
        </section>
      </div> -->
    </div>
  </div>
</template>

<script setup>
const { api, apiBase } = useRuntimeConfig();
const { data, error, pending, execute } = await useFetch(
  `${api.GetMenuDetail}/6`,
  {
    baseURL: apiBase,
    headers: {
      Authorization: `Bearer ${useMainToken().value}`,
    },
  }
);
if (error.value && error.value.status == 401) {
  await useReauthorization().reAuthorize();
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  border-radius: 12px;
}
.page-wrapper {
  padding: 20px 0;
  padding-left: 60px;
  background-color: #f6f6f6;
  max-width: 90rem;
  margin: 0 auto;
  @media (max-width: 1024px) {
    padding-left: 0;
  }
}
.content {
  padding: 0 10px;
  position: relative;
}

section {
  margin-bottom: 20px;
  border-radius: 12px;
  padding: 30px;
}
.hero {
  background-color: #38b6ff;
}
.options,
.exchange,
.faqs,
.contact,
.details {
  background-color: white;
}
.contact {
  position: sticky;
  top: 100px;
}
</style>
