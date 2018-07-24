import Vue from 'vue';
import Vuex from 'vuex';

// Import Modules
// import produce from './modules/produce';
// import routes from './modules/routes';
// import excludeNav from './modules/excludeNav';
import modules from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules
})

export default store;
