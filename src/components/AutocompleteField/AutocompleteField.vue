<template>
  <div class="autocomplete" v-if="listData">
    <input class="autocomplete__input"
      @click="showData()"
      @blur="closeList()"
      @keyup="keyMonitor"
      v-model="searchFilter"
      :placeholder="assignedOptions.placeholderText" />
    <ResultsList v-show="showListData" :listData="listData" :options="assignedOptions" />
  </div>
</template>

<script>
import ResultsList from './ResultsList'

export default {
  name: 'autocomplete-field',
  components: {
    ResultsList
  },
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
  data() {
    return {
      selected: { name: null, id: null },
      showListData: false,
      searchFilter: ''
    }
  },
  methods: {
    emitSelected() {
      this.$emit('selected', this.selected)
    },
    setSearchFilter(setName) {
      this.searchFilter = (setName) ? this.selected.name : ''
    },
    selectData(option) {
      this.selected = option
      this.setSearchFilter(true)
      this.emitSelected()
      this.showListData = false
    },
    showData() {
      this.setSearchFilter()
      this.showListData = true
    },
    closeList() {
      if (!this.selected.id) {
        this.selected = {}
        this.setSearchFilter()
      } else {
        this.setSearchFilter(true)
      }
      this.emitSelected()
      this.showListData = false
    },
    keyMonitor: function(event) {
      if (event.key === 'Enter' && this.filteredData[0]) {
        this.selectData(this.filteredData[0])
      }
    }
  },
  computed: {
    assignedOptions() {
      return Object.assign({
        placeholderText: 'Select Items',
        resultAmount: 6
      }, this.options)
    }
  }
}
</script>
