import Vue from 'vue';
import Router from 'vue-router';

// Views
import Home from '@/views/Home.vue';
import AutocompleteField from '@/views/AutocompleteField.vue';
import ArticleAggregator from '@/views/ArticleAggregator.vue';

Vue.use(Router);

const baseURL = (process.env.NODE_ENV === 'production') ? 'https://jawittdesigns.github.io/vuejs-sandbox/dist/' : '';

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/autocomplete-field', name: 'Autocomplete Field', component: AutocompleteField },
    { path: '/article-aggregator', name: 'Article Aggregator', component: ArticleAggregator }
	],
	base: baseURL
});
