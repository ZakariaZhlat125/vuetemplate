// export const useReauthorization = () => {
//   const { apiBase, api } = useRuntimeConfig()
//   // const mainToken = useMainToken().value
//   // const refreshMainToken = useRefreshMainToken().value

//   const reAuthorize = async () => useFetch(`${api.AuthLoginApi}`, {
//     baseURL: apiBase,
//     method: 'POST',
//     body: {
//       email: "admin@example.com",
//       password: "123Pa$$word!",
//     },
    
//     onResponse({ request, response, options }) {
//       // Process the response data
//       if (response._data.successed) {
//         localStorage.removeItem('mainToken')
//         // localStorage.removeItem('refreshMainToken')
//         localStorage.setItem('mainToken', response._data.token)
//         // localStorage.setItem('refreshMainToken', response._data.refreshToken);
//         useMainToken().value = response._data.token
//         // useRefreshMainToken().value = response._data.refreshToken
//         console.log("********************* done *********************")
//       }
//       return response._data
//     }
//   })

//   return {
//     reAuthorize
//   }
// }
export const useReauthorization = () => {
  const { apiBase, api } = useRuntimeConfig();

  const reAuthorize = async () => {
    const data = await $fetch(`${api.AuthLoginApi}`, {
      baseURL: apiBase,
      method: "POST",
      body: {
        email: "admin@example.com",
        password: "123Pa$$word!",
      },
    });
    if (data.data.token) {
      await localStorage.removeItem("mainToken");
      localStorage.setItem("mainToken", data.data.token);
      useMainToken().value = data.data.token;
    }
    if (!data.data.token) {
      $awn.alert("Server Error, Please Try Again Later", {
        durations: { global: 5000 },
      });
    }
  };

  return {
    reAuthorize,
  };
};