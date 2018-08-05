<template>
  <section
    :id="options.articles.section.ID"
    :class="options.articles.section.classes"
    v-bind="options.articles.section.attributes"
    v-if="articles">
    <article
      :id="options.articles.article.ID"
      :class="options.articles.article.classes"
      v-bind="options.articles.article.attributes"
      v-if="articles" v-for="(article, index) in articles" :key="index">
      <header
        :id="options.articles.header.ID"
        :class="options.articles.header.classes"
        v-bind="options.articles.header.attributes">
        <card-image :article="article" :options="options" />
        <card-author :article="article" :options="options" />
        <card-date :article="article" :options="options" />
        <card-title :article="article" :options="options" />
      </header>
      <card-description :article="article" :options="options" />
      <footer
        :id="options.articles.footer.ID"
        :class="options.articles.footer.classes"
        v-bind="options.articles.footer.attributes">
        <card-readMore :article="article" :options="options" />
      </footer>
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
