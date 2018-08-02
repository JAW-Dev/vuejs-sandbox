<template>
  <p class="card__date" v-if="article.date">
    <span class="card__date-label" v-if="article.dateLabel">{{ article.dateLabel }}</span>{{ article.date }}
  </p>
</template>

<script>
export default {
  name: 'card-date',
  components: {},
  props: {
    article: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
