import jsonData from '@/data/produce.json';

const state = {
	produce: jsonData
};

const getters = {
	getProduce: state => {
		return state.produce;
	}
};

export default {
	state,
	getters
};
