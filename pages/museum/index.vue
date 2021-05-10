<template>
  <main class="l-main">
    <Breadcrumbs :directories="directories" />
    <h2 class="c-title c-title--accent u-align-c">博物館・公園一覧</h2>
    <ul class="p-museum__list">
      <li v-for="content in contents" :key="content.id">
        <NuxtLink :to="`/museum/${content.id}`" class="c-box c-box--row">
          <img
            class="c-box__image c-box__image--row"
            :src="`${content.eyecatch.url}`"
            alt=""
            width="100"
            height="100"
          />
          <div class="c-box__text c-box__text--row">
            <p>{{ content.title }}</p>
            <span class="p-museum__area" :data-area="content.area">{{
              $setArea(content.area)
            }}</span>
            <span
              class="p-museum__category"
              :data-category="content.category[0]"
              >{{ $setNewsCategory(content.category[0]) }}</span
            >
          </div>
        </NuxtLink>
      </li>
    </ul>
  </main>
</template>

<script>
// import { setArea, setMuseumCategory } from '~/assets/js/convertData'

export default {
  async asyncData({ $axios, error }) {
    try {
      const data = await $axios.$get('museum')
      return data
    } catch (e) {
      error(e)
    }
  },
  data() {
    return {
      directories: [
        {
          name: '博物館・恐竜一覧',
          path: '/museum',
        },
      ],
    }
  },
  head() {
    return {
      title: '博物館・公園一覧',
    }
  },
  mounted() {
    // pluginに定義した関数を呼び出す
    this.$hello('everyone!')
  },
}
</script>
