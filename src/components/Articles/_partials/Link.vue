<template>
  <a :id="id" :class="classes" v-bind="attributes" :href="href" v-if="renderLink">
    <slot name="content"></slot>
  </a>
  <div v-else-if="renderElement">
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: 'card-link',
  props: {
    id: {
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
      type: String,
      required: false,
      default: () => ''
    },
    href: {
      type: String,
      required: false,
      default: () => ''
    },
    renderLink: {
      type: Boolean,
      require: false,
      default: () => true
    },
    renderElement: {
      type: Boolean,
      require: false,
      default: () => false
    }
  }
}
</script>

<style>

</style>
