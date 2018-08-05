import { mount } from '@vue/test-utils'
import Author from '@/components/Articles/_partials/Author'
import TestHelpers from '@/../tests/helpers'
import { article, options } from '@/../tests/dummy-data'

describe('component.vue', () => {
  let wrapper
  // eslint-disable-next-line
  let h
  beforeEach(() => {
    wrapper = mount(Author, {
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
    '.card__author',
    '.card__author-label',
    '.card__author-text',
    '.card__author-link'
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

  let textObjects = [
    {selector: '.card__author-label', text: options.author.label.labelText},
    {selector: '.card__author-text', text: article[options.sources.author]}
  ]

  textObjects.forEach(obj => {
    it(obj.selector + ' contains text', () => {
      h.containsText(obj.selector, obj.text)
    })
  })
})
