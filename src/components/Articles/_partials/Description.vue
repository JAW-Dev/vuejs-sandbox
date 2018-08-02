<template>
  <p class="card__description" v-if="article.description">{{ article.description }}</p>
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
