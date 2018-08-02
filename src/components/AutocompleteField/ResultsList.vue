<template>
  <div class="autocomplete__results">
    <div
      class="results__item"
      @mousedown="selectData(data)"
      v-for="data of filteredData"
      :key="data.id">
      {{ data.name || data.id || '-' }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'autocomplete-results-list',
  props: {
    listData: {
      type: Array,
      required: true
    },
    options: {
      type: Object,
      required: false
    }
  },
  methods: {
    selectData(data) {
      this.$parent.selectData(data)
    }
  },
  computed: {
    filteredData() {
      const filtered = []
      const regOption = new RegExp(this.$parent.searchFilter, 'ig')
      for (const data of this.listData) {
        if (this.$parent.searchFilter.length < 1 || data.name.match(regOption)) {
          if (filtered.length < this.options.resultAmount) {
            filtered.push(data)
          }
        }
      }
      return filtered
    }
  }
}
</script>

<style>

</style>
