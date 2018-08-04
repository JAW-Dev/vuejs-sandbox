<template>
  <article-cards v-if="articles" :articles="articles" :options="assignedOptions"/>
</template>

<script>
import ArticleCards from './ArticleCards'
import { props, computed } from '@/mixins/cardElements'

export default {
  name: 'articles-cards',
  components: {
    'article-cards': ArticleCards
  },
  mixins: [props, computed],
  props: {
    articles: {
      type: Array,
      default: () => []
    }
  }
}
</script>
