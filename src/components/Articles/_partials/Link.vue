<template>
  <a
    :id="theId"
    :class="classes"
    v-bind="attributes"
    :href="theHref"
    v-if="renderLink">
    <slot name="content"></slot>
  </a>
  <span v-else>
    <slot name="content"></slot>
  </span>
</template>

<script>
export default {
  name: 'card-link',
  props: {
    theId: {
      type: String,
      required: false,
      default: () => ''
    },
    classes: {
      type: String,
      required: false,
      default: () => ''
    },
    attributes: {
      type: Object,
      required: false,
      default: () => {}
    },
    theHref: {
      type: String,
      required: false,
      default: () => ''
    },
    renderLink: {
      type: Boolean,
      require: false,
      default: () => true
    }
  }
}
</script>

<style>

</style>
