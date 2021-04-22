<template>
  <main class="l-main">
    <Breadcrumbs />
    <h2 class="c-title c-title--accent u-align-c">博物館・公園一覧</h2>
    <ul class="p-museum__list">
      <li v-for="content in contents" :key="content.id">
        <NuxtLink :to="`/column/${content.id}`" class="c-box c-box--row">
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
              setDataArea(content.area)
            }}</span>
            <span
              class="p-museum__category"
              :data-category="content.category[0]"
              >{{ setDataCategory(content.category[0]) }}</span
            >
          </div>
        </NuxtLink>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios, error }) {
    try {
      const data = await $axios.$get('museum')
      return data
    } catch (e) {
      error(e)
    }
  },
  methods: {
    setDataArea(contentData) {
      let area
      switch (contentData) {
        case 'tokyo':
          area = '東京'
          break
        case 'chiba':
          area = '千葉'
          break
        case 'tochigi':
          area = '栃木'
          break
        case 'ishikawa':
          area = '石川'
          break
        case 'kyoto':
          area = '京都'
          break
        case 'ibaraki':
          area = '茨城'
          break
      }
      return area
    },
    setDataCategory(contentData) {
      let category
      switch (contentData) {
        case 'park':
          category = '公園'
          break
        case 'museum':
          category = '博物館'
          break
      }
      return category
    },
  },
}
</script>
