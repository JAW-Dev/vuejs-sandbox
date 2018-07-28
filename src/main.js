import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router/index';
import store from '@/store/index';
import '@/registerServiceWorker';

// Add FontAwesome
import '@/config/fontawesome';

// Import mixins
import { excludeMenuMixin } from './mixins/excludeMenuMixin';

new Vue({
  router,
	store,
	mixins: [excludeMenuMixin],
	render: h => h(App),
}).$mount('#app');
