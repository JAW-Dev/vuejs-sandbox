export const uniqueKey = {
  methods: {
    uniqueKey() {
      let key = ''
      let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

      for (let i = 0; i < 16; i++) {
        key += possible.charAt(Math.floor(Math.random() * possible.length))
      }

      return key
    }
  }
}
