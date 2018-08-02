<template>
  <ArticleCards v-if="articles" :articles="articles" :options="assignedOptions"/>
</template>

<script>
import ArticleCards from './ArticleCards'

export default {
  name: 'articles',
  components: {
    ArticleCards
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
            ID: 'articles',
            classes: 'card__image-link',
            attributes: {'data-test': 'test'}
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
