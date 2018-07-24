import Vue from 'vue';
import Router from 'vue-router';

// Views
import Home from '@/views/Home.vue';
import AutocompleteField from '@/views/AutocompleteField.vue';
import ArticleAggregator from '@/views/ArticleAggregator.vue';
import MobileMenu from '@/views/MobileMenu.vue';

Vue.use(Router);

const baseURL = (process.env.NODE_ENV === 'production') ? '/vuejs-sandbox/dist/' : '';

export default new Router({
	base: baseURL,
  routes: [
    { path: '/', name: 'Home', component: Home, nav: true },
    { path: '/autocomplete-field', name: 'Autocomplete Field', component: AutocompleteField, nav: true },
		{ path: '/article-aggregator', name: 'Article Aggregator', component: ArticleAggregator, nav: true },
		{ path: '/mobile-menu', name: 'Mobile Menu', component: MobileMenu, nav: true, exclude: true },
		{ path: '*', redirect: '/' }
	]
});
