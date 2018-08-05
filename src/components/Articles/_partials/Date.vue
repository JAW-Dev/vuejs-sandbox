<template>
  <p
    :id="options.date.ID"
    :class="options.date.classes"
    v-bind="options.date.attributes"
    v-if="isSet(options.date.show) && isSet(article[options.sources.date])">
    <span
      :id="options.date.label.ID"
      :class="options.date.label.classes"
      v-bind="options.date.label.attributes"
      v-if="options.date.label.show">{{ isSet(options.date.label.labelText) }}</span>
    <card-link
      :theId="options.date.link.ID"
      :classes="options.date.link.classes"
      :attributes="options.date.link.attributes"
      :theHref="getUrl(options.sources.dateUrl)"
      :renderLink="renderElement(getUrl(options.sources.dateUrl) && isSet(options.date.link.show))">
        <span
          slot="content"
          :id="options.date.text.ID"
          :class="options.date.text.classes"
          v-bind="options.date.text.attributes">
            {{
              isSet(article[options.sources.date]) |
              dateFormat(
                isSet(options.date.format.doFormat),
                isSet(options.date.format.locale),
                isSet(options.date.format.options)
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
