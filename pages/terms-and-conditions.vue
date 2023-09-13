<template>
  <div class="content-wrapper">
    <section class="nav">
      <span>
        <nuxt-link class="link" to="/">Home</nuxt-link> /
        <span>Terms & Conditions</span>
      </span>
    </section>
    <div class="content">
      <div class="container">
        <article>
          <section class="title">
            <h1
              v-html="`${$i18n.locale == 'ar' ? data.name : data.englishName}`"
            ></h1>
          </section>
          <section class="article-content">
            <p
              v-html="
                `${
                  $i18n.locale == 'ar'
                    ? data.description1
                    : data.englishDescription1
                }`
              "
            ></p>
          </section>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
// GetMenuDetail
console.log(useMainToken().value);
const { api, apiBase, GetMenuDetail } = useRuntimeConfig();
const { data, error, pending, execute } = await useFetch(
  `${api.GetMenuDetail}/4`,
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
@import "~/assets/styles/scss/theme/variables";
@import "~/assets/styles/scss/theme/mixin";
.content-wrapper {
  border-top: 1px dashed black;
  background-color: rgb(246, 246, 246);
  padding-bottom: 90px;
  margin-left: 45px;
  .nav {
    // background-color: rgb(249, 249, 249);
    padding: 10px 20px;
    font-size: 14px;
    .link {
      color: rgba(128, 128, 128, 0.5);
      transition: 0.3s;
      &:hover {
        color: #000;
      }
    }
  }

  .content {
    background-color: #7777770a;
    margin-top: 30px;
    padding: 30px 0;
    .title {
      margin-bottom: 25px;
      display: flex;
      flex-direction: column;
      h1 {
        color: #444;
        font-size: 36px;
        margin: auto;
        padding-bottom: 1rem;
        @include sm-mobile {
          font-size: 22px;
        }
        @include medium {
          font-size: 24px;
        }
        @include tablet {
          font-size: 24px;
        }
      }
      p {
        color: #444444;
        font-size: 16px;
      }
    }
    // .article-content {
    //   p,
    //   ul {
    //     color: #444;
    //     font-size: 16px;
    //     font-weight: 400;
    //     line-height: 24px;
    //   }
    //   p {
    //     strong {
    //       color: #444;
    //       font-weight: 500;
    //       font-size: 18px;
    //       line-height: 36px;
    //     }
    //   }
    //   ul {
    //     list-style-type: disc;
    //     margin-bottom: 20px;
    //     padding: 0 15px;
    //     li {
    //       margin-bottom: 10px;
    //       span {
    //         font-size: 18px !important;
    //         font-weight: 500;
    //       }
    //     }
    //   }
    //   h2 {
    //     font-weight: 600;
    //     font-size: 18px;
    //   }
    // }
  }
}

@media (max-width: 767px) {
  .content-wrapper {
    margin-left: 0;
    }
  .nav {
    display: none;
  }
}
</style>
