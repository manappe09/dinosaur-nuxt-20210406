<template>
  <main class="l-main">
    <Breadcrumbs :directories="directories" />
    <h2 class="c-title c-title--accent u-align-c">お知らせ一覧</h2>
    <ul class="p-news">
      <li
        v-for="content in contents"
        :key="content.id"
        class="p-news__item c-listitem"
      >
        <span class="p-news__date">{{ $setDate(content.createdAt) }}</span>
        <span class="p-news__category" :data-category="content.category[0]">{{
          $setNewsCategory(content.category[0])
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
  data() {
    return {
      directories: [
        {
          name: 'お知らせ一覧',
          path: '/news',
        },
      ],
    }
  },
  head() {
    return {
      title: 'お知らせ一覧',
    }
  },
  mounted() {
    // APIで取得したデータがdataとマージされ下記に格納される
    console.log(this.contents)
  },
}
</script>
