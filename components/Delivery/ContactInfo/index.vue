<template>
  <div>
    <h4 class="fs-5 fw-bold">Need a Help?</h4>
    <ul class="d-flex flex-column gap-3 mt-4">
      <li
        class="d-flex align-center gap-2"
        v-for="item in contactInfo"
        :key="item.text"
      >
        <img :src="item.icon" alt="contact icon" />
        <span>{{ item.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import phone from "/stores/phone.svg";
import telegram from "/stores/telegram.svg";
import email from "/stores/email.svg";
import map from "/stores/map-point.svg";

const contactInfo = [
  { icon: phone, text: "0508737532" },
  { icon: telegram, text: "Tel.: 0508737532" },
  { icon: email, text: "Email: info@sssaudio-visual.com" },
  { icon: map, text: "2020 BUILDING, Algoz Third, Dubai" },
];
</script>
