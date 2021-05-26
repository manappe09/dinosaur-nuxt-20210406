export default ({ store }, inject) => {
  const convertTargetDatas = store.state.convertData.convertData
  // common: 都道府県リスト
  inject('setArea', (area) => {
    const datas = convertTargetDatas.common.area
    const returnData = datas.filter((data) => data.name === area)
    return returnData[0].ja
  })
  // news: categoryリスト
  inject('setNewsCategory', (category) => {
    const datas = convertTargetDatas.news
    // 分割代入の場合
    const [returnData] = datas.filter((data) => data.name === category)
    return returnData.ja
  })
  // museum: categoryリスト
  inject('setMuseumCategory', (category) => {
    const datas = convertTargetDatas.museum
    const returnData = datas.filter((data) => data.name === category)
    return returnData[0].ja
  })
  // column: categoryリスト
  inject('setColumnCategory', (category) => {
    const datas = convertTargetDatas.column
    const returnData = datas.filter((data) => data.name === category)
    return returnData[0].ja
  })
  // dinosaur: categoryリスト
  inject('setDinosaurCategory', (category) => {
    const datas = convertTargetDatas.dinosaur.category
    const returnData = datas.filter((data) => data.name === category)
    return returnData[0].ja
  })
  // dinosaur: ageリスト
  inject('setDinosaurAge', (age) => {
    const datas = convertTargetDatas.dinosaur.age
    const returnData = datas.filter((data) => data.name === age)
    return returnData[0].ja
  })
}
