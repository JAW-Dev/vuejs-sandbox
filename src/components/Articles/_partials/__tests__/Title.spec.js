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

  it('.card__title data is set', () => {
    let selector = '.card__title'
    h.domHas(selector)
    h.domHasLength(selector, 1)
  })

  it('.card__title-text data is set', () => {
    let selector = '.card__title-text'
    h.domHas(selector)
    h.domHasLength(selector, 1)
  })

  it('.card__title-text contains text', () => {
    let selector = '.card__title-text'
    h.containsText(selector, article[options.sources.title])
  })

  it('.card__title-link data is set', () => {
    let selector = '.card__title-link'
    h.domHas(selector)
    h.domHasLength(selector, 1)
  })
})
