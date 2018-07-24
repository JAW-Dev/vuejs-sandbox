import router from '@/router';

export const getters = {
	getRouteData() {
		return router.options.routes;
	}
}
