<template>
  <div
    id="filter-window"
    class="c-filter__window u-mgt-10"
    :class="{ 'is-open': filteringBoxState }"
  >
    <h3 class="c-filter__index">種類</h3>
    <input id="bird" type="checkbox" name="category" />
    <label for="bird">鳥盤目</label>
    <input id="dragon" type="checkbox" name="category" />
    <label for="dragon">竜盤目</label>
    <h3 class="c-filter__index">食べ物</h3>
    <input id="vegetable" type="checkbox" name="category" />
    <label for="vegetable">草食</label>
    <input id="meat" type="checkbox" name="category" />
    <label for="meat">肉食</label>
    <input id="bug" type="checkbox" name="category" />
    <label for="bug">虫</label>
    <input id="mix" type="checkbox" name="category" />
    <label for="mix">雑食</label><br />
    <div class="c-filter__window__bottom">
      <button class="c-filter__submit c-button c-button--third">
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
  props: ['filteringBoxState'],
  methods: {
    hideFilteringBox() {
      this.$emit('hide-filtering-box', false)
    },
  },
}
</script>
