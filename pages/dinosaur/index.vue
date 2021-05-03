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
        @filtered-contents="filterContents($event)"
      />
      <div class="c-filter__select__wrapper u-mgt-10 u-mgb-40">
        <select class="c-filter__select">
          <option value="popular" selected>人気順</option>
          <option value="name">50音順</option>
        </select>
      </div>
      <div v-if="isFiltered" class="c-filter__selected u-mgb-80">
        <span class="u-text-s">選択された絞り込み</span>
        <div id="selectedValue"></div>
        <button
          @click="showAllBoxes()"
          class="c-button c-button--reset u-text-s"
        >
          全ての恐竜をならべる▶︎
        </button>
      </div>
    </div>
    <p>{{ noItemMessage }}</p>
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
      noItemMessage: '',
      selectedValue: {
        categories: [],
        ages: [],
      },
      isFiltered: false,
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
      this.boxShowState = []
      this.noItemMessage = ''
      this.isFiltered = false
      for (let i = 0; i < this.contents.length; i++) {
        this.boxShowState.push(true)
      }
    },
    filterContents($event) {
      this.selectedValue.categories = $event.dinosaurCategory
      this.selectedValue.ages = $event.dinosaurAge
      this.boxShowState = []
      this.noItemMessage = ''
      this.isFiltered = true
      this.setSelectedValues()
      this.contents.forEach((content) => {
        if (
          this.selectedValue.categories.length > 0 &&
          this.selectedValue.ages.length > 0
        ) {
          if (
            this.selectedValue.categories.includes(content.category[0]) &&
            this.selectedValue.ages.includes(content.age[0])
          ) {
            this.boxShowState.push(true)
          } else {
            this.boxShowState.push(false)
          }
        } else if (
          this.selectedValue.categories.length > 0 ||
          this.selectedValue.ages.length > 0
        ) {
          if (
            this.selectedValue.categories.includes(content.category[0]) ||
            this.selectedValue.ages.includes(content.age[0])
          ) {
            this.boxShowState.push(true)
          } else {
            this.boxShowState.push(false)
          }
        }
      })
      if (!this.boxShowState.includes(true)) {
        this.noItemMessage =
          '当てはまる恐竜はいませんでした。条件を変えて検索してください。'
      }
    },
    setSelectedValues() {
      const ul = document.createElement('ul')
      let convertedCategory = ''
      let convertedAge = ''
      this.selectedValue.categories.forEach((category) => {
        const li = document.createElement('li')
        convertedCategory = this.$setDinosaurCategory(category)
        li.textContent = convertedCategory
        li.classList.add('p-dinosaur__category')
        li.setAttribute('data-category', category)
        ul.appendChild(li)
      })
      this.selectedValue.ages.forEach((age) => {
        const li = document.createElement('li')
        convertedAge = this.$setDinosaurAge(age)
        li.textContent = convertedAge
        li.classList.add('p-dinosaur__age')
        li.setAttribute('data-category', age)
        ul.appendChild(li)
      })
      this.$nextTick(() => {
        const valueSetTarget = document.getElementById('selectedValue')
        while (valueSetTarget.firstElementChild) {
          const removeItem = valueSetTarget.firstElementChild
          valueSetTarget.removeChild(removeItem)
        }
        valueSetTarget.appendChild(ul)
      })
    },
  },
}
</script>
