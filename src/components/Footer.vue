<template>
	<footer class="footer">
		Jason Witt &copy; {{ currentYear }}
	</footer>
</template>

<script>
export default {
	data() {
		return {
			currentYear: new Date().getFullYear()
		}
	}
}
</script>

<style lang="scss">
.footer {
	grid-column: 2 / span 5;
	text-align: center;
}
</style>
