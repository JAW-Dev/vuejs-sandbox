import { mount } from '@vue/test-utils'
import Title from '@/components/Articles/_partials/Title'
import TestHelpers from '@/../tests/helpers'
import { article, options } from '@/../tests/dummy-data'

describe('component.vue', () => {
  let wrapper
  // eslint-disable-next-line
  let h
  beforeEach(() => {
    wrapper = mount(Title, {
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
    '.card__title',
    '.card__title-text',
    '.card__title-link'
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

  it('.card__title-text contains text', () => {
    let selector = '.card__title-text'
    h.containsText(selector, article[options.sources.title])
  })
})
