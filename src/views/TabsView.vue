<template>
<div>
  <div class="title">
    <h1>Tabs</h1>
  </div>
  <Tabs :tabs="getTabs" />
</div>
</template>

<script>
import Tabs from '@/components/Tabs/Tabs'
import { mapGetters } from 'vuex'

export default {
  components: {
    Tabs
  },
  computed: {
    ...mapGetters('tabs', [
      'getTabs'
    ])
  }
}
</script>

<style lang="scss">
$light-mercury: lighten($grey90, 8%);
.tabs__item {
  border-left: 1px solid $grey20;
  border-top: 1px solid $grey20;
  &:first-child {
    border-top-left-radius: px-to-em(3);
  }
  &:last-child {
    border-right: 1px solid $grey20;
    border-top-right-radius: px-to-em(3);
  }
}
a.tabs__item-link {
  background-color: $grey70;
  border-bottom: 1px solid $grey20;
  color: inherit;
  display: block;
  height: 100%;
  padding: 0.5em 0;
  text-align: center;
  text-decoration: none;
  width: 100%;

  &.active {
    background-color: $light-mercury;
    border-bottom: none;
  }
}

.tabs__content {
  background-color: $light-mercury;
  padding: 1em;
  border-bottom: 1px solid $grey20;
  border-bottom-right-radius: px-to-em(3);
  border-bottom-left-radius:  px-to-em(3);
  border-left: 1px solid $grey20;
  border-right: 1px solid $grey20;
}
</style>
