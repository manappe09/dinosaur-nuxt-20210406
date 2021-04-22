<template>
  <main class="l-main">
    <Breadcrumbs />
    <span class="p-news__category" :data-category="category">{{
      setDataCategory(category)
    }}</span>
    <span class="p-news__date">{{ createdAt }}</span>
    <h2 class="c-subtitle u-mgt-10">{{ title }}</h2>
    <hr />
    <p v-html="text01"></p>
    <NuxtLink to="/news" class="c-button c-button--secondary u-mgt-40"
      >お知らせ一覧へ戻る</NuxtLink
    >
  </main>
</template>

<script>
export default {
  async asyncData({ $axios, params, error }) {
    try {
      const data = await $axios.$get(`news/${params.slug}`)
      return data
    } catch (e) {
      error(e)
    }
  },
  methods: {
    setDataCategory(category) {
      let categoryName
      switch (category) {
        case 'news':
          category = 'お知らせ'
          break
        case 'announce':
          category = 'ご注意'
          break
      }
      return categoryName
    },
  },
}
</script>
