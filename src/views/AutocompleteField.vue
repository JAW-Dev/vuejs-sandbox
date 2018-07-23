<template>
  <div>
    <div class="title">
      <h1>AutoCompete</h1>
    </div>
    <AutocompleteField
      :options="options"
      v-on:selected="validateSelection"
      :disabled="false"
      placeholder="Select a Fruit"/>
  </div>
</template>

<script>
import AutocompleteField from '@/components/AutocompleteField/AutocompleteField';

export default {
  data() {
    return {
      options: [
        { id: '1', name: 'Apple' },
        { id: '2', name: 'Banana' },
        { id: '3', name: 'Orange' },
        { id: '4', name: 'Mango' },
        { id: '5', name: 'Pear' },
        { id: '6', name: 'Peach' },
        { id: '7', name: 'Grape' },
        { id: '8', name: 'Tangerine' },
        { id: '9', name: 'Pineapple' }
      ],
      selected: { name: null, id: null }
    };
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
