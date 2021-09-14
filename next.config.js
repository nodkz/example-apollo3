const path = require('path');

module.exports = {
  /* config options here */
  publicRuntimeConfig: {
    APP_GRAPHQL_URL: 'https://graphql-compose.herokuapp.com/northwind',
    APP_GRAPHQL_WS: 'wss://graphql-compose.herokuapp.com/northwind',
  },
  webpack(config) {
    config.resolve.alias['app'] = path.join(__dirname, 'src');
    return config;
  },
};
