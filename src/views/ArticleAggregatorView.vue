<template>
  <div>
    <div class="title">
      <h1>Article Aggregator</h1>
    </div>
    <Articles v-if="hasArticles" :articles="articles"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Articles from '@/components/Articles/Articles'

export default {
  components: {
    Articles
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

<style lang="scss">
.articles {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
  @media screen and (min-width: 52em) {
    margin: auto;
    max-width: px-to-em(1200);
  }
}
.article__card {
  margin: 0.5rem;
  background-color: $white;
  border: 1px solid rgba(46, 46, 46, 0.3);
  box-shadow: 0 0 px-to-em(8) px-to-em(-2) rgba(46, 46, 46, 0.5);

  a {
    color: inherit;
    text-decoration: none;
  }

  .card__image {
    display: block;
    max-height: px-to-em(300);
    margin-bottom: 1rem;
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  .img {
    position: absolute;
    max-width: 100%;
    width: 100%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50%);
  }

  .card__title,
  .card__author,
  .card__date,
  .card__description {
    padding: 0 0.5rem;
  }

  @media screen and (min-width: px-to-em(860)) {
    flex: 0 1 calc(50% - 1em);
  }
}
</style>
