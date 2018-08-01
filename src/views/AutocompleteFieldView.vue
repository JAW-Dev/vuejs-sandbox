<template>
  <div>
    <div class="title">
      <h1>AutoCompete</h1>
    </div>
    <p class="label">Start typing a type of produce</p>
    <AutocompleteField
      :options="getProduce"
      :disabled="false"
      placeholder="Select Produce"/>
  </div>
</template>

<script>
import AutocompleteField from '@/components/AutocompleteField/AutocompleteField'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('produce', [
      'getProduce'
    ])
  },
  components: {
    AutocompleteField
  }
}
</script>

<style scoped>
.label {
  text-align: center;
}
</style>
