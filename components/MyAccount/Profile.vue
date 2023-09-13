<template>
  <section class="profile-section container">
    <div class="row w-100 mx-auto">
      <div class="col-12 mb-3">
        <NuxtLink to="/my-account/edit" class="edit-profile">
          <i class="fa fa-edit"></i>
          {{$t('Edit-Profile')}}
        </NuxtLink>
      </div>
      <div class="col-12 col-sm-6 col-xl-4 mb-4">
        <div class="profile-info p-3">
          <span> {{$t('fullName')}}</span>
          {{ $i18n.locale == "ar" ? user.fullNameAr : user.fullNameEn }}
        </div>
      </div>
      <div class="col-12 col-sm-6 col-xl-4 mb-4">
        <div class="profile-info p-3">
          <span>{{$t('email')}} :</span> 
          {{ user.email }}
        </div>
      </div>
      <div class="col-12 col-sm-6 col-xl-4 mb-4">
        <div class="profile-info p-3">
          <span>{{$t('address')}} :</span> 
          {{ user.address }}
        </div>
      </div>
      <!-- <div class="col-12 col-sm-6 col-xl-4 mb-4">
        <div class="profile-info p-3"><span>birthDate :</span> {{date}}</div>
      </div>
      <div class="col-12 col-sm-6 col-xl-4 mb-4">
        <div class="profile-info p-3"><span>gender :</span> {{user.sex}}</div>
      </div> -->
      <div class="col-12 col-sm-6 col-xl-4 mb-4">
        <div class="profile-info p-3">
          <span>{{$t('phone')}} :</span>
           {{ user.phone }}
        </div>
      </div>
      <div class="col-12 col-sm-6 col-xl-4 mb-4">
        <div class="profile-info p-3">
         <span>{{$t('Country')}} :</span>
           {{ user.country }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const date = ref("");
const licenseIssuarDate = ref("");
const licenseEndData = ref("");
const user = useUserInfo().value;
// date.value =
//   new Date(user.birthDate).getFullYear() +
//   "-" +
//   (new Date(user.birthDate).getMonth() + 1) +
//   "-" +
//   new Date(user.birthDate).getDate();
// licenseIssuarDate.value =
//   new Date(user.licenseIssuarDate).getFullYear() +
//   "-" +
//   (new Date(user.licenseIssuarDate).getMonth() + 1) +
//   "-" +
//   new Date(user.licenseIssuarDate).getDate();
// licenseEndData.value =
//   new Date(user.licenseEndData).getFullYear() +
//   "-" +
//   (new Date(user.licenseEndData).getMonth() + 1) +
//   "-" +
//   new Date(user.licenseEndData).getDate();
</script>

<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/variables";
div {
  color: #000;
}
.edit-profile {
  color: $blue;
  font-size: 1.3rem;
  &:hover {
    color: $green2;
  }
}
.black-light-shadow {
  box-shadow: 0px 0px 45px -7px rgba(51, 51, 51, 0.247);
}
.profile-info {
  span{
  color: $blue;
    
  }
  border-bottom: 1px solid #ddd;
  color: rgb(92, 92, 92);
}
</style>
