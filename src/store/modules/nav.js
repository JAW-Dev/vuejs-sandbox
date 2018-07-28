export const state = {
	isMobileNavOpen: false
}

export const getters = {
	isMobileNavOpen() {
		return state.isMobileNavOpen;
	}
}

export const mutations = {
	toggleMenuState(state) {
		state.isMobileNavOpen = !state.isMobileNavOpen;
	}
}
