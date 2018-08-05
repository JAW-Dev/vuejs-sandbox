<template>
  <p
    :id="options.author.ID"
    :class="options.author.classes"
    v-bind="options.author.attributes"
    v-if="isSet(options.author.show) && isSet(article[options.sources.author])">
    <span
      :id="options.author.label.ID"
      :class="options.author.label.classes"
      v-bind="options.author.label.attributes"
      v-if="options.author.label.show">{{ isSet(options.author.label.labelText) }}</span>
    <card-link
      :theId="options.author.link.ID"
      :classes="options.author.link.classes"
      :attributes="options.author.link.attributes"
      :theHref="getUrl(options.sources.authorUrl)"
      :renderLink="renderElement(getUrl(options.sources.authorUrl) && isSet(options.author.link.show))">
      <span
        slot="content"
        :id="options.author.text.ID"
        :class="options.author.text.classes"
        v-bind="options.author.text.attributes">{{ isSet(article[options.sources.author]) }}</span>
    </card-link>
  </p>
</template>

<script>
import { components, props, methods } from '@/mixins/cardElements'

export default {
  name: 'card-author',
  mixins: [components, props, methods]
}
</script>
