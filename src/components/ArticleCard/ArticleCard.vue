<template>
	<article class="article__card" v-if="image">
		<a :href="url">
			<picture class="card__image">
				<img :src="image" :alt="description">
			</picture>
		</a>
		<p class="card__author" v-if="author">
			<small><span v-if="authorLabel">{{ authorLabel }}</span>{{ author }}</small>
		</p>
		<h3 class="card__title" v-if="title"><a :href="url">{{ title }}</a></h3>
		<p class="card__description" v-if="description">{{ description }}</p>
	</article>
</template>

<script>
export default {
	props: {
		url: {
			type: String,
			required: true
		},
		image: {
			type: String,
			required: false
		},
		description: {
			type: String,
			required: false
		},
		author: {
			type: String,
			required: false
		},
		authorLabel: {
			type: String,
			required: false
		},
		title: {
			type: String,
			required: true
		}
	}
}
</script>
