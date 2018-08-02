import { shallowMount } from '@vue/test-utils'
import Date from '@/components/Articles/_partials/Date'
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
    wrapper = shallowMount(Date, {
      propsData: {
        article: article
      }
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

  it('.card__date contains text', () => {
    let selector = '.card__date'
    h.containsText(selector, article.date)
  })

  it('.card__date-label data is set', () => {
    let selector = '.card__date-label'
    h.domHas(selector)
    h.domHasLength(selector, 1)
  })

  it('.card__date-label contains text', () => {
    let selector = '.card__date-label'
    h.containsText(selector, article.dateLabel)
  })
})
