<template>
  <main class="l-main">
    <Breadcrumbs :directories="directories" />
    <h2 class="c-title c-title--accent u-align-c">コラム一覧</h2>
    <ul class="p-column__list">
      <li v-for="content in contents" :key="content.id">
        <NuxtLink :to="`/column/${content.id}`" class="c-box c-box--row">
          <img
            class="c-box__image c-box__image--row"
            :src="content.eyecatch.url"
            alt=""
            width="100"
            height="100"
          />
          <div class="c-box__text c-box__text--row">
            <p>{{ content.title }}</p>
            <!-- 自作json, pluginで変換した場合 -->
            <!-- <span
              class="p-column__category"
              :data-category="content.category[0]"
              >{{ $setColumnCategory(content.category[0]) }}</span
            > -->
            <!-- microCMSでコンテンツ参照を用いた場合 -->
            <span
              class="p-column__category"
              :data-category="content.categoryJapanese.name"
              >{{ content.categoryJapanese.ja }}</span
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
      const data = await $axios.$get('column')
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
      ],
    }
  },
  head() {
    return {
      title: 'コラム一覧',
    }
  },
}
</script>
