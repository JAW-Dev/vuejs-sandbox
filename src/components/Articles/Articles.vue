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
          showImage: true,
          linkImage: true,
          imageLink: {
            ID: '',
            classes: '',
            attributes: {}
          },
          imageWrapper: {
            ID: '',
            classes: '',
            attributes: {}
          },
          imageCard: {
            ID: '',
            classes: '',
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
      }, this.options)
    }
  }
}
</script>
