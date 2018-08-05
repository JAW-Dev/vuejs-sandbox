<template>
  <card-link
    :theId="options.image.link.ID"
    :classes="options.image.link.classes"
    :attributes="options.image.link.attributes"
    :theHref="getUrl(options.sources.imageUrl)"
    :renderLink="renderElement(getUrl(options.sources.imageUrl) && isSet(options.image.link.show))">
    <figure
      :id="options.image.wrapper.ID"
      :class="options.image.wrapper.classes"
      v-bind="options.image.wrapper.attributes"
      v-if="article[options.sources.image] && options.image.show"
      slot="content">
      <img
        :id="options.image.ID"
        :class="options.image.classes"
        v-bind="options.image.attributes"
        :src="article[options.sources.image]"
        :alt="article.description"
        v-if="article[options.sources.image]">
        <figcaption
          :id="options.image.caption.ID"
          :class="options.image.caption.classes"
          v-bind="options.image.caption.attributes"
          v-if="options.image.caption.show">
          {{ isSet(article[options.sources.imageCaption]) }}
        </figcaption>
    </figure>
  </card-link>
</template>

<script>
import { components, props, methods } from '@/mixins/cardElements'

export default {
  name: 'card-image',
  mixins: [components, props, methods]
}
</script>
