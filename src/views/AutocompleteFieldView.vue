<template>
  <div>
    <div class="title">
      <h1>AutoCompete</h1>
    </div>
    <p class="label">Start typing a type of produce</p>
    <AutocompleteField
      :disabled="false"
      placeholder="Select Produce"/>
  </div>
</template>

<script>
import AutocompleteField from '@/components/AutocompleteField/AutocompleteField'

export default {
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
