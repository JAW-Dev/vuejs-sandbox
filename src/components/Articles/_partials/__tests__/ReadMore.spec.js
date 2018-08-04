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

  it('.card__readMore data is set', () => {
    let selector = '.card__readMore'
    h.domHas(selector)
    h.domHasLength(selector, 1)
  })

  it('.card__readMore-text data is set', () => {
    let selector = '.card__readMore-text'
    h.domHas(selector)
    h.domHasLength(selector, 1)
  })

  it('.card__readMore-text contains text', () => {
    let selector = '.card__readMore-text'
    h.containsText(selector, options.readMore.moreText)
  })

  it('.card__readMore-link data is set', () => {
    let selector = '.card__readMore-link'
    h.domHas(selector)
    h.domHasLength(selector, 1)
  })
})
