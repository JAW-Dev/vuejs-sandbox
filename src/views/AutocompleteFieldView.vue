<template>
  <div>
    <div class="title">
      <h1>AutoCompete</h1>
    </div>
    <p class="label">Start typing a type of produce</p>
    <AutocompleteField :listData="getProduce" :options="options"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AutocompleteField from '@/components/AutocompleteField/AutocompleteField'

export default {
  components: {
    AutocompleteField
  },
  data() {
    return {
      options: {
        placeholderText: 'Select Produce',
        resultAmount: 10
      }
    }
  },
  computed: {
    ...mapGetters('produce', [
      'getProduce'
    ])
  }
}
</script>

<style lang="scss">
.label {
  text-align: center;
}
.autocomplete {
  position: relative;
  display: block;
  margin: auto;
  width: px-to-rem(250);
}
.autocomplete__input {
  background: $white;
  border: 1px solid darken($grey90, 10%);
  padding: 0.2rem 0.5rem;
  width: 100%;
  &:hover {
    background: darken($grey90, 10%);
  }
}
.autocomplete__results {
  position: absolute;
  background-color: $white;
  border: 1px solid darken($grey90, 10%);
  width: 100%;
  z-index: 1;
}
.results__item {
  color: $black;
  cursor: pointer;
  display: block;
  padding: 0.2rem 0.5rem;
  &:hover {
    background-color: darken($grey90, 10%);
  }
}
</style>
