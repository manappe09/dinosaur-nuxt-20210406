import { mount, RouterLinkStub } from '@vue/test-utils'
import Header from '~/components/Header.vue'

describe('components/Header.vue', () => {
  // ヘッダーのタイトルが「恐竜ずかん」か
  test('Test Header title', () => {
    const wrapper = mount(Header, {
      stubs: ['NuxtLink', 'fa'],
    })
    expect(wrapper.find('h1').text()).toBe('恐竜ずかん')
  })
  // ヘッダーのリンクがTOPに戻るか
  test('Test Header Link', () => {
    const wrapper = mount(Header, {
      stubs: {
        NuxtLink: RouterLinkStub,
        fa: true,
      },
    })
    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe('/')
  })
})
