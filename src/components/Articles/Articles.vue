<template>
  <div>
    <ArticleCards v-if="hasArticles" :articles="articles" />
  </div>
</template>

<script>
import ArticleCards from './ArticleCards'
import { mapGetters } from 'vuex'

export default {
  components: {
    ArticleCards
  },
  computed: {
    ...mapGetters('articles', [
      'articles',
      'hasArticles'
    ])
  },
  mounted() {
    if (!this.hasArticles) {
      this.$store.dispatch('articles/getArticles')
    }
  }
}
</script>
