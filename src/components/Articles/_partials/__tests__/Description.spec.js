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

  it('.card__description data is set', () => {
    let selector = '.card__description'
    h.domHas(selector)
    h.domHasLength(selector, 1)
  })

  it('.card__description-text data is set', () => {
    let selector = '.card__description-text'
    h.domHas(selector)
    h.domHasLength(selector, 1)
  })

  it('.card__description-text contains text', () => {
    let selector = '.card__description-text'
    h.containsText(selector, article[options.sources.description])
  })

  it('.card__description-link data is set', () => {
    let selector = '.card__description-link'
    h.domHas(selector)
    h.domHasLength(selector, 1)
  })
})
