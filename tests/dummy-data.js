export const article = {
  'url': 'url',
  'image': 'image',
  'author': 'author',
  'authorUrl': 'authorLink',
  'date': 'date',
  'dateLabel': 'dateLabel',
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
    showImage: true,
    ID: 'card__image',
    classes: 'card__image',
    attributes: {'data-test': 'card__image'},
    link: {
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
  showDate: true,
  linkDate: true,
  dateLabel: 'Published On: ',
  showTitle: true,
  linkTitle: true,
  showDescription: true,
  linkDescription: true
}
