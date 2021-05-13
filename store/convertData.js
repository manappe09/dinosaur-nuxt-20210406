import convertData from '~/assets/json/convert-data'

export const state = () => ({
  convertData,
  demo: 'これはデモです',
})

export const getters = {
  convertData: (state) => {
    return state.convertData
  },
}
