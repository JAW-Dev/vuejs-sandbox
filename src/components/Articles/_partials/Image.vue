<template>
  <card-link
    :id="options.image.imageLink.ID"
    :class="options.image.imageLink.classes"
    v-bind="options.articles.attributes"
    :href="article.url"
    :renderLink="renderLink"
    :renderElement="renderElement">
    <picture class="card__image-wrapper" slot="content" v-if="renderImage">
      <img class="card__image" :src="article.image" :alt="article.description" v-if="renderImage">
    </picture>
  </card-link>
</template>

<script>
import Link from './Link'

export default {
  name: 'card-image',
  components: {
    'card-link': Link
  },
  props: {
    article: {
      type: Object,
      default: () => {}
    },
    options: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  computed: {
    renderLink() {
      if (this.article.image && this.options.image.linkImage) {
        return true
      }
      return false
    },
    renderElement() {
      if (this.article.image && !this.options.image.linkImage && this.options.image.showImage) {
        return true
      }
      return false
    },
    renderImage() {
      if (this.article.image && this.options.image.showImage) {
        return true
      }
      return false
    }
  }
}
</script>
