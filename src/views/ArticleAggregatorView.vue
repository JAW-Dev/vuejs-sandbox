<template>
  <div>
    <div class="title">
      <h1>Article Aggregator</h1>
    </div>
    <Articles v-if="hasArticles" :articles="articles" :options="options"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Articles from '@/components/Articles/Articles'

export default {
  name: 'articles',
  components: {
    Articles
  },
  data() {
    return {
      options: {
        articles: {
          ID: 'articles',
          classes: 'articles test',
          attributes: {'data-test': 'articles'}
        },
        image: {
          showImage: true,
          ID: 'card__image',
          classes: 'card__image',
          attributes: {'data-test': 'card__image'},
          link: {
            showLink: true,
            ID: 'card__image-link',
            classes: 'card__image-link',
            attributes: {'data-test': 'card__image-link'}
          },
          wrapper: {
            ID: 'card__image-wrapper',
            classes: 'card__image-wrapper',
            attributes: {'data-test': 'card__image-wrapper'}
          }
        },
        author: {
          showAuthor: true,
          ID: 'card__author',
          classes: 'card__author',
          attributes: {'data-test': 'card__author'},
          label: {
            showLabel: true,
            labelText: 'Author: ',
            ID: 'card__author-label',
            classes: 'card__author-label',
            attributes: {'data-test': 'card__author-label'}
          },
          link: {
            showLink: true,
            ID: 'card__author-link',
            classes: 'card__author-link',
            attributes: {'data-test': 'card__author-link'}
          },
          text: {
            ID: 'card__author-text',
            classes: 'card__author-text',
            attributes: {'data-test': 'card__author-text'}
          }
        },
        showDate: true,
        linkDate: true,
        dateLabel: 'Published On: ',
        showTitle: true,
        linkTitle: true,
        showDescription: true,
        linkDescription: true
      }
    }
  },
  computed: {
    ...mapGetters('articles', [
      'articles',
      'hasArticles'
    ])
  },
  mounted() {
    if (!this.hasArticles) {
      this.$store.dispatch('articles/getArticles')
    }
  }
}
</script>

<style lang="scss">
.articles {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
  @media screen and (min-width: 52em) {
    margin: auto;
    max-width: px-to-em(1200);
  }
}
.article__card {
  margin: 0.5rem;
  background-color: $white;
  border: 1px solid rgba(46, 46, 46, 0.3);
  box-shadow: 0 0 px-to-em(8) px-to-em(-2) rgba(46, 46, 46, 0.5);

  a {
    color: inherit;
    text-decoration: none;
  }

  .card__image {
    display: block;
    max-height: px-to-em(300);
    margin-bottom: 1rem;
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  .img {
    position: absolute;
    max-width: 100%;
    width: 100%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50%);
  }

  .card__title,
  .card__author,
  .card__date,
  .card__description {
    padding: 0 0.5rem;
  }

  @media screen and (min-width: px-to-em(860)) {
    flex: 0 1 calc(50% - 1em);
  }
}
</style>
