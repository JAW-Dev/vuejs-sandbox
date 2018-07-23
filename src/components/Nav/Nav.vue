<template>
  <nav class="nav" id="nav">

		<input class="toggle__input" type="checkbox" />
		<div class="nav__toggle">
			<span class="menu-line"></span>
			<span class="menu-line"></span>
			<span class="menu-line"></span>
		</div>

    <ul class="nav__list">
      <li class="list__item" v-for="(data, index) in routeData" :key="index">
        <router-link :to="data.path" v-on:click.native="closeWhenClicked">{{ data.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import router from '@/router';

export default {
  data() {
    return {
			routeData: [],
			viewportWidth: 0
    };
	},
	methods: {
		closeWhenClicked() {
			document.querySelector('.toggle__input').checked = false;
		}
	},
	watch: {
		// Uncheck mobile menu checkbox when viewport withd is 700 or greater.
    viewportWidth() {
			if ( this.viewportWidth >= 700) {
				document.querySelector('.toggle__input').checked = false;
			}
    }
	},
  created() {
		// set the router data.
		this.routeData = router.options.routes;
		// set the window viewport width.
		this.viewportWidth = window.innerWidth
	},
  mounted() {
		// Check the viewport width on window resize.
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.viewportWidth = window.innerWidth
      });
    })
  },
};
</script>

<style lang="scss">
body .app .nav {
	padding: 0;
}

.nav {
	background-color: $mineshaft;
  grid-column: span 1;
  grid-row: span 2;
	height: auto;
  position: relative;
	width: auto;
	z-index: 1;

	.toggle__input,
	.nav__toggle {
		position: absolute;
		left: 1em;
		top: 1em;
	}

	.toggle__input {
		cursor: pointer;
		display: none;
		height: px-to-em(22);
		opacity: 0;
		width: px-to-em(30);
		z-index: 5;
		
		@media (max-width: px-to-em(700)) {
			display: block;
			&:checked ~ .nav__list {
				border-right: 1px solid darken($mineshaft, 5%);
				margin: px-to-em(-30) 0 0;
				overflow: visible;
				padding: px-to-em(88) 1em 1em;
				width: px-to-rem(220);
			}
			&:checked ~ .nav__list .list__item {
				opacity: 1;
				transition: opacity 0s ease 0.3s;
			}
			&:checked ~ .nav__toggle .menu-line {
				background-color: $white;
			}
		}
	}

	.nav__toggle {
		display: none;
		width: px-to-em(30);
		z-index: 3;

		.menu-line {
			background-color: $black;
			border-radius: px-to-em(3);
			display: block;
			height: 4px;
			margin-bottom: 5px;
			position: relative;
			transition: background-color 0s ease 0.3s;
			z-index: 4;
		}

		@media (max-width: px-to-em(700)) {
			display: block;
		}
	}

	.nav__list {
		border-right: 1px solid darken($mineshaft, 5%);
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
		color: $silver;
		padding-bottom: 0.5rem;
		@media (max-width: px-to-em(700)) {
			opacity: 0;
			transition: opacity 0s ease 0s;
		}
	}

  a {
    color: $silver;
		text-decoration: none;

    &:hover {
      color: $mercury;
		}

    &.router-link-exact-active {
      color: $mercury;
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
