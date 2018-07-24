import jsonData from '@/data/produce.json';

export const state = {
	produce: jsonData
}

export const getters = {
	getProduce: state => {
		return state.produce;
	}
}
