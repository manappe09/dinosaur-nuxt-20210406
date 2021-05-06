<template>
  <div
    id="filter-window"
    class="c-filter__window u-mgt-10"
    :class="{ 'is-open': filteringBoxState }"
  >
    <h3 class="c-filter__index">種類</h3>
    <input
      id="bird"
      v-model="dinosaurCategory"
      type="checkbox"
      name="category"
      value="bird"
    />
    <label for="bird">鳥盤目</label>
    <input
      id="dragon"
      v-model="dinosaurCategory"
      type="checkbox"
      name="category"
      value="dragon"
    />
    <label for="dragon">竜盤目</label>
    <h3 class="c-filter__index">時代</h3>
    <input
      id="jurassic"
      v-model="dinosaurAge"
      type="checkbox"
      name="age"
      value="jurassic"
    />
    <label for="jurassic">ジュラ紀</label>
    <input
      id="cretaceous"
      v-model="dinosaurAge"
      type="checkbox"
      name="age"
      value="cretaceous"
    />
    <label for="cretaceous">白亜紀</label>
    <!-- <h3 class="c-filter__index">食べ物</h3>
    <input id="vegetable" type="checkbox" name="category" />
    <label for="vegetable">草食</label>
    <input id="meat" type="checkbox" name="category" />
    <label for="meat">肉食</label>
    <input id="bug" type="checkbox" name="category" />
    <label for="bug">虫</label>
    <input id="mix" type="checkbox" name="category" />
    <label for="mix">雑食</label><br /> -->
    <div class="c-filter__window__bottom">
      <button
        class="c-filter__submit c-button c-button--third"
        @click="filterContents"
      >
        この条件で絞り込む
      </button>
      <button
        type="button"
        class="js-filter__button c-button c-filter__window__hide u-mgt-20"
        @click="hideFilteringBox"
      >
        絞り込み検索をやめる
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dinosaurCategory: [],
      dinosaurAge: [],
    }
  },
  computed: {
    filteringBoxState() {
      return this.$store.state.filter.filteringBoxState
    },
  },
  methods: {
    hideFilteringBox() {
      this.$store.dispatch('filter/toggleFilteringBox', false)
    },
    filterContents() {
      this.$store.dispatch('filter/toggleFilteringBox', false)
      this.$store.dispatch('filter/setSelectedValue', {
        categories: this.dinosaurCategory,
        ages: this.dinosaurAge,
      })
      this.$emit('filtered')
      this.dinosaurCategory = []
      this.dinosaurAge = []
    },
  },
}
</script>
