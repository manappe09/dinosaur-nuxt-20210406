function setDate(date) {
  const newDate = date.slice(0, 10).split('-').join('/')
  return newDate
}

// eslint-disable-next-line no-empty-pattern
export default ({}, inject) => {
  inject('setDate', setDate)
}