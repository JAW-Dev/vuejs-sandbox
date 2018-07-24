<template>
  <div class="autocomplete" v-if="options">
    <input class="autocomplete__input"
      @click="showOptions()"
      @blur="exit()"
      @keyup="keyMonitor"
      v-model="searchFilter"
      :disabled="disabled"
      :placeholder="placeholder" />

    <div class="autocomplete__results" v-show="optionsShown">
      <div class="results__item" @mousedown="selectOption(option)" v-for="option of filteredOptions" :key="option.id">
        {{ option.name || option.id || '-' }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AutocompleteField',
  props: {
    options: {
      type: Array,
      required: true,
      default: () => []
    },
    placeholder: {
      type: String,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      selected: {},
      optionsShown: false,
      searchFilter: ''
    };
  },
  created() {
    this.$emit('selected', this.selected);
  },
  computed: {
    /**
     * Filter options to the typed input.
     *
     * @return void
     */
    filteredOptions() {
      const filtered = [];
      const regOption = new RegExp(this.searchFilter, 'ig');
      for (const option of this.options) {
        if (this.searchFilter.length < 1 || option.name.match(regOption)) {
          if (filtered.length < 6) {
            filtered.push(option);
          }
        }
      }
      return filtered;
    }
  },
  methods: {
    /**
     * Select the option when clicked.
     *
     * @param {array} - The options array.
     *
     * @return void
     */
    selectOption(option) {
      this.selected = option;
      this.optionsShown = false;
      this.searchFilter = this.selected.name;
      this.$emit('selected', this.selected);
    },
    /**
     * Display the option results.
     *
     * @return void
     */
    showOptions() {
      if (!this.disabled) {
        this.searchFilter = '';
        this.optionsShown = true;
      }
    },
    /**
     * Close results when clicked outside the element.
     *
     * @return void
     */
    exit() {
      if (!this.selected.id) {
        this.selected = {};
        this.searchFilter = '';
      } else {
        this.searchFilter = this.selected.name;
      }
      this.$emit('selected', this.selected);
      this.optionsShown = false;
    },
    /**
     * Filter while typing.
     *
     * @param {object} - The event object.
     *
     * @return void
     */
    keyMonitor: function(event) {
      if (event.key === 'Enter' && this.filteredOptions[0]) {
        this.selectOption(this.filteredOptions[0]);
      }
    }
  },
  watch: {
    /**
     * Watch the search filter for changes.
     *
     * @return void
     */
    searchFilter() {
      if (this.filteredOptions.length === 0) {
        this.selected = {};
      } else {
        this.selected = this.filteredOptions[0];
      }
      this.$emit('filter', this.searchFilter);
    }
  }
};
</script>

<style lang="scss" scoped>
.autocomplete {
  position: relative;
  display: block;
  margin: auto;
  width: px-to-rem(250);
}
.autocomplete__input {
  background: $white;
  border: 1px solid darken($mercury, 10%);
  padding: 0.2rem 0.5rem;
  width: 100%;
  &:hover {
    background: darken($mercury, 10%);
  }
}
.autocomplete__results {
  position: absolute;
  background-color: $white;
  border: 1px solid darken($mercury, 10%);
  width: 100%;
  z-index: 1;
}
.results__item {
  color: $black;
  cursor: pointer;
  display: block;
  padding: 0.2rem 0.5rem;
  &:hover {
    background-color: darken($mercury, 10%);
  }
}
</style>
