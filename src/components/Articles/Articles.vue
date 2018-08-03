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
          showImage: true,
          ID: '',
          classes: '',
          attributes: {},
          link: {
            source: '',
            showLink: true,
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
          showAuthor: true,
          ID: '',
          classes: '',
          attributes: {},
          label: {
            showLabel: true,
            labelText: 'Author: ',
            ID: '',
            classes: '',
            attributes: {}
          },
          link: {
            source: 'authorUrl',
            showLink: true,
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
          showDate: true,
          ID: '',
          classes: '',
          attributes: {},
          format: {
            doFormat: true,
            locale: 'en-US',
            options: {}
          },
          label: {
            showLabel: true,
            labelText: '',
            ID: '',
            classes: '',
            attributes: {}
          },
          link: {
            source: '',
            showLink: true,
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
        showTitle: true,
        linkTitle: true,
        showDescription: true,
        linkDescription: true
      }, this.options)
    }
  }
}
</script>
