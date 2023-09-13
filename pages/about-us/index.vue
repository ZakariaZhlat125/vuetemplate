<template>
  <div class="content-wrapper">
    <section class="nav">
      <span>
        <nuxt-link class="link" to="/">Home</nuxt-link> /
        <span
          v-html="
            `${$i18n.locale == 'ar' ? aboutData.name : aboutData.englishName}`
          "
        ></span>
      </span>
    </section>
    <div class="content">
      <article>
        <div
          v-html="
            `${
              $i18n.locale == 'ar'
                ? aboutData.description1
                : aboutData.englishDescription1
            }`
          "
        ></div>
      </article>
      <!-- <div>
        <article>
          <section class="title">
            <h1>S S S Audio-Visual:</h1>
            <p>Your One-Stop Shop for Audio-Visual Equipment and Accessories</p>
          </section>
          <section class="article-content">
            <p>
              S S S Audio-Visual is a recording equipment and accessories
              trading company based in Dubai, United Arab Emirates. We offer a
              wide range of products and services, including:
            </p>
            <ul>
              <li>
                Recording equipment, such as cameras, microphones, and mixers
              </li>
              <li>
                Audio accessories, such as headphones, speakers, and cables
              </li>
              <li>
                Video accessories, such as tripods, memory cards, and filters
              </li>
              <li>Visual optics, such as lenses and telescopes</li>
              <li>Cameras</li>
            </ul>
            <p>
              We are committed to providing our customers with the best possible
              products and services. We offer a one-year warranty on all of our
              products, and we ship within the UAE for free. We also offer a
              14-day return policy.
            </p>
            <p>
              We are a licensed and registered company with the EJARI
              (Electronic Jebel Ali Free Zone Authority) and the E Trader
              (Commercial) License. Our owner, Abdulwaheed Ahmad Rashed Bin
              Shabib, is a UAE national with over 10 years of experience in the
              audio-visual industry.
            </p>
            <p>
              We are proud to be a part of the UAE community, and we are
              committed to providing our customers with the best possible
              shopping experience. We invite you to visit our website or contact
              us today to learn more about our products and services.
            </p>
            <h2>Here are some of the things that make us unique:</h2>
            <ul>
              <li>
                We offer a wide range of products and services, so you can find
                everything you need for your audio-visual needs.
              </li>
              <li>
                We are a licensed and registered company, so you can be sure
                that you are doing business with a legitimate company.
              </li>
              <li>
                We offer a one-year warranty on all of our products, so you can
                be sure that your purchase is protected.
              </li>
              <li>
                We ship within the UAE for free, so you can get your products
                quickly and easily.
              </li>
              <li>
                We offer a 14-day return policy, so you can be sure that you are
                satisfied with your purchase.
              </li>
            </ul>
            <p>
              We are always looking for ways to improve our products and
              services, and we welcome your feedback. If you have any questions
              or suggestions, please do not hesitate to contact us.
            </p>
          </section>
        </article>
      </div> -->
    </div>
  </div>
</template>

<script setup>
const { api, apiBase } = useRuntimeConfig();
const {
  data: aboutData,
  error,
  pending,
  execute,
} = await useFetch(`${api.GetMenuDetail}/1`, {
  baseURL: apiBase,
  headers: {
    Authorization: `Bearer ${useMainToken().value}`,
  },
});
if (error.value && error.value.status == 401) {
  await useReauthorization().reAuthorize();
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/variables";
@import "~/assets/styles/scss/theme/mixin";
.content-wrapper {
  background-color: rgb(246, 246, 246);
  padding-bottom: 120px;
  padding-left: 60px;
  max-width: 90rem;
  margin: 0 auto;
  @media (max-width: 1024px) {
    padding-left: 0;
  }
  .nav {
    background-color: rgb(249, 249, 249);
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
    background-color: rgb(249, 249, 249);
    margin-top: 30px;
    padding: 30px 10px;
    article {
      max-width: 840px;
      margin: 0 auto;
    }
    .title {
      margin-bottom: 25px;
      h1 {
        color: #000;
        font-size: 34px;
        font-weight: 600;
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
        color: #333333;
        font-size: 15px;
      }
    }

    .article-content {
      p,
      ul {
        color: #000000;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      }
      ul {
        list-style-type: disc;
        margin-bottom: 20px;
        padding: 0 15px;
        li {
          &::marker {
            font-size: 24px;
          }
        }
        li {
          margin-bottom: 10px;
        }
      }
      h2 {
        font-weight: 600;
        font-size: 18px;
      }
    }
  }
}
</style>
