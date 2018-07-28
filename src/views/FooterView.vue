<template>
	<footer class="footer" :class="{'excluded-nav': excludeNav}">
		Jason Witt &copy; {{ currentYear }}
	</footer>
</template>

<script>
import { mapState } from 'vuex';

export default {
	data() {
		return {
			currentYear: new Date().getFullYear()
		}
	},
	computed: {
		...mapState('excludeNav', [
			'excludeNav'
		])
	}
}
</script>

<style lang="scss" scoped>
.footer {
	grid-column: 2 / span 5;
	text-align: center;
	@media (max-width: px-to-em(700)) {
		grid-column: 1 / span 6;
	}
}
.excluded-nav {
	grid-column: span 6;
}
</style>
