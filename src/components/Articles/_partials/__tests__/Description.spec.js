import { mount } from '@vue/test-utils'
import Description from '@/components/Articles/_partials/Description'
import TestHelpers from '@/../tests/helpers'
import { article, options } from '@/../tests/dummy-data'

describe('component.vue', () => {
  let wrapper
  // eslint-disable-next-line
  let h
  beforeEach(() => {
    wrapper = mount(Description, {
      propsData: {
        article: article,
        options: options
      }
    })
    h = new TestHelpers(wrapper, expect)
  })

  it('Author component mounts without errors', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  let selectors = [
    '.card__description',
    '.card__description-text',
    '.card__description-link'
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

  it('.card__description-text contains text', () => {
    let selector = '.card__description-text'
    h.containsText(selector, article[options.sources.description])
  })
})
