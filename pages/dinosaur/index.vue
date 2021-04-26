<template>
  <main class="l-main">
    <Breadcrumbs />
    <h2 class="c-title c-title--accent u-align-c">恐竜のなかまたち</h2>
    <div class="c-filter">
      <button
        class="c-filter__button js-filter__button"
        @click="toggleFilteringBox"
      >
        <fa icon="search" class="fas c-filter__icon" />絞り込み検索
      </button>
      <FilteringBox
        :filtering-box-state="filteringBoxState"
        @hide-filtering-box="filteringBoxState = $event"
      />
      <div class="c-filter__select__wrapper u-mgt-10 u-mgb-80">
        <select class="c-filter__select">
          <option value="popular" selected>人気順</option>
          <option value="name">50音順</option>
        </select>
      </div>
    </div>
    <ul class="p-dinosaur__list">
      <li
        v-for="content in contents"
        :key="content.id"
        class="c-box c-box--column"
      >
        <NuxtLink :to="`/dinosaur/${content.id}`">
          <img
            class="c-box__image c-box__image--column"
            :src="content.image.url"
            alt=""
            width="100"
            height="100"
          />
          <div class="c-box__text c-box__text--column">
            <span
              class="p-dinosaur__category"
              :data-category="content.age[0]"
              >{{ $setDinosaurAge(content.age[0]) }}</span
            >
            <span
              class="p-dinosaur__category"
              :data-category="content.category[0]"
              >{{ $setDinosaurCategory(content.category[0]) }}</span
            >
            <p>{{ content.name }}</p>
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
      const data = await $axios.$get('dinosaur')
      return data
    } catch (e) {
      error(e)
    }
  },
  data() {
    return {
      data: [
        {
          label: 'dragon',
          name: '竜盤目',
        },
        {
          label: 'bird',
          name: '鳥盤目',
        },
      ],
      filteringBoxState: false,
    }
  },
  methods: {
    toggleFilteringBox() {
      this.filteringBoxState = !this.filteringBoxState
    },
  },
}
</script>
