<template>
  <p
    :id="options.date.ID"
    :class="options.date.classes"
    v-bind="options.date.attributes"
    v-if="options.date.show && getSource(article[options.date.source])">
    <span
      :id="options.date.label.ID"
      :class="options.date.label.classes"
      v-bind="options.date.label.attributes"
      v-if="options.date.label.show">{{ options.date.label.labelText }}</span>
    <card-link
      :theId="options.date.link.ID"
      :classes="options.date.link.classes"
      :attributes="options.date.link.attributes"
      :theHref="getUrl(options.sources.dateUrl)"
      :renderLink="renderElement(getUrl(options.sources.dateUrl) && options.date.link.show)">
        <span
          slot="content"
          :id="options.date.text.ID"
          :class="options.date.text.classes"
          v-bind="options.date.text.attributes">
            {{
              getSource(article[options.date.source]) |
              dateFormat(
                options.date.format.doFormat,
                options.date.format.locale,
                options.date.format.options
              )
            }}
          </span>
    </card-link>
  </p>
</template>

<script>
import { components, props, methods, filters } from '@/mixins/cardElements'

export default {
  name: 'card-date',
  mixins: [components, props, methods, filters]
}
</script>
