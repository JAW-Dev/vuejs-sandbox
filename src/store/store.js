import Vue from 'vue';
import Vuex from 'vuex';
import produce from './modules/produce';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		value: 0
	},
	modules: {
		produce
	}
});

export default store;
