import { mount } from '@vue/test-utils'
import ReadMore from '@/components/Articles/_partials/ReadMore'
import TestHelpers from '@/../tests/helpers'
import { article, options } from '@/../tests/dummy-data'

describe('component.vue', () => {
  let wrapper
  // eslint-disable-next-line
  let h
  beforeEach(() => {
    wrapper = mount(ReadMore, {
      propsData: {
        article: article,
        options: options
      }
    })
    h = new TestHelpers(wrapper, expect)
  })

  it('Title component mounts without errors', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  let selectors = [
    '.card__readMore',
    '.card__readMore-text',
    '.card__readMore-link'
  ]

  selectors.forEach(selector => {
    it(selector + ' has class set', () => {
      h.domHas(selector)
    })
  })

  selectors.forEach(selector => {
    it(selector + ' conditional is true', () => {
      h.domHasLength(selector, 1)
    })
  })

  it('.card__readMore-text contains text', () => {
    let selector = '.card__readMore-text'
    h.containsText(selector, options.readMore.moreText)
  })
})
