<template>
  <div>
    <div v-if="!hasArticles">
      <p>{{ error }}</p>
    </div>
    <ArticleCards v-if="hasArticles" :responseData="articles" />
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
      'error',
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
