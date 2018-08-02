<template>
  <a class="card__image-link" v-if="article.url || article.image" :href="article.url">
    <picture class="card__image-wrapper" v-if="article.image">
      <img class="card__image" v-if="article.image" :src="article.image" :alt="article.description">
    </picture>
  </a>
</template>

<script>
export default {
  name: 'card-image',
  components: {},
  props: {
    article: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
