import { shallowMount } from '@vue/test-utils'
import ArticleCards from '@/components/Articles/ArticleCards'
import TestHelpers from '@/../tests/helpers'

describe('ArticleCards.vue', () => {
  let wrapper
  // eslint-disable-next-line
  var h
  let articles = [
    {
      'author': 'author',
      'authorLabel': 'authorLabel',
      'description': 'description',
      'image': 'image',
      'title': 'title',
      'url': 'url'
    }
  ]
  beforeEach(() => {
    wrapper = shallowMount(ArticleCards, {
      propsData: {
        articles: articles
      }
    })
    h = new TestHelpers(wrapper, expect)
  })

  it('ArticleCards component mounts without errors', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('.articles data is set', () => {
    let selector = '.articles'
    h.domHas(selector)
    h.domHasLength(selector, 1)
  })

  it('.article__card data is set', () => {
    let selector = '.article__card'
    h.domHas(selector)
    h.domHasLength(selector, 1)
  })

  it('.card__image-link data is set', () => {
    let selector = '.card__image-link'
    h.domHas(selector)
    h.domHasLength(selector, 1)
  })

  it('.card__image-link attribute is set', () => {
    let selector = '.card__image-link'
    articles.forEach(article => {
      h.domHas(selector)
      h.hasAttribute(selector, 'href')
      h.attributeValueIs(selector, 'href', article.url)
    })
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
    articles.forEach(article => {
      h.domHas(selector)
      h.hasAttribute(selector, 'src')
      h.attributeValueIs(selector, 'src', article.image)
      h.hasAttribute(selector, 'alt')
      h.attributeValueIs(selector, 'alt', article.description)
    })
  })

  it('.card__author data is set', () => {
    let selector = '.card__author'
    h.domHas(selector)
    h.domHasLength(selector, 1)
  })

  it('.card__author contains text', () => {
    let selector = '.card__author'
    articles.forEach(article => {
      h.containsText(selector, article.author)
    })
  })

  it('.card__author-label data is set', () => {
    let selector = '.card__author-label'
    h.domHas(selector)
    h.domHasLength(selector, 1)
  })

  it('.card__author-label contains text', () => {
    let selector = '.card__author-label'
    articles.forEach(article => {
      h.containsText(selector, article.authorLabel)
    })
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
    articles.forEach(article => {
      h.domHas(selector)
      h.hasAttribute(selector, 'href')
      h.attributeValueIs(selector, 'href', article.url)
    })
  })

  it('.card__title-link contains text', () => {
    let selector = '.card__title-link'
    articles.forEach(article => {
      h.containsText(selector, article.title)
    })
  })

  it('.card__description data is set', () => {
    let selector = '.card__description'
    h.domHas(selector)
    h.domHasLength(selector, 1)
  })

  it('.card__description contains text', () => {
    let selector = '.card__description'
    articles.forEach(article => {
      h.containsText(selector, article.description)
    })
  })
})
