<template>
  <div class="app" id="app">
		<Nav />
		<Main />
		<Footer />
  </div>
</template>

<script>
import Nav from '@/components/Nav/Nav'
import Main from '@/components/Main'
import Footer from '@/components/Footer'

export default {
	components: {
		Nav,
		Main,
		Footer
	}
}
</script>

<style lang="scss">
.app {
	display: grid;
	grid-template-columns: px-to-rem(220) repeat(5, 1fr);
	grid-template-rows: 1fr [row2-end];
	min-height: 100vh;
	& > * {
		padding: 1rem;
	}
}
.title {
	text-align: center;
	margin: 0 0 6em;
	@media (max-width: px-to-em(700)) {
		margin: px-to-em(40) 0 6em;
	}
}
</style>
