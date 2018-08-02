<template>
  <ArticleCards v-if="articles" :articles="articles" />
</template>

<script>
import ArticleCards from './ArticleCards'

export default {
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
