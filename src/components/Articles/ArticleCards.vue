<template>
  <section class="articles" >
    <article class="article__card" v-if="responseData" v-for="(data, index) in responseData" :key="index">
      <a href="data.url">
        <picture class="card__image">
          <img :src="data.image" :alt="data.description">
        </picture>
      </a>
      <p class="card__author" v-if="data.author">
        <small><span v-if="data.authorLabel">{{ data.authorLabel }}</span>{{ data.author }}</small>
      </p>
      <h3 class="card__title" v-if="data.title"><a :href="data.url">{{ data.title }}</a></h3>
      <p class="card__description" v-if="data.description">{{ data.description }}</p>
    </article>
  </section>
</template>

<script>
export default {
  props: {
    responseData: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>
