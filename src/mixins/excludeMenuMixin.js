import { mapState,  mapMutations } from 'vuex';
import AppRoutes from '@/router/routes/AppRoutes';

export const excludeMenuMixin = {
	methods: {
		...mapMutations('excludeNav', [
			'excludeNavTrue',
			'excludeNavFalse'
		]),
		excludeNavBar() {
			this.excludeNavFalse()
			this.menuRoutes.forEach(item => {
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
		menuRoutes() {
			return AppRoutes;
		}
	},
	watch: {
		// see: https://www.vuemastery.com/conferences/vueconf-2018/7-secret-patterns-vue-consultants-dont-want-you-to-know-chris-fritz/
		$route: {
			handler: 'excludeNavBar',
			immediate: true
		}
	}
}
