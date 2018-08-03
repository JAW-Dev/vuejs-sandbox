import { mount } from '@vue/test-utils'
import Date from '@/components/Articles/_partials/Date'
import TestHelpers from '@/../tests/helpers'
import { article, options } from '@/../tests/dummy-data'
import { filters } from '@/mixins/cardElements'

describe('component.vue', () => {
  let wrapper
  // eslint-disable-next-line
  let h
  beforeEach(() => {
    wrapper = mount(Date, {
      propsData: {
        article: article,
        options: options
      },
      mixins: [filters]
    })
    h = new TestHelpers(wrapper, expect)
  })

  it('Image component mounts without errors', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('.card__date data is set', () => {
    let selector = '.card__date'
    h.domHas(selector)
    h.domHasLength(selector, 1)
  })

  it('.card__date-label data is set', () => {
    let selector = '.card__date-label'
    h.domHas(selector)
    h.domHasLength(selector, 1)
  })

  it('.card__date-label contains text', () => {
    let selector = '.card__date-label'
    h.containsText(selector, options.date.label.labelText)
  })

  it('.card__date-text data is set', () => {
    let selector = '.card__date-text'
    h.domHas(selector)
    h.domHasLength(selector, 1)
  })

  it('.card__date-text contains text', () => {
    let selector = '.card__date-text'
    let text = 'August 3, 2018'
    h.containsText(selector, text)
  })

  it('.card__date-link data is set', () => {
    let selector = '.card__date-link'
    h.domHas(selector)
    h.domHasLength(selector, 1)
  })
})
