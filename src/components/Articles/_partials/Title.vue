<template>
  <h3
    :id="options.title.ID"
    :class="options.title.classes"
    v-bind="options.title.attributes"
    v-if="options.title.show && article[options.title.source]">
    <card-link
      :theId="options.title.link.ID"
      :classes="options.title.link.classes"
      :attributes="options.title.link.attributes"
      :theHref="article[options.title.link.source]"
      :renderLink="renderElement(article[options.title.link.source] && options.title.link.show)">
      <span
        slot="content"
        :id="options.title.text.ID"
        :class="options.title.text.classes"
        v-bind="options.title.text.attributes">{{ article[options.title.source] }}</span>
    </card-link>
  </h3>
</template>

<script>
import { components, props, methods } from '@/mixins/cardElements'

export default {
  name: 'card-author',
  mixins: [components, props, methods]
}
</script>
