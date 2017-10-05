const webpackDevConfig = require('./webpack/dev.config')
const webpackProdConfig = require('./webpack/prod.config')

let config;

switch (process.env.npm_lifecycle_event) {
  case 'start':
    config = webpackDevConfig;
    break
  case 'build':
    config = webpackProdConfig;
    break
  default:
    config = webpackDevConfig;
    break
}

module.exports = config;
