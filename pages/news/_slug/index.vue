<template>
  <main class="l-main">
    <Breadcrumbs :directories="directories" />
    <!-- ローカルにmapGettersでstore内のjsonデータにアクセスするパターン -->
    <!-- <span class="p-news__category" :data-category="category[0]">{{
      setNewsCategory(category[0])
    }}</span> -->
    <!-- グローバルの場合 -->
    <span class="p-news__category" :data-category="category[0]">{{
      $setNewsCategory(category[0])
    }}</span>
    <span class="p-news__date">{{ $setDate(createdAt) }}</span>
    <h2 class="c-subtitle u-mgt-10">{{ title }}</h2>
    <hr />
    <p v-html="text01"></p>
    <Button
      :linkto="'news'"
      :level="'secondary'"
      :label="'お知らせ一覧へ戻る'"
      class="u-mgt-40"
    />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ $axios, params, error }) {
    try {
      const data = await $axios.$get(`news/${params.slug}`)
      return data
    } catch (e) {
      error(e)
    }
  },
  data() {
    return {
      directories: [
        {
          name: 'お知らせ一覧',
          path: '/news/',
        },
        {
          name: '',
          path: `/news/${this.$route.params.slug}`,
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
  computed: {
    ...mapGetters({
      convertData: 'convertData/convertData',
    }),
  },
  methods: {
    setNewsCategory(category) {
      const [returnItem] = this.convertData.news.filter(
        (news) => news.name === category
      )
      return returnItem.ja
    },
  },
}
</script>
