import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store/store';
import '@/registerServiceWorker';

import { mapState, mapGetters, mapMutations } from 'vuex';

new Vue({
  router,
	store,
	render: h => h(App),
	methods: {
		...mapMutations('excludeNav', [
			'excludeNavTrue',
			'excludeNavFalse'
		]),
		excludeNavBar() {
			this.excludeNavFalse()
			this.getRouteData.forEach(item => {
				if( item.path === this.$route.path && item.exclude ) {
					this.excludeNavTrue()
				}
			})
		}
	},
	computed: {
		...mapState('excludeNav', [
			'excludeNav'
		]),
		...mapGetters('routes', [
			'getRouteData',
		])
	},
	watch: {
		// see: https://www.vuemastery.com/conferences/vueconf-2018/7-secret-patterns-vue-consultants-dont-want-you-to-know-chris-fritz/
		$route: {
			handler: 'excludeNavBar',
			immediate: true
		}
	}
}).$mount('#app');
