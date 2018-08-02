import { shallowMount } from '@vue/test-utils'
import Description from '@/components/Articles/_partials/Description'
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
    wrapper = shallowMount(Description, {
      propsData: {
        article: article
      }
    })
    h = new TestHelpers(wrapper, expect)
  })

  it('Image component mounts without errors', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('.card__description data is set', () => {
    let selector = '.card__description'
    h.domHas(selector)
    h.domHasLength(selector, 1)
  })

  it('.card__description contains text', () => {
    let selector = '.card__description'
    h.containsText(selector, article.description)
  })
})
