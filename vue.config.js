module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "src/assets/sass/style.scss";'
      }
    }
	},
	baseUrl: process.env.NODE_ENV === 'production' ? 'https://jawittdesigns.github.io/vuejs-sandbox/dist/vuejs-sandbox/dist/' : '/'
};
