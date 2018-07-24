<template>
  <div>
    <div class="title">
      <h1>AutoCompete</h1>
    </div>
		<p class="label">Start typing a type of produce</p>
		<AutocompleteField
      :options="getProduce"
      v-on:selected="validateSelection"
      :disabled="false"
      placeholder="Select Produce"/>
  </div>
</template>

<script>
import AutocompleteField from '@/components/AutocompleteField/AutocompleteField';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      selected: { name: null, id: null }
    };
	},
	computed: {
		...mapGetters([
			'getProduce'
		])
	},
  components: {
    AutocompleteField
  },
  methods: {
    /**
     * Validate the selection.
     *
     * @param {object} selection - The selection object
     */
    validateSelection(selection) {
      this.selected = selection;
    }
  }
};
</script>

<style>
.label {
	text-align: center;
}
</style>
