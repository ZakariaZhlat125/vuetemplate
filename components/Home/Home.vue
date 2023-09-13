<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
    </Head>
    <!-- Header Slider -->
    <HomeHeaderSlider :TopHeader="TopHeader" :Top="Top" />
    <!-- Popular Categories -->
    <HomeCategories />
    <!-- Best Offers -->
    <HomeOffers />
  <!-- Latest Arrivals -->
    <HomeArrivals :Mid="Mid" />
    <!-- Banner -->
    <HomeBanner />
    <!-- Home Appliance -->
    <HomeAppliance />
     <!-- Microsoft Accessories -->
    <HomeMicrosoftAccessories :Bottom="Bottom" />
    <!-- Our Articles -->
    <HomeArticles />
    <!-- <HomeProducts /> -->
    <!-- BannerSlider -->

  </div>
</template>

<script setup>
  // const {OfferProducts } = defineProps(['OfferProducts']);
  const title = ref('S S S Audio-Visual: Your One-Stop Shop for Audio-Visual - S S S Audio-Visual: Your one-stop shop for audio-visual equipment and accessories in the UAE. We offer a wide range of products and services, with a one-year warranty and free shipping within the UAE.');
  // console.log(OfferProducts)
  const { apiBase, api } = useRuntimeConfig();
const Token = localStorage.getItem("mainToken");
const TopHeader = ref([]);
const Top = ref([]);
const Mid = ref([]);
const Bottom = ref([]);

const { data:SpecialOffer,error,execute } = await useFetch(`${api.SpecialOffer}?pageNumber=1&pageSize=10000`, {
  baseURL: apiBase,
  headers: {
    'Authorization': `Bearer ${Token}`
  },
});
const handleSpecialOffer = (SpecialOffer) => {
  if(SpecialOffer.value){
      SpecialOffer.value.data.forEach((item) => {
      if (item.sectionName == 'Top Header') { 
        TopHeader.value.push({
          id: item.id,
          nameAr: item.nameAr,
          nameEn: item.nameEn,
          startDate: item.startDate,
          endDate: item.endDate,
          imageDataUrl: item.imageDataUrl,
        });
      }
        if (item.sectionName == 'Top') { 
        Top.value.push({
          id: item.id,
          nameAr: item.nameAr,
          nameEn: item.nameEn,
          startDate: item.startDate,
          endDate: item.endDate,
          imageDataUrl: item.imageDataUrl,
        });
      }
        if (item.sectionName == 'Mid') { 
        Mid.value.push({
          id: item.id,
          nameAr: item.nameAr,
          nameEn: item.nameEn,
          startDate: item.startDate,
          endDate: item.endDate,
          imageDataUrl: item.imageDataUrl,
        });
      }
       if (item.sectionName == 'Bottom') { 
        Bottom.value.push({
          id: item.id,
          nameAr: item.nameAr,
          nameEn: item.nameEn,
          startDate: item.startDate,
          endDate: item.endDate,
          imageDataUrl: item.imageDataUrl,
        });
      }
    });
    
  }
};

onMounted(() => {
   if(SpecialOffer.value){
handleSpecialOffer(SpecialOffer)
console.log('TopHeader',TopHeader.value)
console.log('Top',Top.value)
console.log('Mid',Mid.value)
console.log('Bottom',Bottom.value)
 } 

});
</script>
<style>
.swiper-button-next::after, .swiper-button-prev::after {
    color: #3b3b3b !important;
    font-size: 20px !important;
  }
</style>
<style lang="scss" scoped>

.imgBannerformobile, .storemobile {
  display: none;
}
.subscribe {
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    // object-fit: fill;
  }
  .content {
    position: absolute;
    top: 200px;
    left: 30%;
    width: 100%;
    display: flex;
    input[type="text"] {
      background: #fff;
      width: 30%;
      height: 40px;
      padding: 20px;
    }
    button{
      background: #000;
      color: #fff;
      padding: 0 20px;
    }
  }
}

@media screen and (max-width: 992px) {
  .imgBanner, .store {
    display: none;
  }

  .imgBannerformobile, .storemobile {
    display: block;
    // object-fit: contain;
  }

  .imgBannerformobile {
    width: 100% !important;
  }
}
</style>
