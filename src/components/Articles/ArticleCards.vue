<template>
  <section class="articles" v-if="articles">
    <article class="article__card" v-if="articles" v-for="(article, index) in articles" :key="index">
      <a class="card__image-link" v-if="article.url" :href="article.url">
        <picture class="card__image-wrapper" v-if="article.image">
          <img class="card__image" v-if="article.image" :src="article.image" :alt="article.description">
        </picture>
      </a>
      <p class="card__author" v-if="article.author">
        <span class="card__author-label" v-if="article.authorLabel">{{ article.authorLabel }}</span>{{ article.author }}
      </p>
      <h3 class="card__title" v-if="article.title">
        <a class="card__title-link" v-if="article.url" :href="article.url">{{ article.title }}</a>
      </h3>
      <p class="card__description" v-if="article.description">{{ article.description }}</p>
    </article>
  </section>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>
