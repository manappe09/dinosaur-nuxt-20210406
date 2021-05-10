<template>
  <main class="l-main">
    <Breadcrumbs :directories="directories" />
    <div>
      <img
        class="p-museum__eyecatch"
        :src="eyecatch.url"
        alt=""
        width="100"
        height="200"
      />
      <span class="p-museum__area" :data-area="area">茨城県</span>
      <span class="p-museum__category" :data-category="category[0]">公園</span>
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
      const data = await $axios.$get(`museum/${params.slug}`)
      return data
    } catch (e) {
      error(e)
    }
  },
  data() {
    return {
      directories: [
        {
          name: '博物館・公園一覧',
          path: '/museum',
        },
        {
          name: '',
          path: `/museum/${this.$route.params.slug}`,
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
