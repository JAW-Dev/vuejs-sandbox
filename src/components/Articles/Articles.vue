<template>
  <ArticleCards v-if="articles" :articles="articles" />
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
    }
  }
}
</script>
