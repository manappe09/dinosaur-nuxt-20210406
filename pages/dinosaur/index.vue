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
        @filtered-contents="filteringValue = $event"
      />
      <div class="c-filter__select__wrapper u-mgt-10 u-mgb-80">
        <select class="c-filter__select">
          <option value="popular" selected>人気順</option>
          <option value="name">50音順</option>
        </select>
      </div>
      <button @click="filterContents">ソートする</button>
      <!-- <p>選択された絞り込み：{{ showFilteringValues(filteringValue) }}</p> -->
    </div>
    <ul class="p-dinosaur__list">
      <li
        v-for="(content, index) in filteredContents"
        :key="content.id"
        :class="{ 'is-show': boxShowState[index] }"
        class="p-dinosaur__item c-box c-box--column"
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
            <span class="p-dinosaur__age" :data-category="content.age[0]">{{
              $setDinosaurAge(content.age[0])
            }}</span>
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
      filteringBoxState: false,
      filteredContents: [],
      boxShowState: [],
    }
  },
  mounted() {
    this.filteredContents = this.contents
    this.showAllBoxes()
  },
  methods: {
    toggleFilteringBox() {
      this.filteringBoxState = !this.filteringBoxState
    },
    showAllBoxes() {
      for (let i = 0; i < this.contents.length; i++) {
        this.boxShowState.push(true)
      }
    },
    filterContents() {
      const selectedCategories = this.filteringValue.dinosaurCategory
      const selectedAges = this.filteringValue.dinosaurAge
      this.boxShowState = []
      this.contents.forEach((content) => {
        if (selectedCategories.length > 0 && selectedAges.length > 0) {
          if (
            selectedCategories.includes(content.category[0]) &&
            selectedAges.includes(content.age[0])
          ) {
            this.boxShowState.push(true)
          } else {
            this.boxShowState.push(false)
          }
        } else if (selectedCategories.length > 0 || selectedAges.length > 0) {
          if (
            selectedCategories.includes(content.category[0]) ||
            selectedAges.includes(content.age[0])
          ) {
            this.boxShowState.push(true)
          } else {
            this.boxShowState.push(false)
          }
        } else {
          return false
        }
      })
    },
  },
}
</script>
