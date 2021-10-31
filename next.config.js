const path = require('path');

module.exports = {
  /* config options here */
  publicRuntimeConfig: {
    APP_GRAPHQL_URL: process.env.APP_GRAPHQL_URL,
    APP_GRAPHQL_WS: process.env.APP_GRAPHQL_WS,
  },
  webpack(config) {
    config.resolve.alias['app'] = path.join(__dirname, 'src');
    return config;
  },
};
