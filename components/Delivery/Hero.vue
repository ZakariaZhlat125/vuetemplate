<template>
  <div class="hero row align-center">
    <div class="text col-12 col-md-7">
      <h2>Delivery & Return</h2>
      <p>
        Free delivery available on all orders. Choose a specific delivery date &
        time that suits you for an additional fee.
      </p>
    </div>
    <div class="image col-12 col-md-5">
      <img src="/stores/delivery-return-img.jpg" alt="delivery-return" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/variables";
@import "~/assets/styles/scss/theme/mixin";
.hero {
  .text {
    flex: 1;
  }
  h2,
  p {
    color: white;
  }
  h2 {
    font-weight: 600;
    font-size: 34px;
    @media (max-width: 991px) {
      font-size: 24px;
    }
  }
  p {
    font-weight: 200;
    font-size: 15px;
  }
  img {
    width: 100%;
    border-radius: 12px;
  }
}
</style>
