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

  it('.articles__cards data is set', () => {
    let selector = '.articles__cards'
    h.domHas(selector)
    h.domHasLength(selector, 1)
  })

  it('.cards__header has class', () => {
    let selector = '.cards__header'
    h.domHas(selector)
  })

  it('.cards__footer has class', () => {
    let selector = '.cards__footer'
    h.domHas(selector)
  })
})
