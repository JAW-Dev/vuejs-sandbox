<template>
  <h3
    :id="options.title.ID"
    :class="options.title.classes"
    v-bind="options.title.attributes"
    v-if="isSet(options.title.show) && isSet(article[options.sources.title])">
    <card-link
      :theId="options.title.link.ID"
      :classes="options.title.link.classes"
      :attributes="options.title.link.attributes"
      :theHref="getUrl(options.sources.titleUrl)"
      :renderLink="renderElement(getUrl(options.sources.titleUrl) && isSet(options.title.link.show))">
      <span
        slot="content"
        :id="options.title.text.ID"
        :class="options.title.text.classes"
        v-bind="options.title.text.attributes">{{ isSet(article[options.sources.title]) }}</span>
    </card-link>
  </h3>
</template>

<script>
import { components, props, methods } from '@/mixins/cardElements'

export default {
  name: 'card-title',
  mixins: [components, props, methods]
}
</script>
