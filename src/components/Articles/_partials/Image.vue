<template>
  <card-link
    :theId="options.image.link.ID"
    :classes="options.image.link.classes"
    :attributes="options.image.link.attributes"
    :theHref="article.url"
    :renderLink="renderElement(article.image && options.image.link.showLink)">
    <picture
      :id="options.image.wrapper.ID"
      :class="options.image.wrapper.classes"
      v-bind="options.image.wrapper.attributes"
      v-if="this.article.image && this.options.image.showImage"
      slot="content">
      <img
        :id="options.image.ID"
        :class="options.image.classes"
        v-bind="options.image.attributes"
        :src="article.image"
        :alt="article.description">
    </picture>
  </card-link>
</template>

<script>
import { renderElement, props, link } from '@/mixins/cardElements'

export default {
  name: 'card-image',
  mixins: [renderElement, props, link]
}
</script>
