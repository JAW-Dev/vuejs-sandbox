<template>
  <article-cards v-if="articles" :articles="articles" :options="mergedOptions"/>
</template>

<script>
import ArticleCards from './ArticleCards'
import { props, mergedOptions } from '@/mixins/cardElements'

export default {
  name: 'articles-cards',
  components: {
    'article-cards': ArticleCards
  },
  mixins: [props, mergedOptions],
  props: {
    articles: {
      type: Array,
      default: () => []
    }
  }
}
</script>
