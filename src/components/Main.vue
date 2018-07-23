<template>
	<main class="main">
		<router-view/>
	</main>
</template>

<style lang="scss">
.main {
	grid-column: span 5;
	
	@media (max-width: px-to-em(700)) {
		grid-column: 1 / span 6;
	}
}
</style>
