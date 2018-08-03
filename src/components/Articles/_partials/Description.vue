<template>
  <p
    :id="options.description.ID"
    :class="options.description.classes"
    v-bind="options.description.attributes"
    v-if="options.description.show && article[options.description.source]">
    <card-link
      :theId="options.description.link.ID"
      :classes="options.description.link.classes"
      :attributes="options.description.link.attributes"
      :theHref="article[options.description.link.source]"
      :renderLink="renderElement(article[options.description.link.source] && options.description.link.show)">
      <span
        slot="content"
        :id="options.description.text.ID"
        :class="options.description.text.classes"
        v-bind="options.description.text.attributes">{{ article[options.description.source] }}</span>
    </card-link>
  </p>
</template>

<script>
import { components, props, methods } from '@/mixins/cardElements'

export default {
  name: 'card-description',
  mixins: [components, props, methods]
}
</script>
