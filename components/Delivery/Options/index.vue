<template>
  <div>
    <h2 class="fs-4 fw-bold">Delivery Options Overview</h2>
    <p>
      S S S AUDIO-VISUAL offers free shipping within the UAE for all orders.
      Delivery typically takes 2-3 days. The currency used is AED. Products come
      with a one-year warranty. You can return any product within 14 days of
      purchase for a full refund. Delivery is handled by DHL Express or Aramex.
    </p>
    <div class="row gap-4">
      <div class="col option-card" v-for="opt in options" :key="opt.text">
        <p class="text-center text-dark">{{ opt.text }}</p>
        <img :src="opt.icon" alt="delivery icon" />
      </div>
    </div>
    <div class="mt-10 d-flex align-center justify-center gap-3">
      <img src="/stores/small-items.svg" />
      <span class="fw-bold fs-5">All items</span>
    </div>
  </div>
</template>

<script setup>
import icon1 from "/stores/delivery-img-icon-1.svg";
import icon2 from "/stores/delivery-img-icon-2.svg";
import icon3 from "/stores/delivery-img-icon-3.svg";
import icon4 from "/stores/delivery-img-icon-4.svg";

const options = [
  {
    text: "1. Order the Product and Specify the Delivery Method",
    icon: icon1,
  },
  { text: "2. You Will Receive an Order Confirmation Message", icon: icon2 },
  { text: "3. Wait for Your Order to Arrive", icon: icon3 },
  { text: "4. Pick up Your Order at The Checkout Area", icon: icon4 },
];
</script>

<style lang="scss" scoped>
.option-card {
  background-color: #f6f6f6;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
