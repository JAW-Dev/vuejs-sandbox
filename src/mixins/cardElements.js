import Link from '@/components/Articles/_partials/Link'

export const components = {
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

export const methods = {
  methods: {
    renderElement(conditional) {
      if (conditional) {
        return true
      }
      return false
    }
  }
}

export const filters = {
  filters: {
    dateFormat(value, format, locale, options) {
      let date = new Date(value)
      return (format) ? date.toLocaleDateString(locale, options) : value
    }
  }
}
