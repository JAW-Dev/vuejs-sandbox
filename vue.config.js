module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "src/assets/sass/style.scss";'
      }
    }
	},
	baseUrl: process.env.NODE_ENV === 'production' ? '/vuejs-sandbox/dist/' : '/'
};
