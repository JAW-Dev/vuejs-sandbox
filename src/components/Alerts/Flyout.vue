<template>
  <div v-if="property" :class="classes" class="alert" >
    <div v-if="hasIconSlot" class="alert__icons">
      <slot name="icon"></slot>
    </div>
    <div v-if="property.title || property.message" class="alert__body">
      <h3 v-if="property.title" class="alert__title" v-html="property.title"></h3>
      <p v-if="property.message" class="alert__message" v-html="property.message"></p>
    </div>
    <div  v-if="property.actions" class="alert__actions" :class="{'has-link': property.actions.link}">
      <div
        v-if="property.actions.close"
        class="alert__action alert__action--close"
        @click="clickCallback(property.actions.close)">
        <span v-html="property.actions.close.text"></span>
      </div>
      <div
        v-if="property.actions.link"
        class="alert__action alert__action--link"
        @click="clickCallback(property.actions.link)">
        <span v-html="property.actions.link.text"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    classes: {
      type: String
    },
    property: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  methods: {
    clickCallback(props) {
      if (typeof props.action === 'function') {
        props.action()
        return false
      }

      return console.error(
        `There is no method associated to the ${props.text} action!`
      )
    }
  },
  computed: {
    hasIconSlot() {
      return !!this.$slots['icon']
    }
  }
}
</script>

<style>
.alert {
  display: flex;
  flex: 1 0 auto;
}
.alert__icons {
  box-sizing: content-box;
}
.alert__body {
  flex: 1 0 0;
}
.alert__actions {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
}
.alert__actions.has-link .alert__action {
  height: 50%;
}
.alert__action {
  display: table;
  flex: 1;
  height: auto;
  width: 100%;
  text-align: center;
}
.alert__action span {
  display: table-cell;
  vertical-align: middle;
}
</style>
