<template>
  <main class="l-main">
    <Breadcrumbs />
    <div>
      <img
        :src="eyecatch.url"
        class="p-column__eyecatch"
        alt=""
        width="100"
        height="200"
      />
      <span class="p-column__category" :data-category="`category`">{{
        setDataCategory(category)
      }}</span>
      <h2 class="c-subtitle u-mgt-10">{{ title }}</h2>
      <hr />
    </div>
    <div v-html="text"></div>
    <NuxtLink
      to="/museum"
      class="c-button c-button--secondary u-mgt-80 u-mgb-80"
      >＜&nbsp;博物館・公園一覧へ戻る</NuxtLink
    >
  </main>
</template>

<script>
export default {
  async asyncData({ $axios, params, error }) {
    try {
      const data = await $axios.$get(`column/${params.slug}`)
      return data
    } catch (e) {
      error(e)
    }
  },
  methods: {
    setDataCategory(category) {
      let categoryName
      switch (category) {
        case 'お知らせ':
          category = 'news'
          break
        case 'ご注意':
          category = 'announce'
          break
      }
      return categoryName
    },
  },
}
</script>
