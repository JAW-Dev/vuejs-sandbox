export const article = {
  'url': 'url',
  'image': 'image',
  'author': 'author',
  'authorUrl': 'authorLink',
  'date': '2018-08-03T17:32:14Z',
  'dateUrl': 'dateUrl',
  'title': 'title',
  'description': 'description'
}

export const articles = [article]

export const options = {
  articles: {
    ID: 'articles',
    classes: 'articles',
    attributes: {'data-test': 'articles'}
  },
  image: {
    source: 'image',
    showImage: true,
    ID: 'card__image',
    classes: 'card__image',
    attributes: {'data-test': 'card__image'},
    link: {
      source: 'url',
      showLink: true,
      ID: 'card__image-link',
      classes: 'card__image-link',
      attributes: {'data-test': 'card__image-link'}
    },
    wrapper: {
      ID: 'card__image-wrapper',
      classes: 'card__image-wrapper',
      attributes: {'data-test': 'card__image-wrapper'}
    }
  },
  author: {
    source: 'author',
    showAuthor: true,
    ID: 'card__author',
    classes: 'card__author',
    attributes: {'data-test': 'card__author'},
    label: {
      showLabel: true,
      labelText: 'Author: ',
      ID: 'card__author-label',
      classes: 'card__author-label',
      attributes: {'data-test': 'card__author-label'}
    },
    link: {
      source: 'authorUrl',
      showLink: true,
      ID: 'card__author-link',
      classes: 'card__author-link',
      attributes: {'data-test': 'card__author-link'}
    },
    text: {
      ID: 'card__author-text',
      classes: 'card__author-text',
      attributes: {'data-test': 'card__author-text'}
    }
  },
  date: {
    source: 'date',
    showDate: true,
    ID: 'card__date',
    classes: 'card__date',
    attributes: {'data-test': 'card__date'},
    format: {
      doFormat: true,
      locale: 'en-US',
      options: {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
    },
    label: {
      showLabel: true,
      labelText: 'Published On: ',
      ID: 'card__date-label',
      classes: 'card__date-label',
      attributes: {'data-test': 'card__date-label'}
    },
    link: {
      source: 'dateUrl',
      showLink: true,
      ID: 'card__date-link',
      classes: 'card__date-link',
      attributes: {'data-test': 'card__date-link'}
    },
    text: {
      ID: 'card__date-text',
      classes: 'card__date-text',
      attributes: {'data-test': 'card__date-text'}
    }
  },
  showTitle: true,
  linkTitle: true,
  showDescription: true,
  linkDescription: true
}
