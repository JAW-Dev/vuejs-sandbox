<template>
  <div class="title">
    <img src="../assets/logo.png">
    <h1>My Vue.js Components</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('nav', [
      'isMobileNavOpen'
    ])
  }
}
</script>
