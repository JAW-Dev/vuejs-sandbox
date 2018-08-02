<template>
  <section class="articles" v-if="articles">
    <article class="article__card" v-if="articles" v-for="(article, index) in articles" :key="index">
      <card-image :article="article"/>
      <card-author :article="article"/>
      <card-date :article="article"/>
      <card-title :article="article"/>
      <card-description :article="article"/>
    </article>
  </section>
</template>

<script>
import Image from './_partials/Image'
import Author from './_partials/Author'
import Date from './_partials/Date'
import Title from './_partials/Title'
import Description from './_partials/Description'

export default {
  name: 'article-cards',
  components: {
    'card-image': Image,
    'card-author': Author,
    'card-date': Date,
    'card-title': Title,
    'card-description': Description
  },
  props: {
    articles: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      options: {
        showImage: true,
        linkImage: true,
        showAuthor: true,
        linkAuthor: true,
        authorLabel: 'Author: ',
        showDate: true,
        linkDate: true,
        dateLabel: 'Published On: ',
        showTitle: true,
        linkTitle: true,
        showDescription: true,
        linkDescription: true
      }
    }
  }
}
</script>
