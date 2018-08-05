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

  let selectors = [
    '.card__date',
    '.card__date-label',
    '.card__date-text',
    '.card__date-link'
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

  it('.card__date-label contains text', () => {
    let selector = '.card__date-label'
    h.containsText(selector, options.date.label.labelText)
  })

  it('.card__date-text contains text', () => {
    let selector = '.card__date-text'
    let text = 'August 3, 2018'
    h.containsText(selector, text)
  })
})
