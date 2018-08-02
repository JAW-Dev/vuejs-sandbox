<template>
  <card-link
    :id="options.image.imageLink.ID"
    :class="options.image.imageLink.classes"
    v-bind="options.image.imageLink.attributes"
    :href="article.url"
    :renderLink="renderLink"
    :renderElement="renderElement">
    <picture
      :id="options.image.imageWrapper.ID"
      :class="options.image.imageWrapper.classes"
      v-bind="options.image.imageWrapper.attributes"
      v-if="renderImage"
      slot="content">
      <img
        :id="options.image.imageCard.ID"
        :class="options.image.imageCard.classes"
        v-bind="options.image.imageCard.attributes"
        :src="article.image"
        :alt="article.description"
        v-if="renderImage">
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
