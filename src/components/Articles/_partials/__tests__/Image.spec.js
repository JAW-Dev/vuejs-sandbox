import { mount } from '@vue/test-utils'
import Image from '@/components/Articles/_partials/Image'
import TestHelpers from '@/../tests/helpers'
import { article, options } from '@/../tests/dummy-data'

describe('component.vue', () => {
  let wrapper
  // eslint-disable-next-line
  let h
  beforeEach(() => {
    wrapper = mount(Image, {
      propsData: {
        article: article,
        options: options
      }
    })
    h = new TestHelpers(wrapper, expect)
  })

  it('Image component mounts without errors', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  let selectors = [
    '.card__image-wrapper',
    '.card__image',
    '.card__image-link',
    '.card__image-caption'
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

  it('.card__image attributs are set', () => {
    let selector = '.card__image'
    h.hasAttribute(selector, 'src')
    h.attributeValueIs(selector, 'src', article.image)
    h.hasAttribute(selector, 'alt')
    h.attributeValueIs(selector, 'alt', article.description)
  })

  it('.card__image-caption contains text', () => {
    let selector = '.card__image-caption'
    h.containsText(selector, article[options.sources.imageCaption])
  })
})
