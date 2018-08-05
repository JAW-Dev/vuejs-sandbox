import Link from '@/components/Articles/_partials/Link'
import merge from 'deepmerge'

export const components = {
  components: {
    'card-link': Link
  }
}

export const props = {
  props: {
    article: {
      type: Object,
      default: () => {}
    },
    options: {
      type: Object,
      required: false,
      default: () => {}
    }
  }
}

export const methods = {
  methods: {
    renderElement(conditional) {
      if (conditional) {
        return true
      }
      return false
    },
    getSource(source) {
      if (source) {
        return source
      }
      return ''
    }
  }
}

export const filters = {
  filters: {
    dateFormat(value, format, locale, options) {
      // Check if string is valid date representation
      if (Date.parse(value)) {
        // Convert string to date format
        let date = new Date(value)
        if (value) {
          // If format is set return the formated date,
          // else return the value string
          return (format) ? date.toLocaleDateString(locale, options) : value
        }
      }
      return value
    }
  }
}

export const mergedOptions = {
  data() {
    return {
      defaults: {
        articles: {
          ID: 'articles',
          classes: 'articles',
          attributes: {}
        },
        image: {
          show: true,
          ID: 'card__image',
          classes: 'card__image',
          attributes: {'data-test': 'card__image'},
          link: {
            show: true,
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
          source: '',
          show: true,
          ID: 'card__author',
          classes: 'card__author',
          attributes: {},
          label: {
            show: true,
            labelText: '',
            ID: 'card__author-label',
            classes: 'card__author-label',
            attributes: {}
          },
          link: {
            source: '',
            show: false,
            ID: 'card__author-link',
            classes: 'card__author-link',
            attributes: {}
          },
          text: {
            ID: 'card__author-text',
            classes: 'card__author-text',
            attributes: {}
          }
        },
        date: {
          source: '',
          show: true,
          ID: 'card__date',
          classes: 'card__date',
          attributes: {},
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
            labelText: '',
            ID: 'card__date-label',
            classes: 'card__date-label',
            attributes: {}
          },
          link: {
            source: '',
            show: false,
            ID: 'card__date-link',
            classes: 'card__date-link',
            attributes: {}
          },
          text: {
            ID: 'card__date-text',
            classes: 'card__date-text',
            attributes: {}
          }
        },
        title: {
          source: '',
          show: true,
          ID: 'card__title',
          classes: 'card__title',
          attributes: {},
          link: {
            source: '',
            show: true,
            ID: 'card__title-link',
            classes: 'card__title-link',
            attributes: {}
          },
          text: {
            ID: 'card__title-text',
            classes: 'card__title-text',
            attributes: {}
          }
        },
        description: {
          source: '',
          show: true,
          ID: 'card__description',
          classes: 'card__description',
          attributes: {},
          link: {
            source: '',
            show: false,
            ID: 'card__description-link',
            classes: 'card__description-link',
            attributes: {}
          },
          text: {
            ID: 'card__description-text',
            classes: 'card__description-text',
            attributes: {}
          }
        },
        readMore: {
          show: true,
          moreText: 'Read More',
          ID: 'card__readMore',
          classes: 'card__readMore',
          attributes: {},
          link: {
            source: '',
            show: true,
            ID: 'card__readMore-link',
            classes: 'card__readMore-link',
            attributes: {}
          },
          text: {
            ID: 'card__readMore-text',
            classes: 'card__readMore-text',
            attributes: {}
          }
        }
      }
    }
  },
  computed: {
    assignedOptions() {
      return merge.all([this.defaults, this.options])
    }
  }
}
