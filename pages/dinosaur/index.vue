<template>
  <main class="l-main">
    <Breadcrumbs />
    <h2 class="c-title c-title--accent u-align-c">恐竜のなかまたち</h2>
    <div class="c-filter">
      <button class="c-filter__button js-filter__button">
        <fa icon="search" class="fas c-filter__icon" />絞り込み検索
      </button>
      <div id="filter-window" class="c-filter__window u-mgt-10">
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
          <NuxtLink
            to=""
            class="js-filter__button c-filter__window__cancel u-mgt-20"
            >絞り込み検索をやめる</NuxtLink
          >
        </div>
      </div>
      <div class="c-filter__select__wrapper u-mgt-10 u-mgb-80">
        <select class="c-filter__select">
          <option value="popular" selected>人気順</option>
          <option value="name">50音順</option>
        </select>
      </div>
    </div>
    <ul class="p-dinosaur__list">
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
    }
  },
}
</script>
