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

  it('.card__author data is set', () => {
    let selector = '.card__author'
    h.domHas(selector)
    h.domHasLength(selector, 1)
  })

  it('.card__author-label data is set', () => {
    let selector = '.card__author-label'
    h.domHas(selector)
    h.domHasLength(selector, 1)
  })

  it('.card__author-label contains text', () => {
    let selector = '.card__author-label'
    h.containsText(selector, options.author.label.labelText)
  })

  it('.card__author-text data is set', () => {
    let selector = '.card__author-text'
    h.domHas(selector)
    h.domHasLength(selector, 1)
  })

  it('.card__author-text contains text', () => {
    let selector = '.card__author-text'
    h.containsText(selector, article[options.author.source])
  })
})
