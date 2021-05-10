<template>
  <main class="l-main">
    <Breadcrumbs :directories="directories" />
    <div>
      <img
        :src="eyecatch.url"
        class="p-column__eyecatch"
        alt=""
        width="100"
        height="200"
      />
      <span class="p-column__category" :data-category="category[0]">{{
        $setColumnCategory(category[0])
      }}</span>
      <h2 class="c-subtitle u-mgt-10">{{ title }}</h2>
      <hr />
    </div>
    <div v-html="text"></div>
    <NuxtLink
      to="/column"
      class="c-button c-button--secondary u-mgt-80 u-mgb-80"
      >＜&nbsp;コラム一覧へ戻る</NuxtLink
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
  data() {
    return {
      directories: [
        {
          name: 'コラム一覧',
          path: '/column',
        },
        {
          name: '',
          path: `/column/${this.$route.params.slug}`,
        },
      ],
    }
  },
  async fetch() {
    this.directories[1].name = await this.title
  },
  head() {
    return {
      title: `${this.title}`,
    }
  },
}
</script>
