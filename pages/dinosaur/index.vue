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
      <DinosaurBox />
      <DinosaurBox />
      <DinosaurBox />
      <DinosaurBox />
      <DinosaurBox />
      <DinosaurBox />
      <DinosaurBox />
      <DinosaurBox />
    </ul>
  </main>
</template>

<script>
export default {
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
