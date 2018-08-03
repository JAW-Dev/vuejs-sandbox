<template>
  <p
    :id="options.author.ID"
    :class="options.author.classes"
    v-bind="options.author.attributes"
    v-if="article.author && options.author.showAuthor">
    <span
      :id="options.author.label.ID"
      :class="options.author.label.classes"
      v-bind="options.author.label.attributes"
      v-if="options.author.label.showLabel">{{ options.author.label.labelText }}</span>
    <card-link
      :theId="options.author.link.ID"
      :classes="options.author.link.classes"
      :attributes="options.author.link.attributes"
      :theHref="article.authorUrl"
      :renderLink="renderElement(article.authorUrl && options.author.link.showLink)">
      <span
        slot="content"
        :id="options.author.text.ID"
        :class="options.author.text.classes"
        v-bind="options.author.text.attributes">{{ article.author }}</span>
    </card-link>
  </p>
</template>

<script>
import { renderElement, props, link } from '@/mixins/cardElements'

export default {
  name: 'card-author',
  mixins: [renderElement, props, link]
}
</script>
