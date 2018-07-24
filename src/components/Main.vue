<template>
	<main class="main" :class="{'excluded-nav': excludeNav}">
		<router-view/>
	</main>
</template>

<script>
import { mapState } from 'vuex';
export default {
	computed: {
		...mapState('excludeNav', [
			'excludeNav'
		])
	}
}
</script>

<style lang="scss">
.main {
	grid-column: span 5;
	
	@media (max-width: px-to-em(700)) {
		grid-column: 1 / span 6;
	}
}
.excluded-nav {
	grid-column: span 6;
}
</style>
