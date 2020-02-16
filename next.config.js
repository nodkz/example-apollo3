const path = require('path');
// https://github.com/zeit/next-plugins/tree/master/packages/next-css
const withCss = require('@zeit/next-css');
// https://github.com/zeit/next-plugins/tree/master/packages/next-sass
const withSass = require('@zeit/next-sass');

module.exports = withCss(
  withSass({
    /* config options here */
    publicRuntimeConfig: {
      APP_GRAPHQL_URL: 'https://graphql-compose.herokuapp.com/northwind/',
    },
    cssModules: false,
    cssLoaderOptions: {},
    sassLoaderOptions: {},
    webpack(config) {
      config.resolve.alias['app'] = path.join(__dirname, 'src');
      return config;
    },
  })
);
