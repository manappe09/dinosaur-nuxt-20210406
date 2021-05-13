function setDate(date) {
  const newDate = date.slice(0, 10).split('-').join('/')
  return newDate
}

export default (context, inject) => {
  inject('setDate', setDate)
}
