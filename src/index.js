require('babel-register')({
  presets: [ 'env' ]
});
require("babel-polyfill");
  exports = module.exports = require('./app')
