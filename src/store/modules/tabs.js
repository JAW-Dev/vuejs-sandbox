import jsonData from '@/data/tabs.json';

export const state = {
	tabs: jsonData
}

export const getters = {
	getTabs: state => {
		return state.tabs;
	}
}
