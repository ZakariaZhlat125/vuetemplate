<template>
  <div class="nav-top">
    <div class="row align-items-center">
      <div
        class="col-lg-3 col-md-3 col-sm-3 col-4 logo mb-2 d-flex justify-content-center"
      >
        <NuxtLink to="/">
          <div class="image" style="padding-inline-start: 10px">
            <img
              src="/images/logo.png"
              style="width: 100%; height: 100%"
              alt=""
              class="navbar-logo"
            />
          </div>
        </NuxtLink>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-3 mb-2 d-none d-md-block">
        <div class="search">
          <div class="search-box">
            <input
              type="text"
              class="input-search"
              :placeholder="
                $i18n.locale == 'ar'
                  ? 'ابحث بجميع المنتجات'
                  : 'Search For Products'
              "
            />
            <button class="btn-search">
              <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
            </button>
          </div>
        </div>
      </div>
      <div
        class="col-lg-3 col-md-3 col-sm-3 col-8 d-flex justify-content-between"
      >
        <div class="d-flex align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <g clip-path="url(#clip0_10122_52416)">
              <path
                d="M4.81815 18.5599C5.37836 18.5599 5.8325 18.1058 5.8325 17.5456C5.8325 16.9854 5.37836 16.5313 4.81815 16.5313C4.25794 16.5313 3.8038 16.9854 3.8038 17.5456C3.8038 18.1058 4.25794 18.5599 4.81815 18.5599Z"
                fill="#333333"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.7132 0.562359C12.463 -0.187453 13.6787 -0.187453 14.4285 0.562359L17.5537 3.68753C18.643 4.77688 18.643 6.54306 17.5537 7.63241L16.6571 8.52898L23.471 15.3429L24.3676 14.4463C25.4569 13.357 27.2231 13.357 28.3125 14.4463L31.4376 17.5715C32.1875 18.3213 32.1875 19.537 31.4376 20.2868C28.6711 23.0534 24.3264 23.28 21.3013 20.9666V25.1532C21.3013 26.6938 20.0524 27.9427 18.5118 27.9427H17.6006L17.1862 29.8074C16.8604 31.2736 14.9743 31.6977 14.0522 30.5121L12.0537 27.9427H2.78946C1.24888 27.9427 0 26.6938 0 25.1532V15.5169C0 13.9763 1.24888 12.7275 2.78946 12.7275H12.9658L11.7132 11.4748C8.69982 8.46144 8.69981 3.57576 11.7132 0.562359ZM14.4873 14.249L19.7798 19.5414V25.1532C19.7798 25.8535 19.2121 26.4211 18.5118 26.4211H16.9903C16.6338 26.4211 16.325 26.6688 16.2477 27.0169L15.7009 29.4773C15.6544 29.6868 15.3849 29.7474 15.2532 29.578L13.0263 26.7148C12.8821 26.5295 12.6605 26.4211 12.4258 26.4211H2.78946C2.08919 26.4211 1.52152 25.8535 1.52152 25.1532V15.5169C1.52152 14.8166 2.08919 14.249 2.78946 14.249H14.4873ZM13.3526 1.63824C13.197 1.48262 12.9447 1.48262 12.7891 1.63824C10.3699 4.05744 10.3699 7.97975 12.7891 10.399L21.601 19.2109C24.0202 21.6301 27.9426 21.6301 30.3618 19.2109C30.5174 19.0553 30.5174 18.803 30.3618 18.6474L27.2366 15.5222C26.7414 15.027 25.9386 15.027 25.4435 15.5222L24.009 16.9567C23.7119 17.2538 23.2302 17.2538 22.9331 16.9567L15.0433 9.06692C14.7462 8.76982 14.7462 8.28814 15.0433 7.99104L16.4778 6.55654C16.973 6.06138 16.973 5.25857 16.4778 4.76341L13.3526 1.63824Z"
                fill="#333333"
              ></path>
            </g>
            <defs>
              <clipPath id="svg-5241">
                <rect width="32" height="32" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
          <div style="margin-inline-start: 20px">
            <strong>24 Support</strong>
            <div>
              <span style="color: #1c61e7; font-size: 14px"
                >+971 52 655 5565</span
              >
            </div>
          </div>
        </div>
        <div class="d-flex align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <g clip-path="url(#clip0_10122_52282)">
              <path
                d="M22.5876 2.23814C22.7504 1.8519 22.5692 1.40686 22.1829 1.24413C20.9104 0.707956 19.4943 0.193345 17.9911 0.0059111C17.5752 -0.0459477 17.196 0.24917 17.1441 0.665075C17.0923 1.08098 17.3874 1.46018 17.8033 1.51204C19.0967 1.67331 20.3593 2.12275 21.5936 2.64283C21.9798 2.80557 22.4249 2.62438 22.5876 2.23814Z"
                fill="#333333"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.75493 16C5.75493 21.6495 10.3505 26.2451 16 26.2451C21.6494 26.2451 26.245 21.6495 26.245 16C26.245 10.3571 21.656 5.69176 16 5.69176C10.344 5.69176 5.75493 10.3571 5.75493 16ZM13.2516 7.65981C10.0149 8.75219 7.60987 11.7144 7.30536 15.2411H11.4582C11.5317 12.8434 11.9507 10.6479 12.6114 8.98107C12.8009 8.503 13.0143 8.05814 13.2516 7.65981ZM12.9767 15.2411C13.0499 12.9997 13.4434 11.001 14.0224 9.54032C14.345 8.72625 14.7104 8.11707 15.0776 7.72406C15.4438 7.33203 15.756 7.20955 16 7.20955C16.2439 7.20955 16.5562 7.33203 16.9224 7.72406C17.2895 8.11707 17.6549 8.72625 17.9775 9.54032C18.5565 11.001 18.95 12.9997 19.0232 15.2411H12.9767ZM11.4582 16.7589H7.30543C7.60979 20.2738 10.0078 23.2002 13.242 24.2806C13.0088 23.8908 12.7989 23.4563 12.6123 22.9896C11.9508 21.336 11.5317 19.1541 11.4582 16.7589ZM18.7579 24.2806C21.9921 23.2002 24.3901 20.2738 24.6945 16.7589H20.5417C20.4682 19.1541 20.0491 21.336 19.3877 22.9896C19.201 23.4563 18.9911 23.8908 18.7579 24.2806ZM19.0232 16.7589C18.95 18.9973 18.5565 20.9807 17.9784 22.4259C17.6563 23.2313 17.2916 23.8322 16.9256 24.2193C16.561 24.6048 16.248 24.7273 16 24.7273C15.752 24.7273 15.4389 24.6048 15.0744 24.2193C14.7083 23.8322 14.3437 23.2313 14.0215 22.4259C13.4434 20.9807 13.05 18.9973 12.9768 16.7589H19.0232ZM20.5417 15.2411H24.6946C24.3901 11.7144 21.985 8.75219 18.7483 7.65981C18.9857 8.05815 19.1991 8.503 19.3885 8.98107C20.0492 10.6479 20.4683 12.8434 20.5417 15.2411Z"
                fill="#333333"
              ></path>
              <path
                d="M28.6977 6.30483C28.9512 6.63855 28.8862 7.11464 28.5525 7.36821C28.2188 7.62177 27.7427 7.5568 27.4891 7.22307C26.694 6.17652 25.7603 5.24285 24.7137 4.44769C24.38 4.19413 24.315 3.71804 24.5685 3.38431C24.8221 3.05058 25.2982 2.98559 25.6319 3.23915C26.788 4.11749 27.8193 5.14881 28.6977 6.30483Z"
                fill="#333333"
              ></path>
              <path
                d="M31.3348 14.8558C31.7507 14.804 32.0459 14.4248 31.994 14.0089C31.8055 12.4962 31.221 11.008 30.6926 9.75378C30.5299 9.36754 30.0849 9.18635 29.6986 9.34908C29.3124 9.51181 29.1312 9.95684 29.2939 10.3431C29.8218 11.5959 30.3279 12.9127 30.4879 14.1966C30.5397 14.6125 30.9189 14.9077 31.3348 14.8558Z"
                fill="#333333"
              ></path>
              <path
                d="M16 32C7.19837 32 0 24.8016 0 16C0 11.7905 1.67904 7.91831 4.35243 5.0593H3.53315C3.11403 5.0593 2.77426 4.71953 2.77426 4.3004C2.77426 3.88128 3.11403 3.54151 3.53315 3.54151H6.26086C6.67998 3.54151 7.01975 3.88128 7.01975 4.3004V6.93888C7.01975 7.358 6.67998 7.69777 6.26086 7.69777C5.84173 7.69777 5.50197 7.358 5.50197 6.93888V6.05225C3.05332 8.64925 1.51779 12.1757 1.51779 16C1.51779 23.9634 8.03662 30.4822 16 30.4822C23.3591 30.4822 29.602 24.9085 30.488 17.8034C30.5398 17.3875 30.919 17.0923 31.3349 17.1442C31.7508 17.1961 32.0459 17.5753 31.9941 17.9912C31.0128 25.8601 24.1208 32 16 32Z"
                fill="#333333"
              ></path>
              <path
                d="M9.41225 2.23813C9.57498 2.62437 10.02 2.80556 10.4063 2.64283C11.6407 2.12274 12.9031 1.67331 14.1966 1.51204C14.6125 1.46018 14.9076 1.08098 14.8557 0.665075C14.8039 0.24917 14.4247 -0.0459477 14.0088 0.0059111C12.5056 0.193345 11.0895 0.70796 9.81695 1.24412C9.43071 1.40685 9.24951 1.85189 9.41225 2.23813Z"
                fill="#333333"
              ></path>
            </g>
            <defs>
              <clipPath id="svg-7847">
                <rect width="32" height="32" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
          <div style="margin-inline-start: 20px">
            <strong>UAE</strong>
            <div>
              <span style="color: #1c61e7; font-size: 14px">Free Shipping</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="nav-top-mob">
    <div class="row">
      <div
        class="col-4 d-flex align-items-center justify-content-start"
        @click="show = true"
      >
        <font-awesome-icon
          :icon="['fas', 'bars']"
          size="lg"
          style="cursor: pointer"
        />
      </div>
      <div class="col-4 d-flex align-items-center justify-content-center">
        <NuxtLink to="/">
          <div class="image">
            <img
              src="/images/logo.png"
              style="max-width: 140px"
              alt=""
              class="navbar-logo"
            />
          </div>
        </NuxtLink>
      </div>
      <div
        class="col-4 d-flex align-items-center justify-content-end"
        @click="showLogin"
      >
        <font-awesome-icon
          :icon="['far', 'user']"
          size="lg"
          style="cursor: pointer"
        />
      </div>
    </div>
  </div>
  <div class="overlay" v-if="show" @click="show = false"></div>
  <div class="menu-bottom" :class="[show ? 'active' : '']">
    <div class="tabs-shop">
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            class="nav-link active ps-0"
            id="nav-Categories-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-Categories"
            type="button"
            role="tab"
            aria-controls="nav-Categories"
            aria-selected="true"
          >
            <span class="rounded px-5">CATEGORIES</span>
          </button>
          <button
            class="nav-link"
            id="nav-Menu-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-Menu"
            type="button"
            role="tab"
            aria-controls="nav-Menu"
            aria-selected="false"
          >
            <span class="rounded px-5">MENU</span>
          </button>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="nav-Categories"
          role="tabpanel"
          aria-labelledby="nav-Categories-tab"
        >
          <ul class="Categories">
            <li>
              <nuxt-link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 3C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3H4ZM4 5H20V16H4V5Z"
                    fill="black"
                  />
                  <path
                    d="M1 19C0.447715 19 0 19.4477 0 20C0 20.5523 0.447715 21 1 21H23C23.5523 21 24 20.5523 24 20C24 19.4477 23.5523 19 23 19H1Z"
                    fill="black"
                  />
                </svg>
                <span class="active">Accessories of audio</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M13.6665 6C13.6665 5.44772 13.2188 5 12.6665 5C12.1142 5 11.6665 5.44772 11.6665 6V8C11.6665 8.55228 12.1142 9 12.6665 9C13.2188 9 13.6665 8.55228 13.6665 8V6Z"
                    fill="black"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.6665 1C8.80051 1 5.6665 4.13401 5.6665 8V16C5.6665 19.866 8.80051 23 12.6665 23C16.5325 23 19.6665 19.866 19.6665 16V8C19.6665 4.13401 16.5325 1 12.6665 1ZM7.6665 8C7.6665 5.23858 9.90508 3 12.6665 3C15.4279 3 17.6665 5.23858 17.6665 8V16C17.6665 18.7614 15.4279 21 12.6665 21C9.90508 21 7.6665 18.7614 7.6665 16V8Z"
                    fill="black"
                  />
                </svg>
                <span class="active">Recording equipment</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M9.3335 2C9.3335 1.44772 8.88578 1 8.3335 1C7.78121 1 7.3335 1.44772 7.3335 2V3C7.3335 3.55228 7.78121 4 8.3335 4C8.88578 4 9.3335 3.55228 9.3335 3V2Z"
                    fill="black"
                  />
                  <path
                    d="M13.3335 2C13.3335 1.44772 12.8858 1 12.3335 1C11.7812 1 11.3335 1.44772 11.3335 2V3C11.3335 3.55228 11.7812 4 12.3335 4C12.8858 4 13.3335 3.55228 13.3335 3V2Z"
                    fill="black"
                  />
                  <path
                    d="M17.3335 2C17.3335 1.44772 16.8858 1 16.3335 1C15.7812 1 15.3335 1.44772 15.3335 2V3C15.3335 3.55228 15.7812 4 16.3335 4C16.8858 4 17.3335 3.55228 17.3335 3V2Z"
                    fill="black"
                  />
                  <path
                    d="M2.3335 7C1.78121 7 1.3335 7.44772 1.3335 8C1.3335 8.55228 1.78121 9 2.3335 9H3.3335C3.88578 9 4.3335 8.55228 4.3335 8C4.3335 7.44772 3.88578 7 3.3335 7H2.3335Z"
                    fill="black"
                  />
                  <path
                    d="M21.3335 7C20.7812 7 20.3335 7.44772 20.3335 8C20.3335 8.55228 20.7812 9 21.3335 9H22.3335C22.8858 9 23.3335 8.55228 23.3335 8C23.3335 7.44772 22.8858 7 22.3335 7H21.3335Z"
                    fill="black"
                  />
                  <path
                    d="M2.3335 11C1.78121 11 1.3335 11.4477 1.3335 12C1.3335 12.5523 1.78121 13 2.3335 13H3.3335C3.88578 13 4.3335 12.5523 4.3335 12C4.3335 11.4477 3.88578 11 3.3335 11H2.3335Z"
                    fill="black"
                  />
                  <path
                    d="M21.3335 11C20.7812 11 20.3335 11.4477 20.3335 12C20.3335 12.5523 20.7812 13 21.3335 13H22.3335C22.8858 13 23.3335 12.5523 23.3335 12C23.3335 11.4477 22.8858 11 22.3335 11H21.3335Z"
                    fill="black"
                  />
                  <path
                    d="M2.3335 15C1.78121 15 1.3335 15.4477 1.3335 16C1.3335 16.5523 1.78121 17 2.3335 17H3.3335C3.88578 17 4.3335 16.5523 4.3335 16C4.3335 15.4477 3.88578 15 3.3335 15H2.3335Z"
                    fill="black"
                  />
                  <path
                    d="M21.3335 15C20.7812 15 20.3335 15.4477 20.3335 16C20.3335 16.5523 20.7812 17 21.3335 17H22.3335C22.8858 17 23.3335 16.5523 23.3335 16C23.3335 15.4477 22.8858 15 22.3335 15H21.3335Z"
                    fill="black"
                  />
                  <path
                    d="M9.3335 21C9.3335 20.4477 8.88578 20 8.3335 20C7.78121 20 7.3335 20.4477 7.3335 21V22C7.3335 22.5523 7.78121 23 8.3335 23C8.88578 23 9.3335 22.5523 9.3335 22V21Z"
                    fill="black"
                  />
                  <path
                    d="M13.3335 21C13.3335 20.4477 12.8858 20 12.3335 20C11.7812 20 11.3335 20.4477 11.3335 21V22C11.3335 22.5523 11.7812 23 12.3335 23C12.8858 23 13.3335 22.5523 13.3335 22V21Z"
                    fill="black"
                  />
                  <path
                    d="M17.3335 21C17.3335 20.4477 16.8858 20 16.3335 20C15.7812 20 15.3335 20.4477 15.3335 21V22C15.3335 22.5523 15.7812 23 16.3335 23C16.8858 23 17.3335 22.5523 17.3335 22V21Z"
                    fill="black"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.3335 5C6.22893 5 5.3335 5.89543 5.3335 7V17C5.3335 18.1046 6.22893 19 7.3335 19H17.3335C18.4381 19 19.3335 18.1046 19.3335 17V7C19.3335 5.89543 18.4381 5 17.3335 5H7.3335ZM7.3335 7H17.3335V17H7.3335V7Z"
                    fill="black"
                  />
                </svg>
                <span class="active">Visual optics</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.3335 13C8.3335 10.2386 10.5721 8 13.3335 8C16.0949 8 18.3335 10.2386 18.3335 13C18.3335 15.7614 16.0949 18 13.3335 18C10.5721 18 8.3335 15.7614 8.3335 13ZM13.3335 10C11.6766 10 10.3335 11.3431 10.3335 13C10.3335 14.6569 11.6766 16 13.3335 16C14.9904 16 16.3335 14.6569 16.3335 13C16.3335 11.3431 14.9904 10 13.3335 10Z"
                    fill="black"
                  />
                  <path
                    d="M6.3335 11C6.88578 11 7.3335 10.5523 7.3335 10C7.3335 9.44772 6.88578 9 6.3335 9C5.78121 9 5.3335 9.44772 5.3335 10C5.3335 10.5523 5.78121 11 6.3335 11Z"
                    fill="black"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.90771 4.3359C9.46411 3.5013 10.4008 3 11.4039 3H15.2631C16.2662 3 17.2029 3.5013 17.7593 4.3359L18.5718 5.5547C18.7573 5.8329 19.0695 6 19.4039 6H21.3335C22.4381 6 23.3335 6.89543 23.3335 8V19C23.3335 20.1046 22.4381 21 21.3335 21H3.3335C2.22893 21 1.3335 20.1046 1.3335 19V8C1.3335 6.89543 2.22893 6 3.3335 6H7.26313C7.59748 6 7.90971 5.8329 8.09518 5.5547L8.90771 4.3359ZM11.4039 5C11.0695 5 10.7573 5.1671 10.5718 5.4453L9.75928 6.6641C9.20288 7.4987 8.26619 8 7.26313 8H3.3335V19H21.3335V8H19.4039C18.4008 8 17.4641 7.4987 16.9077 6.6641L16.0952 5.4453C15.9097 5.1671 15.5975 5 15.2631 5H11.4039Z"
                    fill="black"
                  />
                </svg>
                <span class="active">Accessories of video</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 4C6.44772 4 6 4.44772 6 5C6 5.55228 6.44772 6 7 6H11C11.5523 6 12 5.55228 12 5C12 4.44772 11.5523 4 11 4H7Z"
                    fill="black"
                  />
                  <path
                    d="M16 4C15.4477 4 15 4.44772 15 5C15 5.55228 15.4477 6 16 6H17C17.5523 6 18 5.55228 18 5C18 4.44772 17.5523 4 17 4H16Z"
                    fill="black"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 8C8.68629 8 6 10.6863 6 14C6 17.3137 8.68629 20 12 20C15.3137 20 18 17.3137 18 14C18 10.6863 15.3137 8 12 8ZM8 14C8 11.7909 9.79086 10 12 10C14.2091 10 16 11.7909 16 14C16 16.2091 14.2091 18 12 18C9.79086 18 8 16.2091 8 14Z"
                    fill="black"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 1C3.89543 1 3 1.89543 3 3V21C3 22.1046 3.89543 23 5 23H19C20.1046 23 21 22.1046 21 21V3C21 1.89543 20.1046 1 19 1H5ZM5 3L19 3V21H5V3Z"
                    fill="black"
                  />
                </svg>
                <span class="active">Cameras</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div
          class="tab-pane fade"
          id="nav-Menu"
          role="tabpanel"
          aria-labelledby="nav-Menu-tab"
        >
          <ul class="Categories">
            <li>
              <nuxt-link>
                <span class="active">Promotions</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">
                <span class="active">Home</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact">
                <span class="active">Our Contacts</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/delivery-return">
                <span class="active">Delivery & Return</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link>
                <font-awesome-icon :icon="['fas', 'arrows-turn-right']" />
                <span class="active">Wishlist</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link>
                <font-awesome-icon :icon="['far', 'heart']" />
                <span class="active">Compare</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const show = ref(false);
const lang = useLang().value;
const currency = useCurrency().value;
const cart = useCart();
const isAuth = useAuth().value;
const showLogin = () => {
  useShowLogin().value.show = true;
};
const logout = async () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userInfo");
  localStorage.removeItem("accountType");
  if (localStorage.getItem("cart")) {
    localStorage.removeItem("cart");
    useCart().value.items = new Array();
    useCart().value.totalPrice = 0;
    useCart().value.totalQty = 0;
  }
  useAuth().value.isAuthenticated = false;
  await navigateTo("/");
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/scss/theme/variables";
@import "~/assets/styles/scss/theme/mixin";

.nav-top {
  padding: 10px;
  background-color: #fff;
  @media (max-width: 1025.98px) {
    display: none;
  }
  .image {
    width: 200px;
    @media (max-width: 500.98px) {
      width: 150px;
    }
  }
  .search {
    background-color: transparent;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px;
    color: #93999a;
    border: 1px solid #ddd;
    border-radius: 30px;
    span {
      border-inline-end: 1px solid #93999a;
      padding: 0 20px;
    }
    .search-box {
      width: fit-content;
      height: fit-content;
      position: relative;
      display: flex;
      flex: 1;
      .input-search {
        height: 40px;
        width: 100%;
        border-style: none;
        padding: 10px;
        font-size: 18px;
        letter-spacing: 2px;
        outline: none;
        transition: all 0.5s ease-in-out;
        &::placeholder {
          font-size: 14px;
          letter-spacing: 2px;
          font-weight: 500;
          color: #93999a;
        }
        &:focus {
          width: 100;
          border-radius: 0px;
          background-color: transparent;
          border-bottom: 1px solid rgba(255, 255, 255, 0.5);
          transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
        }
      }
      .btn-search {
        width: 45px;
        height: 40px;
        border-style: none;
        font-size: 18px;
        font-weight: bold;
        outline: none;
        cursor: pointer;
        border-radius: 50%;
        color: #fff;
        background-color: #45b2ef;
        pointer-events: painted;
        &:focus ~ .input-search {
          width: 100%;
          border-radius: 0px;
          background-color: transparent;
          border-bottom: 1px solid rgba(255, 255, 255, 0.5);
          transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
        }
      }
    }
  }
}
.nav-top-mob {
  padding: 0 20px;
  display: none;
  @media (max-width: 1025.98px) {
    display: block;
  }
}
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.212);
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}
.menu-bottom {
  padding: 0;
  position: fixed;
  width: 300px;
  height: 100%;
  top: 0;
  bottom: 0;
  left: -100%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(119, 119, 119, 0.12);
  background-color: #fff;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  &.active {
    left: 0;
  }
  .nav-link {
    background-color: #e9e9e9 !important;
    width: 50%;
    border-radius: 0;
    padding: 15px 0;
    color: #909090;
    font-size: 14px;
    border: none;
    border-bottom: 2px solid #ddd;
    transition: $transition;
    &:hover {
      border-bottom: 2px solid $blue;
    }
    &.active {
      color: #333333 !important;
      border-bottom: 2px solid $blue;
    }
  }
  .Categories-btn {
    display: flex;
    align-items: center;
    border-radius: 42px;
    padding: 0 5px;
    background-color: #45b2ef;
    transition: $transition;
    cursor: pointer;
    color: #fff;
    padding: 0 13px;
    height: 42px;
    .icon {
      background-color: #45b2ef;
      margin-inline-end: 10px;
      font-size: 19px;
    }
  }
  .Categories {
    padding: 10px 20px;
    li {
      height: 45px;
      display: flex;
      align-items: center;
      cursor: pointer;
      &:hover {
        span {
          color: $blue;
        }
      }
      a {
        display: flex;
        align-items: center;
        svg {
          margin-inline-end: 10px;
        }
        span {
          display: none;
          transition: $transition;
          &.active {
            display: inline-block;
          }
        }
      }
    }
  }
}
</style>
