import { resolve, dirname } from "node:path";
import { fileURLToPath } from "url";
import VueI18nVitePlugin from "@intlify/unplugin-vue-i18n/vite";
export default defineNuxtConfig({
  modules: [
    "nuxt-swiper",
    "@invictus.codes/nuxt-vuetify",
    "@pinia/nuxt",
  ],
  css: [
    "@/assets/styles/scss/custom.scss",
    "@/assets/styles/scss/animate/animate.min.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
    "awesome-notifications/dist/style.css",
  ],
  app: {
    head: {
      title: "S S S Audio Visual",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Ecommerce Site" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
        },
        {
          rel: "icon",
          href: "/images/fav.png",
          type: "image/x-icon",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js",
        },
      ],
    },
  },
  runtimeConfig: {
    serverApiBase: "https://admin.sssav.net",
    serverApi: {
      AuthLoginApi: "/api/identity/token",
    },
    public: {
      apiBase: "https://admin.sssav.net",
      api: {
        // Auth
        RegisterNewEmail: "/api/identity/user",
        AuthLoginApi: "/api/identity/token",
        AuthRefreshTokenApi: "/api/identity/token/refresh",
        PersonClientsEditProfileApi:"/api/identity/account/UpdateProfile",
        ChangePasswordAdminApi:"/api/identity/account/ChangePassword",
        CompanyClientsApi: "/api/v1/Companies",
        PersonClientsApi: "/api/v1/Persons",
        // Menus
        MenusGetAllApi: "/api/v1/Menus/All",
        GetMenuDetail: "/api/v1/Menus",
        // contactUs
        contactUs: "/api/Pages/1",
        PostContactUS:"/api/v1/ContactUS",
        // ProductCategories
        ProductCategories:"/api/v1/ProductCategories",
        GetAllPagedByParentCategory:"/api/v1/ProductCategories/GetAllPagedByParentCategory",
        // Products & Offers
        AllProducts:"/api/v1/Products",
        GetAllRecentProducts:"/api/v1/Products/GetAllRecentProducts",
        ProductImagesByProductIdApi: "api/v1/ProductImages/GetAllByProduct/",
        ProductOffers:"/api/v1/ProductOffers/GetAllPagedActive",
        OfferApi: "/api/v1/ProductOffers",
        GetAllPagedByCategoryId:"/api/v1/Products/GetAllPagedByCategoryId",
        SpecialOffer:"/api/v1/SpecialOffer/GetAllPaged",
        // Blocks
        Blocks:"/api/Blocks",
        // Countries
        CountriesGetAllApi:"/api/v1/Countries",
        cityIdApi:"/api/v1/Princedoms",
        // orders
        ordersApi:"/api/v1/DeliveryOrders/GetPagedByClient",
        OrdersProductApi:"/api/v1/DeliveryOrderProducts",
        DeliveryOrders:"/api/v1/DeliveryOrders",
        DeliveryOrderProducts:"/api/v1/DeliveryOrderProducts",
        SendEmailOrder:"/api/v1/DeliveryOrders/SendEmailOrder",
        // Account Update Profile
        UpdateProfile:"/api/identity/account/UpdateProfile",
        ChangePassword:"/api/identity/account/ChangePassword"
      },
    },
  },
  vite: {
    plugins: [
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), "./locales/*.json"),
        ],
      }),
    ],
  },
});
