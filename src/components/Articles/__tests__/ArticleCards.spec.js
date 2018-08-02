import { shallowMount } from '@vue/test-utils'
import ArticleCards from '@/components/Articles/ArticleCards'
import TestHelpers from '@/../tests/helpers'
import { articles, options } from '@/../tests/dummy-data'

describe('ArticleCards.vue', () => {
  let wrapper
  // eslint-disable-next-line
  var h
  beforeEach(() => {
    wrapper = shallowMount(ArticleCards, {
      propsData: {
        articles: articles,
        options: options
      }
    })
    h = new TestHelpers(wrapper, expect)
  })

  it('ArticleCards component mounts without errors', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('.articles data is set', () => {
    let selector = '.articles'
    h.domHas(selector)
    h.domHasLength(selector, 1)
  })

  it('.article__card data is set', () => {
    let selector = '.article__card'
    h.domHas(selector)
    h.domHasLength(selector, 1)
  })
})
