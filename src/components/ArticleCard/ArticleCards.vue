<template>
	<section class="articles" >
		<ArticleCard 
			v-if="responseData" 
			v-for="(data, index) in responseData"
			:key="index"
			:url="data.url"
			:image="data.image"
			:description="data.description"
			:author="data.author"
			:authorLabel="data.authorLabel"
			:title="data.title" />
	</section>
</template>

<script>
import ArticleCard from '@/components/ArticleCard/ArticleCard';

export default {
	components: {
    ArticleCard
  },
	props: {
		responseData: {
      type: Array,
      required: true,
      default: () => []
    }
	}
}
</script>
