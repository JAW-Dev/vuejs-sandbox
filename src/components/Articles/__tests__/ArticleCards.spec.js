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

  let classesSelectors = [
    '.articles',
    '.articles__cards',
    '.cards__header',
    '.cards__footer'
  ]

  classesSelectors.forEach(selector => {
    it(selector + ' has class set', () => {
      h.domHas(selector)
    })
  })

  let conditionalsSelectors = [
    '.articles',
    '.articles__cards'
  ]

  conditionalsSelectors.forEach(selector => {
    it(selector + ' conditional is true', () => {
      h.domHasLength(selector, 1)
    })
  })
})
