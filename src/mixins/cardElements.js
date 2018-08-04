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
    },
    getSource(source) {
      if (source) {
        return source
      }
      return false
    }
  }
}

export const filters = {
  filters: {
    dateFormat(value, format, locale, options) {
      // Check if string is valid date representation
      if (Date.parse(value)) {
        // Convert string to date format
        let date = new Date(value)
        if (value) {
          // If format is set return the formated date,
          // else return the value string
          return (format) ? date.toLocaleDateString(locale, options) : value
        }
      }
      return value
    }
  }
}
