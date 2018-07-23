<template>
  <div>
    <div class="title">
      <h1>Article Aggregator</h1>
    </div>
    <div v-if="responseError">
      <p>{{ responseError }}</p>
    </div>

    <ArticleCards v-if="responseData" :responseData="responseData" />
  </div>
</template>

<script>
import axios from 'axios';
import ArticleCards from '@/components/ArticleCard/ArticleCards';

export default {
  components: {
    ArticleCards
  },
  data() {
    return {
      responseData: [],
      responseError: ''
    };
  },
  created() {
    let page = 1;
    const API_KEY = '0b9078098c96403caaddd24cebb47681';
    const API_URL = `https://newsapi.org/v2/top-headlines?country=us&page=${page}&apiKey=${API_KEY}`;
    let authorLable = 'Author: ';
    axios
      .get(API_URL)
      .then(response => {
        response.data.articles.forEach(element => {
          this.responseData.push(
            {
              'url': element.url,
              'image': element.urlToImage,
              'description': element.description,
              'author': element.author,
              'authorLabel': authorLable,
              'title': element.title
            }
          );
        });
      })
      .catch(error => {
        this.responseError = error.message;
      });
  }
};
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
	.card__description {
		padding: 0 0.5rem;
	}

	@media screen and (min-width: px-to-em(860)) {
		flex: 0 1 calc(50% - 1em);
	}
}
</style>
