<template>
  <main class="l-main">
    <!-- スライダー -->
    <!-- TODO: あとでいれる -->
    <!-- <SwiperTop /> -->
    <!-- /スライダー -->
    <!-- 最近のお知らせ -->
    <section class="p-newstop u-mgt-40 u-mgb-80">
      <ul class="p-newstop__list">
        <li
          v-for="news in setSlicedArray(news, 3)"
          :key="news.id"
          class="p-newstop__item"
        >
          <NuxtLink to="/news/4" class="p-newstop__title">
            <span class="p-news__category" :data-category="news.category[0]">{{
              $setNewsCategory(news.category[0])
            }}</span
            >{{ news.title }}
          </NuxtLink>
        </li>
      </ul>
      <NuxtLink to="/news" class="c-button c-button--third u-mgt-20"
        >お知らせ一覧へ</NuxtLink
      >
    </section>
    <!-- /最近のお知らせ -->
    <!-- 恐竜を探す -->
    <section class="p-searchtop u-mgb-80 c-pc_content--m">
      <img
        class="p-searchtop__image"
        src="~/assets/images/search-dinosaur01.png"
        alt=""
      />
      <div class="p-searchtop__list u-mgt-10">
        <NuxtLink to="/dinosaur" class="p-searchtop__link"
          >種類で<br />さがす</NuxtLink
        >
        <NuxtLink to="/dinosaur" class="p-searchtop__link"
          >50音順で<br />さがす</NuxtLink
        >
      </div>
    </section>
    <!-- /恐竜を探す -->
    <!-- 恐竜ランキング -->
    <section class="p-rankingtop u-mgb-80">
      <h2 class="c-title c-title--primary u-align-c u-mgb-20">
        恐竜人気ランキング
      </h2>
      <ul class="p-rankingtop__list">
        <li
          v-for="(dinosaur, index) in setSlicedArray(dinosaurs, 3)"
          :key="dinosaur.id"
          class="p-rankingtop__item"
          :data-index="index + 1"
        >
          <NuxtLink :to="`/dinosaur/${dinosaur.id}`"
            ><img class="p-rankingtop__image" :src="dinosaur.image.url" alt=""
          /></NuxtLink>
        </li>
      </ul>
    </section>
    <!-- /恐竜ランキング -->
    <!-- 博物館・公園 -->
    <section class="p-museumtop u-mgb-40">
      <h2 class="c-title c-title--primary c-title--accent u-align-c u-mgb-20">
        恐竜に会いにいく
      </h2>
      <ul class="p-museumtop__list">
        <li
          v-for="museum in setSlicedArray(museums, 6)"
          :key="museum.id"
          class="c-box c-box--column"
        >
          <NuxtLink :to="`/museum/${museum.id}`">
            <img
              class="c-box__image c-box__image--column"
              :src="museum.eyecatch.url"
              alt=""
              width="100"
              height="100"
            />
            <div class="c-box__text c-box__text--column">
              <span class="p-museum__area" :data-area="museum.area">{{
                $setArea(museum.area)
              }}</span>
              <span
                class="p-museum__category"
                :data-category="museum.category[0]"
                >{{ $setMuseumCategory(museum.category[0]) }}</span
              >
              <p>{{ museum.title }}</p>
              <div v-html="museum.text" class="p-museumtop__text"></div>
            </div>
          </NuxtLink>
        </li>
      </ul>
      <NuxtLink to="/museum" class="c-button c-button--primary"
        >博物館・公園一覧へ</NuxtLink
      >
    </section>
    <!-- /博物館・公園 -->
    <!-- バナー -->
    <NuxtLink to="/" class="c-pc_content--m">
      <img
        class="c-banner__image u-mgb-10"
        src="~/assets/images/top-banner01.png"
        alt=""
        width="415"
        height="140"
    /></NuxtLink>
    <NuxtLink to="/museum" class="c-pc_content--m"
      ><img
        class="c-banner__image"
        src="~/assets/images/top-banner02.png"
        alt=""
        width="415"
        height="140"
    /></NuxtLink>
    <!-- /バナー -->
    <!-- コラム -->
    <section class="p-columntop u-mgb-40">
      <h2 class="c-title c-title--primary c-title--accent u-align-c u-mgb-20">
        コラムを読む
      </h2>
      <ul class="p-columntop__list">
        <li
          v-for="column in setSlicedArray(columns, 6)"
          :key="column.id"
          class="c-box c-box--column"
        >
          <NuxtLink :to="`/column/${column.id}`">
            <img
              class="c-box__image c-box__image--column"
              :src="column.eyecatch.url"
              alt=""
              width="100"
              height="100"
            />
            <div class="c-box__text c-box__text--column">
              <span
                class="p-column__category"
                :data-category="column.category[0]"
                >{{ $setColumnCategory(column.category[0]) }}</span
              >
              <p>{{ column.title }}</p>
              <div v-html="column.text" class="p-columntop__text"></div>
            </div>
          </NuxtLink>
        </li>
      </ul>
      <NuxtLink to="/column" class="c-button c-button--primary"
        >コラムをもっと読む</NuxtLink
      >
    </section>
    <!-- /コラム -->
  </main>
</template>

<script>
export default {
  async asyncData({ $axios, error }) {
    try {
      const [news, dinosaur, column, museum] = await Promise.all([
        $axios.$get('news'),
        $axios.$get('dinosaur'),
        $axios.$get('column'),
        $axios.$get('museum'),
      ])
      return {
        news: news.contents,
        dinosaurs: dinosaur.contents,
        columns: column.contents,
        museums: museum.contents,
      }
    } catch (e) {
      error(e)
    }
  },
  methods: {
    setSlicedArray(array, quantity) {
      return array.slice(0, quantity)
    },
  },
}
</script>
