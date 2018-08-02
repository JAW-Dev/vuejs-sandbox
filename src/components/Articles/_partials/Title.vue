<template>
  <h3 class="card__title" v-if="article.title">
    <a class="card__title-link" v-if="article.url" :href="article.url">{{ article.title }}</a>
  </h3>
</template>

<script>
export default {
  name: 'card-title',
  components: {},
  props: {
    article: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
