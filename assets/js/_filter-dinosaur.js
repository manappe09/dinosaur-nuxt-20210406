'use strict'

// pages/dinosaur/index.vueでこちらを使おうとしたもののCSSの方がいい気がしたので断念。途中経過を残しておく。
function filterContents() {
  // 空の配列を用意し、絞り込みに該当したデータのみ配列にpushしていく
  // eslint-disable-next-line prefer-const
  let newArray = []
  let remainContentsArray01 = []
  const selectedCategories = this.filteringValue.dinosaurCategory
  const selectedAges = this.filteringValue.dinosaurAge
  this.contents.forEach((content) => {
    if (selectedCategories.length !== 0 || selectedAges.length !== 0) {
      // 種別絞り込み
      selectedCategories.forEach((category) => {
        if (content.category.length !== 0 && content.category[0] === category) {
          newArray.push(content)
        } else {
          // remainContentsArray01.push(content)
        }
      })
      // 時代別絞り込み
      selectedAges.forEach((age) => {
        if (content.age.length !== 0 && content.age[0] === age) {
          newArray.push(content)
        }
      })
      this.filteredContents = newArray
    } else {
      // 何も選択されていない時 -> ボタンをdisableにした方がいいかも
      this.filteredContents = this.contents
    }
  })
}

// パターン2。 真偽値を配列にpushして、v-ifで表示切り替えしようとした。できたけど肝心の非表示時に余白になるだけだったので断念。
function showAllBoxes() {
  for (let i = 0; i < this.contents.length; i++) {
    this.boxShowStateArray.push(true)
  }
}
function filterContents() {
  const selectedCategories = this.filteringValue.dinosaurCategory
  const selectedAges = this.filteringValue.dinosaurAge
  this.boxShowStateArray = []
  this.contents.forEach((content) => {
    if (
      selectedCategories.includes(content.category[0]) ||
      selectedAges.includes(content.age[0])
    ) {
      this.boxShowStateArray.push(true)
    } else {
      this.boxShowStateArray.push(false)
    }
  })
}
