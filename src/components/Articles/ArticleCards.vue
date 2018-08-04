<template>
  <section
    :id="options.articles.ID"
    :class="options.articles.classes"
    v-bind="options.articles.attributes"
    v-if="articles">
    <article class="article__card" v-if="articles" v-for="(article, index) in articles" :key="index">
      <card-image :article="article" :options="options" />
      <card-author :article="article" :options="options" />
      <card-date :article="article" :options="options" />
      <card-title :article="article" :options="options" />
      <card-description :article="article" :options="options" />
      <card-readMore :article="article" :options="options" />
    </article>
  </section>
</template>

<script>
import Image from './_partials/Image'
import Author from './_partials/Author'
import Date from './_partials/Date'
import Title from './_partials/Title'
import Description from './_partials/Description'
import ReadMore from './_partials/ReadMore'

export default {
  name: 'article-cards',
  components: {
    'card-image': Image,
    'card-author': Author,
    'card-date': Date,
    'card-title': Title,
    'card-description': Description,
    'card-readMore': ReadMore
  },
  props: {
    articles: {
      type: Array,
      required: true,
      default: () => []
    },
    options: {
      type: Object,
      required: false,
      default: () => {}
    }
  }
}
</script>
