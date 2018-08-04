<template>
  <article-cards v-if="articles" :articles="articles" :options="assignedOptions"/>
</template>

<script>
import ArticleCards from './ArticleCards'

export default {
  name: 'articles-cards',
  components: {
    'article-cards': ArticleCards
  },
  props: {
    articles: {
      type: Array,
      default: () => []
    },
    options: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  computed: {
    assignedOptions() {
      return Object.assign({
        articles: {
          ID: 'articles',
          classes: 'articles test',
          attributes: {}
        },
        image: {
          source: '',
          show: true,
          ID: 'card__image',
          classes: 'card__image',
          attributes: {},
          link: {
            source: '',
            show: true,
            ID: 'card__image-link',
            classes: 'card__image-link',
            attributes: {}
          },
          wrapper: {
            ID: 'card__image-wrapper',
            classes: 'card__image-wrapper',
            attributes: {}
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
            labelText: 'Author: ',
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
      }, this.options)
    }
  }
}
</script>
