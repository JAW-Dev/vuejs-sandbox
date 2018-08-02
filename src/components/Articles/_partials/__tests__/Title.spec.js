import { shallowMount } from '@vue/test-utils'
import Title from '@/components/Articles/_partials/Title'
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
    'date': 'date',
    'dateLabel': 'dateLabel'
  }
  beforeEach(() => {
    wrapper = shallowMount(Title, {
      propsData: {
        article: article
      }
    })
    h = new TestHelpers(wrapper, expect)
  })

  it('Image component mounts without errors', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('.card__title data is set', () => {
    let selector = '.card__title'
    h.domHas(selector)
    h.domHasLength(selector, 1)
  })

  it('.card__title-link data is set', () => {
    let selector = '.card__title-link'
    h.domHas(selector)
    h.domHasLength(selector, 1)
  })

  it('.card__title-link attribute is set', () => {
    let selector = '.card__title-link'
    h.domHas(selector)
    h.hasAttribute(selector, 'href')
    h.attributeValueIs(selector, 'href', article.url)
  })

  it('.card__title-link contains text', () => {
    let selector = '.card__title-link'
    h.containsText(selector, article.title)
  })
})
