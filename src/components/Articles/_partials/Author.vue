<template>
  <p class="card__author" v-if="article.author">
    <span class="card__author-label" v-if="article.authorLabel">{{ article.authorLabel }}</span>{{ article.author }}
  </p>
</template>

<script>
export default {
  name: 'card-author',
  components: {},
  props: {
    article: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
