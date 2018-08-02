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
      required: false
    }
  },
  computed: {
    assignedOptions() {
      return Object.assign({
        showImage: true,
        linkImage: true,
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
