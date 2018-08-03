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
          showImage: true,
          ID: '',
          classes: '',
          attributes: {},
          link: {
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
          showAuthor: true,
          linkAuthor: true,
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
        showDate: true,
        linkDate: true,
        dateLabel: 'Published On: ',
        showTitle: true,
        linkTitle: true,
        showDescription: true,
        linkDescription: true
      }, this.options)
    }
  }
}
</script>
