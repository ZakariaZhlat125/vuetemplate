export default defineNuxtPlugin(async (nuxtApp) => {
  const { apiBase, api, serverApiBase, serverApi } = useRuntimeConfig();
  const { $awn } = useNuxtApp();

  // if (typeof window !== 'undefined') {
  if (process.client) {
    // Get Main Site Token
    const mainToken = localStorage.getItem("mainToken");
    // Store Main Site Token
    useMainToken().value = mainToken;
    // Get Refresh Token for Main Token
    const refreshMainToken = localStorage.getItem("refreshMainToken");
    // Store Refresh Token for Main Token In State
    useRefreshMainToken().value = refreshMainToken;
    // Get User Token
    const token = localStorage.getItem("token");
    // Get User Info
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    // make global isAuthenticated state true
    useAuth().value.isAuthenticated = token ? true : false;
    // store Token in the store
    useToken().value = token;
    // store userinfo in the store
    useUserInfo().value = userInfo;
    // get account type from localstorage
    const accountType = localStorage.getItem("accountType");
    // Store account type in store
    useAccountType().value = accountType;
    // Store Main Menu In localstorage
    const shoppingCart = localStorage.getItem("cart");
    useCart().value = shoppingCart ? JSON.parse(shoppingCart) : useCart().value;
    // Menus
    // const mainMenu = localStorage.getItem("mainMenu")
    // useMenus().value = mainMenu ? JSON.parse(mainMenu) : null

    // Get Main Site Token
    if (!mainToken) {
      const data = await $fetch(`${api.AuthLoginApi}`, {
        baseURL: apiBase,
        method: "POST",
        body: {
          email: "Email",
          password: "password",
        },
      });
      // Store token if there is not any error
      if (data.data.token) {
        localStorage.setItem("mainToken", data.data.token);
        localStorage.setItem("refreshMainToken", data.data.refreshToken);
        useMainToken().value = data.data.token;
        useRefreshMainToken().value = data.data.refreshToken;
      }
      if (!data.data.token) {
        $awn.alert("Server Error, Please Try Again Later", {
          durations: { global: 5000 },
        });
      }
    }

    if (!token) {
      useAuth().value.isAuthenticated = false;
    }
  }
});
