<template>
  <div class="autocomplete" v-if="getProduce">
    <input class="autocomplete__input"
      @click="showData()"
      @blur="closeList()"
      @keyup="keyMonitor"
      v-model="searchFilter"
      v-on:selected="validateSelection"
      :placeholder="placeholder" />

    <div class="autocomplete__results" v-show="shoeListData">
      <div class="results__item" @mousedown="selectData(option)" v-for="option of filteredData" :key="option.id">
        {{ option.name || option.id || '-' }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AutocompleteField',
  props: {
    placeholder: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      selected: { name: null, id: null },
      shoeListData: false,
      searchFilter: ''
    }
  },
  computed: {
    ...mapGetters('produce', [
      'getProduce'
    ]),
    filteredData() {
      const filtered = []
      const regOption = new RegExp(this.searchFilter, 'ig')
      for (const data of this.getProduce) {
        if (this.searchFilter.length < 1 || data.name.match(regOption)) {
          if (filtered.length < 6) {
            filtered.push(data)
          }
        }
      }
      return filtered
    }
  },
  methods: {
    validateSelection(selection) {
      this.selected = selection
    },
    selectData(option) {
      this.selected = option
      this.shoeListData = false
      this.searchFilter = this.selected.name
      this.$emit('selected', this.selected)
    },
    showData() {
      this.searchFilter = ''
      this.shoeListData = true
    },
    closeList() {
      if (!this.selected.id) {
        this.selected = {}
        this.searchFilter = ''
      } else {
        this.searchFilter = this.selected.name
      }
      this.selected = 'selected'
      this.shoeListData = false
    },
    keyMonitor: function(event) {
      if (event.key === 'Enter' && this.filteredData[0]) {
        this.selectData(this.filteredData[0])
      }
    }
  },
  watch: {
    searchFilter() {
      if (this.filteredData.length === 0) {
        this.selected = {}
      } else {
        this.selected = this.filteredData[0]
      }
      this.$emit('filter', this.searchFilter)
    }
  }
}
</script>
