'use strict'

// news: categoryリスト
function setNewsCategory(content) {
  let category
  // この辺はデータの構造を見ながら
  switch (content) {
    case 'news':
      category = 'お知らせ'
      break
    case 'announce':
      category = 'ご注意'
      break
  }
  return category
}

// museum: 都道府県リスト
function setArea(contentData) {
  let area
  switch (contentData) {
    case 'tokyo':
      area = '東京'
      break
    case 'chiba':
      area = '千葉'
      break
    case 'tochigi':
      area = '栃木'
      break
    case 'ishikawa':
      area = '石川'
      break
    case 'kyoto':
      area = '京都'
      break
    case 'ibaraki':
      area = '茨城'
      break
  }
  return area
}

// museum: categoryリスト
function setMuseumCategory(contentData) {
  let category
  switch (contentData) {
    case 'park':
      category = '公園'
      break
    case 'museum':
      category = '博物館'
      break
  }
  return category
}

// column: categoryリスト
function setColumnCategory(contentData) {
  let category
  switch (contentData) {
    case 'dinosaur':
      category = '恐竜のこと'
      break
    case 'history':
      category = '恐竜の歴史'
      break
    case 'event':
      category = 'イベント情報'
      break
    case 'tips':
      category = '豆知識'
      break
  }
  return category
}
function hello(hoge) {
  console.log(`hello!${hoge}`)
}

// dinosaur: categoryリスト
function setDinosaurCategory(content) {
  let category
  switch (content) {
    case 'dragon':
      category = '竜盤目'
      break
    case 'bird':
      category = '鳥盤目'
      break
  }
  return category
}

// dinosaur: ageリスト
function setDinosaurAge(content) {
  let category
  switch (content) {
    case 'Jurassic':
      category = 'ジュラ紀'
      break
    case 'Cretaceous':
      category = '白亜紀'
      break
  }
  return category
}

// eslint-disable-next-line no-empty-pattern
export default ({}, inject) => {
  inject('setNewsCategory', setNewsCategory)
  inject('setArea', setArea)
  inject('setMuseumCategory', setMuseumCategory)
  inject('setColumnCategory', setColumnCategory)
  inject('setDinosaurCategory', setDinosaurCategory)
  inject('setDinosaurAge', setDinosaurAge)
  inject('hello', hello)
}
