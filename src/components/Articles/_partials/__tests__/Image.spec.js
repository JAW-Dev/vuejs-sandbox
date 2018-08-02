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

  it('.card__image-wrapper data is set', () => {
    let selector = '.card__image-wrapper'
    h.domHas(selector)
    h.domHasLength(selector, 1)
  })

  it('.card__image data is set', () => {
    let selector = '.card__image'
    h.domHas(selector)
    h.domHasLength(selector, 1)
  })

  it('.card__image attributs are set', () => {
    let selector = '.card__image'
    h.domHas(selector)
    h.hasAttribute(selector, 'src')
    h.attributeValueIs(selector, 'src', article.image)
    h.hasAttribute(selector, 'alt')
    h.attributeValueIs(selector, 'alt', article.description)
  })
})
