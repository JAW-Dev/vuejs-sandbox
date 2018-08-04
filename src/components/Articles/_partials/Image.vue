<template>
  <card-link
    :theId="options.image.link.ID"
    :classes="options.image.link.classes"
    :attributes="options.image.link.attributes"
    :theHref="getSource(article[options.image.link.source])"
    :renderLink="renderElement(options.image.link.show)">
    <picture
      :id="options.image.wrapper.ID"
      :class="options.image.wrapper.classes"
      v-bind="options.image.wrapper.attributes"
      v-if="getSource(article[options.image.source]) && options.image.show"
      slot="content">
      <img
        :id="options.image.ID"
        :class="options.image.classes"
        v-bind="options.image.attributes"
        :src="getSource(article[options.image.source])"
        :alt="article.description">
    </picture>
  </card-link>
</template>

<script>
import { components, props, methods } from '@/mixins/cardElements'

export default {
  name: 'card-image',
  mixins: [components, props, methods]
}
</script>
