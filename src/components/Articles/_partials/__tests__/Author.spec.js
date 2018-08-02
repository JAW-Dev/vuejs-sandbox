import { shallowMount } from '@vue/test-utils'
import Author from '@/components/Articles/_partials/Author'
import TestHelpers from '@/../tests/helpers'

describe('component.vue', () => {
  let wrapper
  // eslint-disable-next-line
  let h
  let article = {
    'author': 'author',
    'authorLabel': 'authorLabel',
    'description': 'description',
    'image': 'image',
    'title': 'title',
    'url': 'url',
    'date': 'date'
  }
  beforeEach(() => {
    wrapper = shallowMount(Author, {
      propsData: {
        article: article
      }
    })
    h = new TestHelpers(wrapper, expect)
  })

  it('Image component mounts without errors', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('.card__author data is set', () => {
    let selector = '.card__author'
    h.domHas(selector)
    h.domHasLength(selector, 1)
  })

  it('.card__author contains text', () => {
    let selector = '.card__author'
    h.containsText(selector, article.author)
  })

  it('.card__author-label data is set', () => {
    let selector = '.card__author-label'
    h.domHas(selector)
    h.domHasLength(selector, 1)
  })

  it('.card__author-label contains text', () => {
    let selector = '.card__author-label'
    h.containsText(selector, article.authorLabel)
  })
})
