<template>
    <div v-if="data">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 px-5 mb-5 mt-5">
                    <h5 class="page-route text-muted">
                        <NuxtLink to="/" class="text-muted">
                        {{ $i18n.locale == "ar" ? "الرئيسية" : "Home" }}
                        </NuxtLink>
                        /
                        <NuxtLink to="/media/new" class="text-muted">
                        {{ $i18n.locale == "ar" ? "الاخبار" : "News" }}
                        </NuxtLink>
                        /
                        <span class="innerroute">{{ $i18n.locale == "ar" ? data.name : data.englishName }}</span>
                    </h5>
                </div>
                <div class="col-lg-4 col-12">
                    <img v-if="data.image1" :src="data.image1" alt="">
                    <img v-else src="/icons/fav.png" alt="">
                </div>
                <div class="col-lg-8 col-12">
                    <h1 class="innerroute text-center mb-5">{{ $i18n.locale == "ar" ? data.name : data.englishName }}</h1>
                    <p v-html="data.englishDescription1"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { api, apiBase } = useRuntimeConfig()
const { data, error, execute } = await useGetSiteApi().GetById(`${api.BlocksApi}/`, useRoute().params.id)
// console.log('data',data.value)
</script>

<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/variables";
@import "~/assets/styles/scss/theme/mixin";

.innerroute {
    color: $green;
    font-weight: bold;
}
</style>