export const article = {
  'image': 'image',
  'imageCaption': 'title',
  'author': 'author',
  'date': '2018-08-03T17:32:14Z',
  'title': 'title',
  'description': 'description',
  'url': 'url',
  'imageUrl': 'imageUrl',
  'authorUrl': 'authorLink',
  'dateUrl': 'dateUrl',
  'titleUrl': 'titleUrl',
  'descriptionUrl': 'descriptionUrl',
  'readMoreUrl': 'readMoreUrl'
}

export const articles = [article]

export const options = {
  sources: {
    image: 'image',
    imageCaption: 'title',
    author: 'author',
    date: 'date',
    title: 'title',
    description: 'description',
    url: 'url',
    imageUrl: 'imageUrl',
    authorUrl: 'authorUrl',
    dateUrl: 'dateUrl',
    titleUrl: 'titleUrl',
    descriptionUrl: 'descriptionUrl',
    readMoreUrl: 'readMoreUrl'
  },
  articles: {
    ID: 'articles',
    classes: 'articles',
    attributes: {'data-test': 'articles'}
  },
  image: {
    source: 'image',
    show: true,
    ID: 'card__image',
    classes: 'card__image',
    attributes: {'data-test': 'card__image'},
    link: {
      source: 'url',
      show: true,
      ID: 'card__image-link',
      classes: 'card__image-link',
      attributes: {'data-test': 'card__image-link'}
    },
    wrapper: {
      ID: 'card__image-wrapper',
      classes: 'card__image-wrapper',
      attributes: {'data-test': 'card__image-wrapper'}
    },
    caption: {
      show: true,
      ID: 'card__image-caption',
      classes: 'card__image-caption',
      attributes: {'data-test': 'card__image-caption'}
    }
  },
  author: {
    show: true,
    ID: 'card__author',
    classes: 'card__author',
    attributes: {'data-test': 'card__author'},
    label: {
      show: true,
      labelText: 'Author: ',
      ID: 'card__author-label',
      classes: 'card__author-label',
      attributes: {'data-test': 'card__author-label'}
    },
    link: {
      show: true,
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
    show: true,
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
      show: true,
      labelText: 'Published On: ',
      ID: 'card__date-label',
      classes: 'card__date-label',
      attributes: {'data-test': 'card__date-label'}
    },
    link: {
      source: 'dateUrl',
      show: true,
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
  title: {
    source: 'title',
    show: true,
    ID: 'card__title',
    classes: 'card__title',
    attributes: {'data-test': 'card__title'},
    link: {
      source: 'url',
      show: true,
      ID: 'card__title-link',
      classes: 'card__title-link',
      attributes: {'data-test': 'card__title-link'}
    },
    text: {
      ID: 'card__title-text',
      classes: 'card__title-text',
      attributes: {'data-test': 'card__title-text'}
    }
  },
  description: {
    show: true,
    ID: 'card__description',
    classes: 'card__description',
    attributes: {'data-test': 'card__description'},
    link: {
      show: true,
      ID: 'card__description-link',
      classes: 'card__description-link',
      attributes: {'data-test': 'card__description-link'}
    },
    text: {
      ID: 'card__description-text',
      classes: 'card__description-text',
      attributes: {'data-test': 'card__description-text'}
    }
  },
  readMore: {
    show: true,
    moreText: 'Read More',
    ID: 'card__readMore',
    classes: 'card__readMore',
    attributes: {'data-test': 'card__readMore'},
    link: {
      source: 'url',
      show: true,
      ID: 'card__readMore-link',
      classes: 'card__readMore-link',
      attributes: {'data-test': 'card__readMore-link'}
    },
    text: {
      ID: 'card__readMore-text',
      classes: 'card__readMore-text',
      attributes: {'data-test': 'card__readMore-text'}
    }
  }
}
