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
          ID: '',
          classes: '',
          attributes: {}
        },
        image: {
          source: '',
          show: true,
          ID: '',
          classes: '',
          attributes: {},
          link: {
            source: '',
            show: true,
            ID: '',
            classes: '',
            attributes: {}
          },
          wrapper: {
            ID: '',
            classes: '',
            attributes: {}
          }
        },
        author: {
          source: '',
          show: true,
          ID: '',
          classes: '',
          attributes: {},
          label: {
            show: true,
            labelText: 'Author: ',
            ID: '',
            classes: '',
            attributes: {}
          },
          link: {
            source: 'authorUrl',
            show: true,
            ID: '',
            classes: '',
            attributes: {}
          },
          text: {
            ID: '',
            classes: '',
            attributes: {}
          }
        },
        date: {
          source: '',
          show: true,
          ID: '',
          classes: '',
          attributes: {},
          format: {
            doFormat: true,
            locale: 'en-US',
            options: {}
          },
          label: {
            show: true,
            labelText: '',
            ID: '',
            classes: '',
            attributes: {}
          },
          link: {
            source: '',
            show: true,
            ID: '',
            classes: '',
            attributes: {}
          },
          text: {
            ID: '',
            classes: '',
            attributes: {}
          }
        },
        title: {
          source: '',
          show: true,
          ID: '',
          classes: '',
          attributes: {},
          link: {
            source: '',
            show: true,
            ID: '',
            classes: '',
            attributes: {}
          },
          text: {
            ID: '',
            classes: '',
            attributes: {}
          }
        },
        description: {
          source: '',
          show: true,
          ID: '',
          classes: '',
          attributes: {},
          link: {
            source: '',
            show: true,
            ID: '',
            classes: '',
            attributes: {}
          },
          text: {
            ID: '',
            classes: '',
            attributes: {}
          }
        }
      }, this.options)
    }
  }
}
</script>
