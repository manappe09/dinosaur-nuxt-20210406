<template>
  <main class="l-main">
    <Breadcrumbs />
    <h2 class="c-title c-title--accent u-align-c">お知らせ一覧</h2>
    <ul class="p-news">
      <li
        v-for="content in contents"
        :key="content.id"
        class="p-news__item c-listitem"
      >
        <span class="p-news__date">{{ content.createdAt }}</span>
        <span class="p-news__category" :data-category="dataCategory(content)">{{
          content.category[0]
        }}</span>
        <NuxtLink :to="`/news/${content.id}`"
          ><span class="p-news__link">{{ content.title }}</span></NuxtLink
        >
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const data = await $axios.$get('news')
    return data
  },
  mounted() {
    // APIで取得したデータがdataとマージされ下記に格納される
    console.log(this.contents)
  },
  methods: {
    dataCategory(content) {
      let category
      // この辺はデータの構造を見ながら
      switch (content.category[0]) {
        case 'お知らせ':
          category = 'news'
          break
        case 'ご注意':
          category = 'announce'
          break
      }
      return category
    },
  },
}
</script>
