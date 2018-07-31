<template>
  <div>
    <div class="title">
      <h1>Alerts</h1>
    </div>
    <Alert :properties="alert1">
        <font-awesome-icon slot="alert-icon" :icon="['far', 'times']" class="alert__icon" />
    </Alert>
  </div>
</template>

<script>
import Alert from '@/components/Alerts/Alert'

export default {
  components: {
    Alert
  },
  data() {
    return {
      alert1: {
        type: 'flyout',
        title: 'Alert!',
        message: 'This ia a a Error Alert. <a href="">This ia a a Error Alert.</a> This ia a a Error Alert.',
        actions: {
          close: {
            text: 'Close',
            action: this.closeAction
          },
          link: {
            text: 'Link'
          }
        }
      }
    }
  },
  methods: {
    closeAction() {
      console.log('Close')
    },
    linkAction() {
      console.log('Link')
    }
  }
}
</script>

<style lang="scss">
.alert {
  background-color: red;
  border: 1px solid $black;
  border-radius: px-to-em(5);
  box-shadow: 1px 5px 10px -1px rgba(0,0,0,0.3);
  color: white;
  float: right;
  width: px-to-em(450);
}
.alert__icons {
  border-right: 1px solid $black;
  text-align: center;
  width: px-to-em(60);
}
.alert__icon.fa-w-10 {
  @include vertical-align;
  height: px-to-em(30);
  width: px-to-em(30);
}
.alert__body {
  padding: 0.5em;
  h3,
  p {
    margin-bottom: 0.2em;
  }
}
.alert__actions {
  border-left: 1px solid $black;
  width: px-to-em(60);
}
.alert__action {
  cursor: pointer;
}
.alert__action--link {
    border-top: 1px solid $black;
}
</style>
