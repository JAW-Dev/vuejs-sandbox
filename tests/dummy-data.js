export const article = {
  'author': 'author',
  'authorLabel': 'authorLabel',
  'description': 'description',
  'image': 'image',
  'title': 'title',
  'url': 'url',
  'date': 'date',
  'dateLabel': 'dateLabel'
}

export const articles = [article]

export const options = {
  articles: {
    ID: 'articles',
    classes: 'articles',
    attributes: {}
  },
  image: {
    showImage: true,
    linkImage: true,
    imageLink: {
      ID: 'card__image-link',
      classes: 'card__image-link',
      attributes: {}
    }
  },
  showAuthor: true,
  linkAuthor: true,
  authorLabel: 'Author: ',
  showDate: true,
  linkDate: true,
  dateLabel: 'Published On: ',
  showTitle: true,
  linkTitle: true,
  showDescription: true,
  linkDescription: true
}
