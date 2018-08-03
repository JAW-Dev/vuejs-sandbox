import Link from '@/components/Articles/_partials/Link'

export const link = {
  components: {
    'card-link': Link
  }
}

export const props = {
  props: {
    article: {
      type: Object,
      default: () => {}
    },
    options: {
      type: Object,
      required: false,
      default: () => {}
    }
  }
}

export const renderElement = {
  methods: {
    renderElement(conditional) {
      if (conditional) {
        return true
      }
      return false
    }
  }
}
