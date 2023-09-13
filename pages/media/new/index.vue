<template>
  <div>
    <PagesNews v-if="news" :news="news" />

    <div v-if="!lastPage" @click="loadMore" class="text-center py-4 load-more">
      <i class="fa fa-refresh fa-3x" id="refresh_icon" aria-hidden="true"></i>
      <h5>Load More...</h5>
    </div>

  </div>
</template>

<script setup>
    const { api , apiBase } = useRuntimeConfig()
    const news = ref([])
    const page = ref(0);
    const productNumberPerPage = ref(1);
    const pending = ref(false);
    const lastPage = ref(false);

  
    const { data, error, pending: dataPending, execute } = await useAsyncData(
      'news',
      () => $fetch(`${api.BlocksApi}`, {
        method: 'GET',
        baseURL: `${apiBase}`,
        params: {categoryId: 4, pageNumber: page.value, pageSize: productNumberPerPage.value},
        headers: {
          'Authorization': `Bearer ${useMainToken().value}`
        },

      } ), {
        watch: [page, productNumberPerPage],
      }
    );

 

  if (error.value && error.value.statusCode == 401) {
    await useReauthorization().reAuthorize()
  }

  const appendNews = ( newNews ) => {
    // console.log('newNews', newNews.nextPage);
    if (!newNews.nextPage) lastPage.value = true
    newNews.items.forEach( ( item ) => {
      news.value.push( item );
    });
    // console.log('news  :', news.value)
  }

  const loadMore = () => {
    const refreshElement = document.getElementById('refresh_icon')
    // productNumberPerPage.value = productNumberPerPage.value + 8
    // productNumberPerPage.value = productNumberPerPage.value + 8
    page.value = page.value + 1
    refreshElement.classList.add('fa-spin');    
  }

  // Life cycle Hook
  onMounted(() => {
    if (data.value) news.value = data.value.items
    else execute()
    // console.log(news.value, news.value.length > 0)
  })
  watch(data, (newData) => appendNews( newData ))
  watch(dataPending, (newDataPending) => {
    pending.value = newDataPending
    if (!pending.value) {
      setTimeout(() => document.getElementById('refresh_icon')?.classList.remove('fa-spin'), 500)
    }
  })
  
</script>