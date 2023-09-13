<template>
  <div class="s-s-s-audio-visual custome-padding">
    <div class="content row">
      <div class="col-12 col-sm-12 mb-5">
           <img class="responsive" src="/images/logitech-aurora-headset-opt.jpg" alt="">
      </div>
      <div class="col-12 col-md-4">
           <div class="map ">
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14367215.340630004!2d35.25274387272907!3d28.460841222949146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f5faddeef9bb%3A0xe9b902041feafae0!2sSharjah%20equestrian%20and%20racing%20club!5e0!3m2!1sen!2s!4v1691997479777!5m2!1sen!2s"'
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="card">
          <h3>Address</h3>
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
            <div class="d-flex mt-5">
              <button class="btn-main">
                <img
                  src="https://sssaudio-visual.com/wp-content/uploads/2023/01/cart.svg"
                  alt=""
                />
                Store
              </button>
              <button class="btn-main">
                <img
                  src="https://sssaudio-visual.com/wp-content/uploads/2023/01/shop-1.svg"
                  alt=""
                />
              Point delivery
              </button>
            </div>
            <p class="mt-5" style="color:#777777;font-size:15px;line-height:1.7">
              If you have any questions, comments, or inquiries, please don't hesitate to reach out to us. You can contact us via phone at 971-4-2545888 or send us an email at [email protected] Our dedicated team will be delighted to assist you and provide you with the necessary information or support.
            </p>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="card">
          <h3>Hours</h3>
          <div class="d-flex justify-content-between mb-4">
            <span>Monday</span>
            <span>10:00 a.m. - 8:00 p.m.</span>
          </div>
          <div class="d-flex justify-content-between mb-4">
            <span>Tuesday</span>
            <span>10:00 a.m. - 8:00 p.m.</span>
          </div>
          <div class="d-flex justify-content-between mb-4">
            <span>Wednesday</span>
            <span>10:00 a.m. - 8:00 p.m.</span>
          </div>
          <div class="d-flex justify-content-between mb-4">
            <span>Thursday</span>
            <span>10:00 a.m. - 8:00 p.m.</span>
          </div>
          <div class="d-flex justify-content-between mb-4">
            <span>Friday</span>
            <span>10:00 a.m. - 8:00 p.m.</span>
          </div>
          <div class="d-flex justify-content-between mb-4 redColor">
            <span>Saturday</span>
            <span>10:00 a.m. - 8:00 p.m.</span>
          </div>
          <div class="d-flex justify-content-between mb-4 redColor">
            <span>Sunday</span>
            <span>10:00 a.m. - 8:00 p.m.</span>
          </div>
        </div>
      </div>
       
    </div>
  </div>
</template>

<script setup>
import phone from "/stores/phone.svg";
import map from "/stores/map-point.svg";

const contactInfo = [
  { icon: map, text: "2020 BUILDING, Algoz Third, Dubai" },
  { icon: phone, text: "+971 52 655 5565" },
];
// const { api, apiBase } = useRuntimeConfig();
// const {
//   data: aboutData,
//   error,
//   pending,
//   execute,
// } = await useFetch(`${api.GetMenuDetail}/1`, {
//   baseURL: apiBase,
//   headers: {
//     Authorization: `Bearer ${useMainToken().value}`,
//   },
// });
// if (error.value && error.value.status == 401) {
//   await useReauthorization().reAuthorize();
// }
</script>

<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/variables";
@import "~/assets/styles/scss/theme/mixin";
.s-s-s-audio-visual {
  background-color: #f6f6f6;
  .redColor{
    color: $red;
  }
     button {
      background-color: #f3f3f3;
      color: #3e3e3e;
      padding: 0;
      width: auto;
      height: 38px;
      padding: 5px 10px;
      font-size: 12px;
      font-weight: 200;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-inline-end: 20px;
      margin-bottom: 10px;
      img {
        width: 20px;
        height: 15px;
      }
    }
.map{
  width: 100%;
  height: 100%;
  iframe{
     width: 100%;
  height: 100%;
  }
}
.card{
   border: none;
   border-radius: 10px;
   padding: 20px;
  }
}
</style>
