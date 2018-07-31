<template>
	<div v-if="properties" class="alerts" >
		<Flyout 
			v-if="properties.type === 'flyout'"
			:property="properties"
			:classes="'alert__'+ properties.type ">
			<slot name="alert-icon" slot="icon"></slot>
		</Flyout>
	</div>
</template>

<script>
import Flyout from './Flyout'

export default {
	components: {
		Flyout
	},
	props: {
		properties: {
			type: Object,
			required: true,
			default: () => {}
		}
	}
}
</script>
