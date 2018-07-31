<template>
	<NavList :routes="menuRoutes">
		<input class="toggle__input" type="checkbox" @click="toggleMenuState" ref="toggleCheckbox"/>
		<font-awesome-icon :icon="['fas', 'bars']" class="nav__toggle" v-show="!isMobileNavOpen" />
		<font-awesome-icon :icon="['far', 'times']" class="nav__toggle" v-show="isMobileNavOpen" />
	</NavList>
</template>

<script>
import AppRoutes from '@/router/routes/AppRoutes'
import NavList from '@/components/Nav/NavList'
import { mapGetters, mapMutations } from 'vuex'

export default {
	components: {
		NavList
	},
	data() {
    return {
			viewportWidth: 0
    };
	},
	methods: {
		...mapMutations('nav', [
			'toggleMenuState',
			'setNavOpenFalse'
		]),
		linkIsClicked() {
			let elements = document.querySelectorAll('.list__item')
			// Add a click event for all router links.
			elements.forEach((element) => {
				// Close the menu when a router link is clicked.
				// Set isMobileNavOpen state to false when a router link is clicked.
				element.addEventListener('click', () => {
					this.$refs.toggleCheckbox.checked = false
					this.setNavOpenFalse()
				});
			})
		},
		checkViewportResize() {
			// Update viewportWidth to viewport size when the window is resized.
			window.addEventListener('resize', () => {
        this.viewportWidth = window.innerWidth
			})
		},
	},
	computed: {
		...mapGetters('nav', [
			'isMobileNavOpen'
		]),
		menuRoutes() {
			// Return the routes object.
			return AppRoutes;
		}
	},
	watch: {
		// Uncheck mobile menu checkbox when viewport withd is 700 or greater.
		// Set isMobileNavOpen state to false.
    viewportWidth() {
			if ( this.viewportWidth >= 700) {
				this.$refs.toggleCheckbox.checked = false;
				this.setNavOpenFalse();
			}
    }
	},
  created() {
		// Set viewportWidth to the viewport width.
		this.viewportWidth = window.innerWidth;
	},
  mounted() {
    this.$nextTick(() => {
			// Check the viewport width on window resize.
      this.checkViewportResize();
			// Check if link is clicked
			this.linkIsClicked();
    })
  },
}
</script>

<style lang="scss">
body .app .nav {
	padding: 0;
}

.nav {
	background-color: $grey20;
  grid-column: span 1;
  grid-row: span 2;
	height: auto;
  position: relative;
	width: auto;
	z-index: 1;

	.toggle__input,
	.nav__toggle {
		height: 2em;
		position: absolute;
		left: 1em;
		top: 0.7em;
		width: 2em;
	}

	.toggle__input {
		cursor: pointer;
		display: none;
		opacity: 0;
		z-index: 5;
		
		@media (max-width: px-to-em(700)) {
			display: block;
			&:checked ~ .nav__list {
				border-right: 1px solid darken($grey20, 5%);
				margin: px-to-em(-30) 0 0;
				overflow: visible;
				padding: px-to-em(88) 1em 1em;
				width: px-to-rem(220);
			}
			&:checked ~ .nav__list .list__item {
				opacity: 1;
				transition: opacity 0s ease 0.3s;
			}
			&:checked ~ .nav__toggle {
				color: $white;
			}
		}
	}

	.nav__toggle {
		display: none;
		z-index: 3;
		fill: $black;

		@media (max-width: px-to-em(700)) {
			display: block;
		}
	}

	.nav__list {
		border-right: 1px solid darken($grey20, 5%);
		display: block;
    list-style-type: none;
		margin: 0;
		overflow: visible;
		padding: 1em;
		position: relative;
		width: px-to-rem(220);
		transition: none;
		z-index: 2;
		@media (max-width: px-to-em(700)) {
			border-right: none;
			overflow: hidden;
			padding: 0;
			width: 0;
			transition: width 0.3s ease;
		}
	}

  .list__item {
		color: $grey70;
		padding-bottom: 0.5rem;
		@media (max-width: px-to-em(700)) {
			opacity: 0;
			transition: opacity 0s ease 0s;
		}
	}

  a {
    color: $grey70;
		text-decoration: none;

    &:hover {
      color: $grey90;
		}

    &.router-link-exact-active {
      color: $grey90;
      cursor: default;
    }
	}

	@media (max-width: px-to-em(700)) {
		grid-column: 1 / span 6;
    position: absolute;
		height: 100vh;
	}
}
</style>
